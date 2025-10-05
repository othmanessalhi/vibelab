
"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  business: z.string().min(2, "Business name must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      business: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);

    const whatsappNumber = "212602654219";
    
    const messageText = `Hello Social Vibe,

I'd like to claim my free strategy call. Here are my details:
*Name:* ${data.name}
*Email:* ${data.email}
*Business:* ${data.business}
*Message:* ${data.message}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    
    window.open(whatsappUrl, '_blank');

    setIsLoading(false);

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to be sent.",
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-headline">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="glowing-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-headline">Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} className="glowing-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="business"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Business</FormLabel>
              <FormControl>
                <Input placeholder="Your Business Name" {...field} className="glowing-input" />
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
              <FormLabel className="font-headline">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="resize-none glowing-input"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading} className="w-full !mt-6 glowing-button">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Claim Your Free Strategy Call
            </>
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground pt-2">
            We’ll respond within 24h.
        </p>
      </form>
    </Form>
  );
}
