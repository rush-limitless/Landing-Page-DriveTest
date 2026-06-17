import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const ratBadges = [
  { label: "2G", color: "bg-slate-500" },
  { label: "3G", color: "bg-blue-500" },
  { label: "4G", color: "bg-amber-500" },
  { label: "5G", color: "bg-emerald-500" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary-light/50 to-secondary" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <Container className="relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* RAT Badges */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {ratBadges.map((b) => (
                <span key={b.label} className={`${b.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {b.label}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-6">
              Telecom Drive Test{" "}
              <span className="text-primary">Dashboard</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4">
              Professional network validation & KPI analysis for 2G/3G/4G/5G.
              Upload, visualize, and share — entirely in your browser.
            </p>

            <p className="text-sm text-muted/70 mb-8">
              By <span className="text-primary">F2G-SOLUTIONS</span> / PKFOKAM48 — TELCO ACADEMY
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" href="https://pkfokam48.github.io/Drivetest-Telecom-Dashboard/">
                <ExternalLink size={18} /> Try It Now
              </Button>
              <Button variant="outline" size="lg" href="https://github.com/pkfokam48/Drivetest-Telecom-Dashboard">
                <GithubIcon size={18} /> View on GitHub
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="rounded-xl border border-slate-700/50 overflow-hidden animate-glow">
              <div className="bg-surface p-2">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="bg-secondary rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
                    {/* Simulated dashboard widgets */}
                    <div className="bg-surface rounded-lg p-4 col-span-2 h-32 flex items-end gap-1">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/60 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="bg-surface rounded-lg p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-primary">98.2%</div>
                      <div className="text-xs text-muted">Coverage</div>
                    </div>
                    <div className="bg-surface rounded-lg p-4 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
                    </div>
                    <div className="bg-surface rounded-lg p-4 col-span-2 h-20 flex items-center gap-2">
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-primary to-emerald-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
