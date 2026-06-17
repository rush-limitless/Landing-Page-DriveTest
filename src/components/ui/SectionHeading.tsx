import { motion } from "framer-motion";

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">{title}</h2>
      {subtitle && <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
