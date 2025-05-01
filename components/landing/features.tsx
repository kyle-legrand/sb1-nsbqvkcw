"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion";
import { BarChart2, Clock, Cog, Gauge, Lock, Users } from "lucide-react";

const features = [
  {
    title: "Powerful Analytics",
    description:
      "Gain valuable insights with our comprehensive analytics dashboard.",
    icon: BarChart2,
  },
  {
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team members in real-time.",
    icon: Users,
  },
  {
    title: "Automation Tools",
    description:
      "Automate repetitive tasks to save time and reduce errors.",
    icon: Cog,
  },
  {
    title: "Enhanced Security",
    description:
      "Rest easy knowing your data is protected by enterprise-grade security.",
    icon: Lock,
  },
  {
    title: "Performance Optimization",
    description:
      "Maximize efficiency with our performance-focused architecture.",
    icon: Gauge,
  },
  {
    title: "Time Tracking",
    description:
      "Monitor time spent on tasks and projects for better resource allocation.",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="container space-y-12 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Features designed for modern teams
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Our platform provides everything you need to streamline your workflow
          and boost productivity.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ElementType;
  };
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="transition-all duration-200 hover:shadow-md">
        <CardHeader>
          <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle>{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{feature.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}