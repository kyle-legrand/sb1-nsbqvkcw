"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "@/lib/motion";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams.",
    price: {
      monthly: "$12",
      annually: "$120",
    },
    features: [
      "Up to 5 users",
      "Basic analytics",
      "24-hour support response time",
      "5GB storage",
      "3 integrations",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Ideal for growing teams with more needs.",
    price: {
      monthly: "$29",
      annually: "$290",
    },
    features: [
      "Up to 20 users",
      "Advanced analytics",
      "12-hour support response time",
      "20GB storage",
      "Unlimited integrations",
      "Custom reporting",
      "API access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced requirements.",
    price: {
      monthly: "$79",
      annually: "$790",
    },
    features: [
      "Unlimited users",
      "Premium analytics",
      "4-hour support response time",
      "Unlimited storage",
      "Unlimited integrations",
      "Custom reporting",
      "API access",
      "Dedicated account manager",
      "SSO & advanced security",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annually">("monthly");

  return (
    <section
      id="pricing"
      className="container space-y-12 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the perfect plan for your needs. Always know what you'll pay.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border p-1">
            <Button
              variant={billingCycle === "monthly" ? "default" : "ghost"}
              size="sm"
              onClick={() => setBillingCycle("monthly")}
              className="rounded-full"
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "annually" ? "default" : "ghost"}
              size="sm"
              onClick={() => setBillingCycle("annually")}
              className="rounded-full"
            >
              Annually <span className="ml-1 text-xs">Save 16%</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            billingCycle={billingCycle}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

interface PricingCardProps {
  plan: {
    name: string;
    description: string;
    price: {
      monthly: string;
      annually: string;
    };
    features: string[];
    cta: string;
    popular: boolean;
  };
  billingCycle: "monthly" | "annually";
  index: number;
}

function PricingCard({ plan, billingCycle, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        className={`relative flex h-full flex-col ${
          plan.popular
            ? "border-primary shadow-md before:absolute before:-top-4 before:left-0 before:right-0 before:mx-auto before:w-fit before:rounded-full before:bg-primary before:px-3 before:py-1 before:text-xs before:font-medium before:text-primary-foreground before:content-['Most_popular']"
            : ""
        }`}
      >
        <CardHeader>
          <CardTitle>{plan.name}</CardTitle>
          <CardDescription className="pt-1.5">
            {plan.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="mb-6">
            <span className="text-3xl font-bold">
              {billingCycle === "monthly"
                ? plan.price.monthly
                : plan.price.annually}
            </span>
            <span className="text-muted-foreground">
              {billingCycle === "monthly" ? "/month" : "/year"}
            </span>
          </div>

          <ul className="space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={plan.popular ? "default" : "outline"}
            asChild
          >
            <Link href="#">{plan.cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}