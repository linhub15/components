import type { PropsWithChildren } from "react";
import { cva, type VariantProps } from "../../lib/cva.config";

const styles = cva({
  base: [
    "rounded px-3 py-1.5",
    // Focus
    "focus:outline-hidden focus:outline-2 focus:outline-offset-2 focus:outline-blue-500",
    // Disabled
    "data-disabled:opacity-50",
    // Pending
    "data-pending:opacity-90",
  ],
  variants: {
    /** Available colors */
    color: {
      zinc: "[--btn-txt:var(--color-white)] [--btn-bg:var(--color-zinc-800)] [--btn-border:var(--color-zinc-800)]",
    },
    style: {
      solid: [
        "bg-[var(--btn-bg)] text-[var(--btn-txt)]",
        // Optical border, implemented as the button background to avoid corner artifacts
        "border-transparent bg-(--btn-border)",
      ],
      outline: "border border-[var(--btn-border)]",
      ghost: "",
    },
  },
  defaultVariants: {
    style: "solid",
    color: "zinc",
  },
});

type ButtonStyles = VariantProps<typeof styles>;
type Props = {
  onClick?: () => void | Promise<void>;
  pending?: boolean;
  disabled?: boolean;
} & ButtonStyles &
  PropsWithChildren;
/**
 * TODO: get prop types to show up
 * - [ ] Icon support
 * - [ ] Accessbility (ARIA, Keyboard, Focus, touch size)
 * - [ ] Support <Link> for framework specific navigation
 */
export function Button({
  onClick,
  color,
  style,
  pending,
  disabled,
  children,
}: Props) {
  return (
    <>
      <button
        className={styles({ style, color })}
        type="button"
        disabled={disabled || pending}
        data-disabled={disabled ? "" : undefined}
        data-pending={pending ? "" : undefined}
        onClick={onClick}
      >
        {children}
        {pending && <span className="ml-3 inline-block animate-spin">!</span>}
      </button>
    </>
  );
}
