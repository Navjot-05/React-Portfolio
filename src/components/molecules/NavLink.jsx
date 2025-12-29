export default function NavLink({ href, children }) {
  return (
    <a href={href} className="hover:text-indigo-400">
      {children}
    </a>
  );
}
