import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  plan: {
    name: string;
    description: string;
    price: string;
    features: string[];
  };
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg border bg-background p-6"
      role="listitem"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
          <p className="mt-4">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </p>
        </div>
        <ul className="space-y-2" role="list">
          {plan.features.map((feature: string) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full" aria-label={`Get started with ${plan.name} plan`}>
          Get started
        </Button>
      </div>
    </motion.div>
  );
} 