import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


// ⚠️ REMPLACEZ CES VALEURS PAR VOS VRAIES CLÉS
const EMAILJS_PUBLIC_KEY = "KgiDNb_6HnwE9J6A9";
console.log("Public Key:", EMAILJS_PUBLIC_KEY);
const EMAILJS_SERVICE_ID = "service_waze5gw";
const EMAILJS_TEMPLATE_ID = "template_24fbfqg";

// Schéma de validation Zod
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Surname must be at least 2 characters.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);

    try {
      // Initialiser EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Envoyer l'email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${data.name} ${data.surname}`,
          subject: data.subject,
          message: data.message,
        }
      );

      console.log('SUCCESS!', response.status, response.text);

      // Toast de succès
      toast.success('Message sent successfully! 🎉', {
        description: "I'll get back to you as soon as possible.",
      });

      // Réinitialiser le formulaire
      form.reset();

    } catch (error) {
      console.error('FAILED...', error);
      
      // Toast d'erreur
      toast.error('Failed to send message', {
        description: 'Please try again later or contact me directly via email.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-screen-lg mx-auto xl:px-0 px-5 pt-16 pb-16">
      <div className="flex justify-between items-center flex-col gap-10">
        <div className="w-full">
          <div>
            <h3 className="md:text-3xl text-2xl text-center font-bold">Contact Us</h3>
          </div>
        </div>

        {/* ---- Contact Form ---- */}
        <Form {...form}>
          <div onSubmit={form.handleSubmit(onSubmit)} className="pt-6 space-y-5 w-full">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-secondary rounded py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Surname Field */}
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Surname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your surname"
                      className="bg-secondary rounded py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Subject Field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project subject"
                      className="bg-secondary rounded py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message..."
                      className="bg-secondary rounded min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              onClick={form.handleSubmit(onSubmit)}
              className="w-full bg-yellow-200 text-black font-bold hover:bg-yellow-300 rounded py-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Contact;