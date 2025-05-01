"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "@/lib/motion";

const testimonials = [
  {
    content:
      "With eight arms to multitask, I know efficiency when I see it! MahiFlow's platform has helped our team handle multiple projects simultaneously with incredible ease.",
    author: {
      name: "Ogden Octopus",
      role: "Deep Sea Operations Director",
      avatar: "/ogden-octopus.svg",
    },
  },
  {
    content:
      "As someone who's always moving forward, I appreciate how streamlined this platform is. It's got real teeth when it comes to project management!",
    author: {
      name: "Sammy Shark",
      role: "Chief Predator Officer",
      avatar: "/sammy-shark.svg",
    },
  },
  {
    content:
      "I'll sting the shit out of you if you don't use this platform. It's that good. The flexibility flows like ocean currents, and the transparent pricing really brightens up my day!",
    author: {
      name: "Jerry Jellyfish",
      role: "Bioluminescence Manager",
      avatar: "/jerry-jellyfish.svg",
    },
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-muted/50 py-16"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mx-auto text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Making Waves in the Industry
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dive into what our underwater friends have to say about their experience
            with MahiFlow.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="mb-4 text-muted-foreground">"</div>
          <p className="mb-6">{testimonial.content}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
              <AvatarFallback>{testimonial.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{testimonial.author.name}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {testimonial.author.role}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}