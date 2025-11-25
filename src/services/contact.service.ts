import { apiClient } from "./api/client";
import { API_ENDPOINTS } from "./api/endpoints";
import { ContactFormData } from "@/lib/types";

export interface ContactServiceInterface {
  submitForm(
    data: ContactFormData
  ): Promise<{ success: boolean; message: string }>;
}

class ContactService implements ContactServiceInterface {
  async submitForm(
    data: ContactFormData
  ): Promise<{ success: boolean; message: string }> {
    try {
      // Simulate API call since we don't have a real endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, this would be:
      // return await apiClient.post(API_ENDPOINTS.CONTACT.SUBMIT, data)

      console.log("Contact form submitted:", data);
      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    } catch (error) {
      throw new Error("Failed to submit contact form");
    }
  }
}

export const contactService = new ContactService();
