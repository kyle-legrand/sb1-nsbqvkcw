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
      className="w-full py-16"
      aria-labelledby="pricing-heading"
      role="region"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground px-4">
              Choose the plan that best fits your research needs. All plans include our core monitoring features.
            </p>
          </motion.div>

          <div className="mt-8 flex justify-center" role="radiogroup" aria-label="Billing cycle">
            <div className="inline-flex items-center rounded-full border p-1">
              <Button
                variant={billingCycle === "monthly" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("monthly")}
                className="rounded-full"
                role="radio"
                aria-checked={billingCycle === "monthly"}
                aria-label="Monthly billing"
              >
                Monthly
              </Button>
              <Button
                variant={billingCycle === "annually" ? "default" : "ghost"}
                size="sm"
                onClick={() => setBillingCycle("annually")}
                className="rounded-full"
                role="radio"
                aria-checked={billingCycle === "annually"}
                aria-label="Annual billing with 16% savings"
              >
                Annually <span className="ml-1 text-xs">Save 16%</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:px-24" role="list">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                data-testid="pricing-card"
              >
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative flex h-full flex-col">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}