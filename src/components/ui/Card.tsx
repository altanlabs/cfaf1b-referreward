import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl border border-black/[0.08] bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] p-6 transition-all duration-200 hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.07)] hover:border-black/[0.12]',
          {
            'bg-gradient-to-br from-black/[0.02] to-transparent': gradient,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;