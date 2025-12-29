export default function Button({ children, variant = "primary" }) {
  const base =
    "px-6 py-3 rounded-lg transition-all ";

  const styles =
    variant === "primary"
      ? "bg-indigo-500 hover:bg-indigo-600"
      : "border border-slate-700 hover:bg-slate-800";

  return <button className={base + styles}>{children}</button>;
}
