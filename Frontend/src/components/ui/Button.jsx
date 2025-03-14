import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, variant, size, ...rest }) => {
  // Base button class for common styles
  const baseClass =
    "inline-flex items-center justify-center font-medium focus:outline-none";

  // Tailwind classes for variants
  const variantClasses = {
    default: "bg-secondary dark:bg-secondary-dark text-white hover:bg-blue-600",
    outline:
      "border-2 border-blue-500 text-primary hover:bg-blue-500 hover:text-white",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
    link: "text-blue-500 hover:underline",
  };

  // Tailwind classes for sizes
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 py-2 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  // Combine the variant and size classes, and apply custom className if provided
  const variantClass = variantClasses[variant] || variantClasses.default;
  const sizeClass = sizeClasses[size] || sizeClasses.default;

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "outline",
    "secondary",
    "ghost",
    "link",
  ]),
  size: PropTypes.oneOf(["default", "sm", "lg", "icon"]),
};

Button.defaultProps = {
  className: "",
  variant: "default",
  size: "default",
};

export default Button;
