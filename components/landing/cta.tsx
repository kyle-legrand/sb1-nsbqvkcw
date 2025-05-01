"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="border-t bg-muted/50 py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your workflow?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of teams already using our platform to increase
            productivity and streamline their processes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">Contact Sales</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. Start your 14-day free trial today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}