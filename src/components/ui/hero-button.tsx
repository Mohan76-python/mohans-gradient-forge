import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const heroButtonVariants = cva(
  "relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95",
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-primary text-primary-foreground border-0",
          "hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.5)]",
          "before:absolute before:inset-0 before:bg-gradient-secondary before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100"
        ],
        secondary: [
          "glass border border-glass-border text-foreground",
          "hover:shadow-[0_0_20px_hsl(var(--secondary)_/_0.3)]",
          "hover:border-secondary/50 hover:bg-card-hover"
        ],
        ghost: [
          "bg-transparent border border-primary/30 text-primary",
          "hover:bg-primary/10 hover:border-primary",
          "hover:shadow-[0_0_15px_hsl(var(--primary)_/_0.3)]"
        ]
      },
      size: {
        default: "h-12 px-6 text-base font-medium",
        lg: "h-14 px-8 text-lg font-semibold",
        icon: "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface HeroButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean;
}

const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  }
);

HeroButton.displayName = "HeroButton";

export { HeroButton, heroButtonVariants };