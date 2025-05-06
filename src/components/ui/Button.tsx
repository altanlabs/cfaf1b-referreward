import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/10 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none gap-2',
          {
            'bg-black text-white hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98]': variant === 'primary',
            'bg-white border border-black/10 text-black hover:bg-black/5 hover:scale-[1.02] active:scale-[0.98]': variant === 'secondary',
            'hover:bg-black/5 text-black/80': variant === 'ghost',
            'bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]': variant === 'success',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-8 text-base': size === 'md',
            'h-14 px-12 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;