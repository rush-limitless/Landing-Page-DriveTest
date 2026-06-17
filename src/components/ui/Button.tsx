import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20",
        outline: "border border-primary text-primary hover:bg-primary/10",
        ghost: "text-muted hover:text-slate-100 hover:bg-slate-700/30",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string;
}

export function Button({ className, variant, size, href, children, ...props }: ButtonProps) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant, size }), className)}>
        {children}
      </a>
    );
  }
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props}>{children}</button>;
}
