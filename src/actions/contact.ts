"use server";

import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the validation schema
export const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    serviceType: z.string().min(1, { message: "Please select a service." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
    success: boolean;
    message?: string;
    errors?: Record<string, string[]>;
};

export async function sendContactEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    // Extract values from FormData
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        serviceType: formData.get("serviceType"),
        message: formData.get("message"),
    };

    // Validate data
    const validatedFields = contactFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please fix the errors below.",
        };
    }

    const { name, email, phone, serviceType, message } = validatedFields.data;

    try {
        if (!process.env.RESEND_API_KEY) {
            console.log("Mock Email Sent:", { name, email, phone, serviceType, message });
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { success: true, message: "Message sent successfully! (Mocked)" };
        }

        const { data, error } = await resend.emails.send({
            from: "Aqabawi Website <onboarding@resend.dev>", // Update with your verifying domain
            to: ["mubxdev@proton.me"], // Using the email from context history or explicit instruction? 
            // User prompt says "Admin Notification: Validated email sent to Client."
            // I'll leave a placeholder or use a known one if available?
            // Context says user email is mubxdev@proton.me. I'll use it.
            subject: `New Inquiry: ${serviceType} - ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceType}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, message: "Failed to send email. Please try again." };
        }

        return { success: true, message: "Message sent successfully! We will contact you soon." };
    } catch (error) {
        console.error("Server Action Error:", error);
        return { success: false, message: "An unexpected error occurred." };
    }
}
