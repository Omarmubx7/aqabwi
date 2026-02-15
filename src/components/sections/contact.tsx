"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FramerButton } from "@/components/ui/framer-button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { FramerInput, FramerTextarea } from "@/components/ui/framer-input";
import { contactFormSchema } from "@/lib/schema";
import { sendContactEmail } from "@/actions/contact";
import { useTransition, useState } from "react"; // Using transition for server action if needed, or simple handler
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [isPending, startTransition] = useTransition();
    const [state, setState] = useState<{ success: boolean; message?: string }>({ success: false });

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            serviceType: "Photography",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        startTransition(async () => {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => formData.append(key, value));

            const result = await sendContactEmail({ success: false }, formData); // Simple adapter for now
            setState({ success: result.success, message: result.message });
            if (result.success) {
                form.reset();
            }
        });
    }

    return (
        <section id="contact" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Let's Create Together</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Ready to capture your moments? Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Tell us your vision</h3>
                                    <p className="text-sm text-muted-foreground">Describe your project needs.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Get a custom quote</h3>
                                    <p className="text-sm text-muted-foreground">Tailored to your budget.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Book your session</h3>
                                    <p className="text-sm text-muted-foreground">Secure your date.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="border-0 shadow-lg bg-background">
                        <CardHeader>
                            <CardTitle>Inquiry Form</CardTitle>
                            <CardDescription>No obligation quote.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {state.success ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                                    <h3 className="text-xl font-bold">Thank You!</h3>
                                    <p className="text-muted-foreground">{state.message}</p>
                                    <FramerButton variant="outline" onClick={() => setState({ success: false })}>Send Another</FramerButton>
                                </div>
                            ) : (
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <FramerInput placeholder="Your Name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <FramerInput placeholder="email@example.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone</FormLabel>
                                                        <FormControl>
                                                            <FramerInput placeholder="079..." {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="serviceType"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Service Interest</FormLabel>
                                                    <FormControl>
                                                        <FramerInput placeholder="Photography, Video, etc." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Project Details</FormLabel>
                                                    <FormControl>
                                                        <FramerTextarea placeholder="Tell us about your project..." className="min-h-[100px]" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FramerButton type="submit" className="w-full" size="lg" disabled={isPending}>
                                            {isPending ? "Sending..." : "Send Message"}
                                        </FramerButton>
                                    </form>
                                </Form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
