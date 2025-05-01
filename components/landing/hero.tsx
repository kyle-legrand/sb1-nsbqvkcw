"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/motion";
import { DevicePreview } from "./device-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div
          className="absolute -top-40 left-1/2 aspect-square w-full -translate-x-1/2 rounded-full bg-gradient-radial from-primary/20 to-transparent opacity-50 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Now Available
              <span className="ml-2 text-xs">v1.0.0</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Track Fish Health{" "}
            <span className="text-primary">Effortlessly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-2xl text-lg text-muted-foreground px-4"
          >
            Monitor fish activity, health, and environmental conditions with our lightweight
            tracking device. Get real-time insights for better aquatic ecosystem management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">View Demo</Link>
            </Button>
          </motion.div>

          <DevicePreview />
        </div>
      </div>
    </section>
  );
}