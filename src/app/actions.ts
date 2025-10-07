//'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(formData: unknown) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // In a real application, you would handle the form submission here,
  // e.g., send an email, save to a database, etc.
  console.log('Form data received:', parsedData.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Form submitted successfully!' };
}
