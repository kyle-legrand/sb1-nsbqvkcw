"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { Activity, Heart, Thermometer, AlertCircle, Brain, Shield, Waves, Fish } from "lucide-react";
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Comprehensive Health Monitoring",
    description:
      "Track exercise levels, tail beat frequency, calories burned, and overall activity in real-time. Get a complete picture of your fish's fitness and swimming habits.",
    icon: Activity,
  },
  {
    title: "Heart Rate Tracking",
    description:
      "Monitor heart rate and blood flow patterns to detect early signs of stress or health issues. Keep your aquatic friends healthy and thriving.",
    icon: Heart,
  },
  {
    title: "Temperature Monitoring",
    description:
      "Stay informed about water temperature changes and their effects on fish behavior. Ensure optimal environmental conditions for your marine life.",
    icon: Thermometer,
  },
  {
    title: "Early Warning System",
    description:
      "Receive instant alerts about unusual behavior patterns or potential health issues. Take proactive measures to protect your fish.",
    icon: AlertCircle,
  },
  {
    title: "Behavioral Analysis",
    description:
      "Advanced AI algorithms analyze swimming patterns and social interactions. Understand your fish's behavior like never before.",
    icon: Brain,
  },
  {
    title: "Data Security",
    description:
      "Your fish's health data is encrypted and securely stored. Access detailed reports and analytics anytime, anywhere.",
    icon: Shield,
  },
  {
    title: "Environmental Impact",
    description:
      "Monitor how environmental changes affect fish health. Contribute to marine conservation efforts with valuable data.",
    icon: Waves,
  },
  {
    title: "Species-Specific Insights",
    description:
      "Get tailored health recommendations based on fish species. Optimize care routines for better outcomes.",
    icon: Fish,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="w-full bg-muted/50"
      aria-labelledby="features-heading"
      role="region"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
              Features designed for aquatic health
            </h2>
            <p className="text-lg text-muted-foreground px-4">
              MahiFlow provides comprehensive monitoring tools for marine researchers and conservationists.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Product features">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                data-testid="feature-card"
                role="listitem"
              >
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10" data-testid="feature-icon">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
  'aria-label': string;
}

const FeatureCard = ({ feature, index, 'aria-label': ariaLabel }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative h-full transition-all duration-200 hover:shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <CardHeader>
          <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            {feature.icon}
          </div>
          <CardTitle>{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{feature.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};