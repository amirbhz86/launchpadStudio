"use client";
import React from "react";

/** Shared styles for `<a>` or Next `<Link>` that should match primary buttons */
export const primaryButtonClasses =
  "inline-flex min-h-[3.25rem] min-w-[160px] items-center justify-center rounded-full bg-primary px-8 text-sm font-medium tracking-wide text-brand-white shadow-md shadow-primary/25 transition duration-200 ease-out hover:bg-brand-gold-muted hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-10";

export const secondaryButtonClasses =
  "inline-flex min-h-[3.25rem] min-w-[160px] items-center justify-center rounded-full border border-primary/40 bg-transparent px-8 text-sm font-medium tracking-wide text-primary transition duration-200 ease-out hover:border-primary/60 hover:bg-primary/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-10";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
  children,
  className,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  const variantClasses =
    variant === "primary" ? primaryButtonClasses : secondaryButtonClasses;

  return (
    <button
      className={`${variantClasses} ${
        disabled || loading ? "cursor-not-allowed opacity-50 active:scale-100" : "cursor-pointer"
      } ${className ?? ""}`}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-brand-white/30 border-t-brand-white"
          aria-hidden
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
