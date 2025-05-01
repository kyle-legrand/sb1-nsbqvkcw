import Image from "next/image";
import { motion } from "@/lib/motion";

export function DevicePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-12 w-full max-w-[800px] mx-auto rounded-xl border bg-card p-1 shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-cyan-900/20">
        <Image
          src="/device-preview.png"
          alt="Mahi-mahi fish wearing MahiFlow's sleek monitoring device underwater"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="(max-width: 800px) 100vw, 800px"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
          <div className="rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Lightweight 2.4g device
          </div>
        </div>
      </div>
    </motion.div>
  );
} 