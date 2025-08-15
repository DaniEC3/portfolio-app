import { z } from 'zod';
import { cookies } from 'next/headers';

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Subject is too short."),
  message: z.string().min(10, "Please write at least 10 characters."),
  // Honeypot (must be empty)
  company: z.string().optional(),
});

// type Ac.....,

export default function actions() {
  return (
    <div>
      
    </div>
  )
}
