import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
/*   Phone,
 */  Clock,
} from "lucide-react";

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
const EMAILJS_SERVICE_ID = "service_waze5gw";
const EMAILJS_TEMPLATE_ID = "template_24fbfqg";

// Schéma de validation Zod
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  surname: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  subject: z.string().min(5, {
    message: "Le sujet doit contenir au moins 5 caractères.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Le message doit contenir au moins 10 caractères.",
    })
    .max(500, {
      message: "Le message ne doit pas dépasser 500 caractères.",
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

      console.log("SUCCESS!", response.status, response.text);

      // Toast de succès
      toast.success("Message envoyé avec succès ! 🎉", {
        description: "Je vous répondrai dans les plus brefs délais.",
      });

      // Réinitialiser le formulaire
      form.reset();
    } catch (error) {
      console.error("FAILED...", error);

      // Toast d'erreur
      toast.error("Échec de l'envoi du message", {
        description:
          "Veuillez réessayer plus tard ou me contacter directement par email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "zoulkifirousabiadam@gmail.com",
      link: "mailto:zoulkifirousabiadam@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      value: "Cotonou, Bénin",
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilité",
      value: "Lun - Ven, 9h - 18h",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
    >
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-200/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="md:text-5xl text-4xl font-bold mb-4">
            Contactez-<span className="text-yellow-200">moi</span>
          </h2>
          <p className="text-muted-foreground font-normal md:text-2xl text-xl leading-relaxed max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in opacity-0 animation-delay-200">
            <div className="bg-secondary rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="text-yellow-200 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-yellow-200 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card avec CTA */}
            {/*  <div className="bg-gradient-to-br from-yellow-200/10 to-transparent rounded-2xl p-8 border border-yellow-200/20">
              <h3 className="text-xl font-bold mb-3">Vous préférez un appel ?</h3>
              <p className="text-gray-400 mb-6">
                Planifions un appel pour discuter de votre projet en détail.
              </p>
              <Button className="w-full bg-yellow-200 text-black hover:bg-yellow-300 font-semibold">
                <Phone className="mr-2 w-4 h-4" />
                Programmer un appel
              </Button>
            </div> */}
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3 animate-fade-in opacity-0 animation-delay-400">
            <div className="bg-secondary rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Nom et Prénom */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center gap-2">
                            <User className="w-4 h-4 text-yellow-200" />
                            Nom
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre nom"
                              className="bg-background border-gray-700 focus:border-yellow-200 rounded-xl h-12 transition-all duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="surname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center gap-2">
                            <User className="w-4 h-4 text-yellow-200" />
                            Prénom
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre prénom"
                              className="bg-background border-gray-700 focus:border-yellow-200 rounded-xl h-12 transition-all duration-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Sujet */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white flex items-center gap-2">
                          <Mail className="w-4 h-4 text-yellow-200" />
                          Sujet
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Sujet de votre message"
                            className="bg-background border-gray-700 focus:border-yellow-200 rounded-xl h-12 transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-yellow-200" />
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Parlez-moi de votre projet..."
                            className="bg-background border-gray-700 focus:border-yellow-200 rounded-xl min-h-[150px] resize-none transition-all duration-300"
                            {...field}
                          />
                        </FormControl>
                        <div className="flex justify-between items-center mt-2">
                          <FormMessage />
                          <span className="text-sm text-gray-500">
                            {field.value.length}/500
                          </span>
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Bouton Submit */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-yellow-200 text-black font-bold hover:bg-yellow-300 rounded-xl h-12 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Section FAQ ou info supplémentaire */}
        {/* <div className="mt-16 text-center animate-fade-in opacity-0 animation-delay-600">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full border border-gray-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">
              Disponible pour de nouveaux projets
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
