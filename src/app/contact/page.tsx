"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! We'll get back to you soon.", {
        icon: <CheckCircle className="h-5 w-5" />,
      });
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.", {
        icon: <AlertCircle className="h-5 w-5" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="bg-card-bg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-xl">
                  <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                    Email
                  </h3>
                  <p className="text-foreground/80 text-sm sm:text-base">
                    contact@productstore.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-bg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-green-500/10 rounded-xl">
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                    Phone
                  </h3>
                  <p className="text-foreground/80 text-sm sm:text-base">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card-bg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-purple-500/10 rounded-xl">
                  <MapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                    Address
                  </h3>
                  <p className="text-foreground/80 text-sm sm:text-base">
                    123 Store St, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card-bg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-border">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 border ${
                    errors.name ? "border-red-500" : "border-border"
                  } rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-input-bg text-input-text outline-none transition-all`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-500" : "border-border"
                  } rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-input-bg text-input-text outline-none transition-all`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={6}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? "border-red-500" : "border-border"
                  } rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 bg-input-bg text-input-text outline-none transition-all resize-none`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "var(--contact-btn-bg)",
                  color: "var(--contact-btn-text)",
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
