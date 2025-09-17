"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateCampaignThemes } from '@/ai/flows/generate-campaign-themes';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  targetAudience: z.string().min(10, "Please describe your target audience in more detail.").max(300),
});

type FormValues = z.infer<typeof formSchema>;

export default function CampaignThemeGenerator() {
  const [themes, setThemes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetAudience: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setThemes([]);
    try {
      const result = await generateCampaignThemes({ targetAudience: data.targetAudience });
      if (result && result.themes) {
        setThemes(result.themes);
      } else {
        throw new Error('Failed to generate themes.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not generate campaign themes. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-headline">Target Audience</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Eco-conscious millennials in urban areas who value sustainability and outdoor activities.'"
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full md:w-auto bg-accent hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Themes
                </>
              )}
            </Button>
          </form>
        </Form>

        {(isLoading || themes.length > 0) && (
          <div className="mt-8">
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">Generated Themes</h3>
            <div className="space-y-3">
              {isLoading ? (
                 Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="animate-pulse flex space-x-4 p-4 bg-muted/50 rounded-lg">
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                      </div>
                    </div>
                  ))
              ) : (
                themes.map((theme, index) => (
                  <div key={index} className="p-4 bg-accent/10 rounded-lg flex items-start gap-3">
                    <span className="text-accent font-bold">{index + 1}.</span>
                    <p className="text-primary/90">{theme}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
