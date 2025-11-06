import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dark-surface border border-gold-primary/20 rounded-lg transition-all duration-300',
        hover && 'hover:border-gold-primary/50 hover:shadow-lg hover:shadow-gold-glow',
        className
      )}
    >
      {children}
    </div>
  )
}

