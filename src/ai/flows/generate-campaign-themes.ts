'use server';

/**
 * @fileOverview AI-powered tool to generate marketing campaign themes for a specific target audience.
 *
 * - generateCampaignThemes - A function that generates campaign themes.
 * - GenerateCampaignThemesInput - The input type for the generateCampaignThemes function.
 * - GenerateCampaignThemesOutput - The return type for the generateCampaignThemes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCampaignThemesInputSchema = z.object({
  targetAudience: z
    .string()
    .describe('The target audience for the marketing campaign.'),
});
export type GenerateCampaignThemesInput = z.infer<
  typeof GenerateCampaignThemesInputSchema
>;

const GenerateCampaignThemesOutputSchema = z.object({
  themes: z
    .array(z.string())
    .describe('An array of generated marketing campaign themes.'),
});
export type GenerateCampaignThemesOutput = z.infer<
  typeof GenerateCampaignThemesOutputSchema
>;

export async function generateCampaignThemes(
  input: GenerateCampaignThemesInput
): Promise<GenerateCampaignThemesOutput> {
  return generateCampaignThemesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCampaignThemesPrompt',
  input: {schema: GenerateCampaignThemesInputSchema},
  output: {schema: GenerateCampaignThemesOutputSchema},
  prompt: `You are a marketing expert tasked with generating creative campaign themes for a specific target audience.

  Target Audience: {{{targetAudience}}}

  Generate 5 distinct and engaging campaign themes tailored to this audience. Each theme should be concise, memorable, and reflect the target audience's interests and values. Return as a JSON array of strings.`,
});

const generateCampaignThemesFlow = ai.defineFlow(
  {
    name: 'generateCampaignThemesFlow',
    inputSchema: GenerateCampaignThemesInputSchema,
    outputSchema: GenerateCampaignThemesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
