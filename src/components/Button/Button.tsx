import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import Icon, { type IconName } from "../Icon/Icon";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconName?: IconName;
  href?: string;
}

export default function Button({
  label,
  iconName,
  className,
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className={styles.label}>{label}</span>
        {iconName ? (
          <span className={styles.icon}>
            <Icon name={iconName} size="lg" />
          </span>
        ) : null}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      <span className={styles.label}>{label}</span>
      {iconName ? (
        <span className={styles.icon}>
          <Icon name={iconName} size="lg" />
        </span>
      ) : null}
    </button>
  );
}
