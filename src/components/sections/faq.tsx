"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What are your rates for photography and videography?",
        answer: "Rates vary depending on the scope of the project, location, and specific requirements. We offer packages starting from 200 JD. Please contact us for a personalized quote."
    },
    {
        question: "How long does it take to receive the final edited photos/videos?",
        answer: "For standard photography sessions, turnaround is typically 3-5 business days. Video projects usually require 5-7 business days for editing and post-production."
    },
    {
        question: "Do you travel for shoots outside of Aqaba/Amman?",
        answer: "Yes, we are available for projects across Jordan and willing to travel internationally if required. Travel fees may apply."
    },
    {
        question: "What equipment do you use?",
        answer: "We use high-end professional cameras (Sony/Canon cinema line), professional lighting, and audio equipment to ensure the highest quality results."
    }
];

export default function FAQ() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Everything you need to know about our services.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
