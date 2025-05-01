"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="w-full border-t bg-muted/50 py-16" role="region" aria-label="Call to action">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
          data-testid="motion-container"
        >
          <h2 className="mx-auto text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to revolutionize fish health monitoring?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join leading marine researchers and conservationists using MahiFlow to track fish health,
            understand behavior patterns, and protect aquatic ecosystems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4" role="group" aria-label="Action buttons">
            <Button size="lg" asChild aria-label="Start monitoring fish health">
              <Link href="#" role="button">
                Start Monitoring <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild aria-label="Schedule a product demo">
              <Link href="#" role="button">Schedule Demo</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Try our research-grade device with a 30-day satisfaction guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}