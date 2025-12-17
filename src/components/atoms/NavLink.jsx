export const NavLink = ({ href, children }) => (
  <a href={href} className="hover:underline text-sm text-slate-700">
    {children}
  </a>
);