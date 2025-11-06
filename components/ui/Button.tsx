import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 touch-manipulation flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-gold-primary text-dark-bg hover:scale-105 active:scale-95 glow-gold',
    secondary: 'bg-dark-surface border-2 border-gold-primary text-gold-primary hover:bg-gold-primary/10',
    outline: 'border-2 border-gold-primary/50 text-gold-primary hover:bg-gold-primary/10 active:bg-gold-primary/20',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[48px]',
    lg: 'px-10 py-5 text-lg sm:text-xl min-h-[56px]',
  }

  const styles = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  )
}

