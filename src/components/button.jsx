import Link from 'next/link';

const variants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white',
  secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white',
  outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
  outlineLight: 'border border-gray-600 hover:bg-gray-800 text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  ...props
}) {
  const baseClasses = 'rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  if (Component === 'a' || Component === Link) {
    return (
      <Component
        className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
        {...props}
      >
        {children}
      </Component>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
