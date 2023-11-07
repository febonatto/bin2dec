import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  error?: string;
}
export function Input({ label, error, id, disabled, ...props }: InputProps) {
  return (
    <div className="relative pb-5">
      <label
        htmlFor={id}
        className="absolute -top-2.5 left-3 bg-zinc-950 px-1 text-sm font-medium text-zinc-300"
      >
        {label}
      </label>
      <input
        {...props}
        id={id}
        type="text"
        className={cn(
          'w-full rounded border border-zinc-600 bg-zinc-950 px-2 pb-3 pt-4 text-green-500 outline-none',
          disabled && 'text-zinc-300',
        )}
      />
      {error && (
        <small className="absolute bottom-0 left-0 text-xs text-red-700">
          {error}
        </small>
      )}
    </div>
  );
}
