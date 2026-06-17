import { motion } from "framer-motion";
import { Users, MapPin, Settings, Presentation } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useCases } from "../../data/content";

const icons = [Users, MapPin, Settings, Presentation];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-secondary">
      <Container>
        <SectionHeading title="Built For Your Team" subtitle="Whether in the field or the office, the dashboard adapts to your workflow" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((uc, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-xl border border-slate-700/30 bg-gradient-to-br ${uc.color} hover:border-primary/40 transition-all`}
              >
                <Icon size={24} className="text-primary mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2">{uc.title}</h3>
                <p className="text-sm text-muted">{uc.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
