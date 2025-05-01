"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "@/lib/motion";

const testimonials = [
  {
    content:
      "This platform has completely transformed how our team works. We've seen a 40% increase in productivity since implementing it.",
    author: {
      name: "Sarah Johnson",
      role: "Project Manager",
      avatar: "SJ",
    },
  },
  {
    content:
      "The analytics features provide insights we never had before. It's changed our decision-making process for the better.",
    author: {
      name: "David Chen",
      role: "Director of Operations",
      avatar: "DC",
    },
  },
  {
    content:
      "As a startup founder, I needed something scalable and affordable. This solution exceeded my expectations on both fronts.",
    author: {
      name: "Maria Rodriguez",
      role: "CEO & Founder",
      avatar: "MR",
    },
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-muted/50 py-20 md:py-32"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it — hear what our users have to say
            about their experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
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
              <AvatarFallback>{testimonial.author.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{testimonial.author.name}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.author.role}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}