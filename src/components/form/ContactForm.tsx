"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Textarea } from "@nextui-org/react";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { contactService } from "@/services/contact.service";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await contactService.submitForm(data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-lg mx-auto animate-bounce-in">
        <CardContent className="text-center p-10">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6 animate-bounce-in" />
          <h3 className="text-2xl font-bold mb-3 animate-fade-in-up">
            Message Sent!
          </h3>
          <p
            className="text-foreground/80 text-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Thank you for your message. We&apos;ll get back to you soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
      <CardHeader className="text-center mb-6">
        <h2 className="text-3xl font-bold">Send us a Message</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Full Name"
            {...register("name")}
            errorMessage={errors.name?.message}
            isInvalid={!!errors.name}
            className="transition-all duration-300 focus-within:scale-105"
          />
          <Input
            label="Email Address"
            type="email"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
            className="transition-all duration-300 focus-within:scale-105"
          />
          <Input
            label="Phone Number"
            type="tel"
            {...register("phone")}
            errorMessage={errors.phone?.message}
            isInvalid={!!errors.phone}
            className="transition-all duration-300 focus-within:scale-105"
          />
          <Textarea
            label="Your Message"
            {...register("message")}
            errorMessage={errors.message?.message}
            isInvalid={!!errors.message}
            minRows={5}
            className="transition-all duration-300 focus-within:scale-105"
          />
          <Button
            type="submit"
            color="primary"
            isLoading={isSubmitting}
            fullWidth
            className="py-7 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            endContent={
              !isSubmitting && (
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              )
            }
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
