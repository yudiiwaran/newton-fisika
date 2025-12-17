export const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyle = "px-4 py-2 rounded transition-all";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "border border-slate-300 hover:bg-slate-50",
    accent: "bg-cyan-600 text-white hover:bg-cyan-700"
  };
  return <button className={`${baseStyle} ${variants[variant]}`} {...props}>{children}</button>;
};