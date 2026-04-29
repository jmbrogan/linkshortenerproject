import Link from 'next/link';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Link2, BarChart3, Settings2, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: 'Instant Link Shortening',
    description:
      'Turn any long URL into a clean, shareable short link in seconds. No fuss, no friction.',
  },
  {
    icon: BarChart3,
    title: 'Click Analytics',
    description:
      'Track how many times your links are clicked and gain insights into your audience.',
  },
  {
    icon: Settings2,
    title: 'Manage Your Links',
    description:
      'View, edit, and delete all your short links from a single, organized dashboard.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast Redirects',
    description:
      'Our infrastructure ensures every redirect happens in milliseconds — keeping your visitors happy.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description:
      'Every link and account is protected by Clerk authentication and industry-standard security practices.',
  },
  {
    icon: Globe,
    title: 'Share Anywhere',
    description:
      'Short links work on social media, email, SMS, or any channel — your audience is always just a click away.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Create an account',
    description: 'Sign up for free in seconds using your email or social login.',
  },
  {
    step: '02',
    title: 'Paste your long URL',
    description: 'Drop any URL into the input field on your dashboard.',
  },
  {
    step: '03',
    title: 'Share your short link',
    description:
      'Copy your new short link and share it anywhere you like.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full border border-border bg-secondary px-4 py-1 text-sm text-muted-foreground">
            Free to use · No credit card required
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Shorten links. <br />
            <span className="text-primary">Track results.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            LinkSnip turns your long, unwieldy URLs into clean short links you
            can share anywhere — and gives you the analytics to see who&apos;s clicking.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <SignUpButton />
          </Button>
          <Button asChild variant="outline" size="lg">
            <SignInButton />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need
            </h2>
            <p className="mt-2 text-muted-foreground">
              Powerful features, simple interface.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-secondary/30 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-2 text-muted-foreground">
              Get started in under a minute.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-4">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="flex flex-1 flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step}
                </span>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground">
            Start managing and tracking your links today.
          </p>
          <Button asChild size="lg">
            <SignUpButton />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>
          Built with{' '}
          <Link
            href="https://nextjs.org"
            className="underline underline-offset-2 hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>{' '}
          &amp;{' '}
          <Link
            href="https://clerk.com"
            className="underline underline-offset-2 hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clerk
          </Link>
        </p>
      </footer>
    </div>
  );
}

