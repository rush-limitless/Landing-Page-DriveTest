import { Mail } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-700/30 py-12 bg-secondary">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-100">F2G-SOLUTIONS</p>
          <p className="text-sm text-muted mt-1">PKFOKAM48 — TELCO ACADEMY</p>
        </div>

        <p className="text-sm text-muted">© {new Date().getFullYear()} F2G-SOLUTIONS. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/pkfokam48" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-slate-100 transition-colors" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="mailto:contact@f2g-solutions.com" className="text-muted hover:text-slate-100 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
