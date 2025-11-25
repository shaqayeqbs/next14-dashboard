import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must not exceed 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^[\d\s\-\+\(\)]+$/, {
      message: "Please enter a valid phone number",
    }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long" })
    .max(500, { message: "Message must not exceed 500 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
