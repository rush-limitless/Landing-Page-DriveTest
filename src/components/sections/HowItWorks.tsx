import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { steps } from "../../data/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-surface/50">
      <Container>
        <SectionHeading title="How It Works" subtitle="From raw CSV data to shareable dashboard in 4 simple steps" />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary border-2 border-primary flex items-center justify-center mb-4 relative z-10">
                <span className="text-xl font-bold text-primary">{s.num}</span>
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">{s.title}</h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
