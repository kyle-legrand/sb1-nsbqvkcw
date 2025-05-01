import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg border bg-background p-6"
      role="listitem"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </div>
    </motion.div>
  );
} 