
export default function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 hover:-translate-y-1 transition-all">

      <img
        src={image}
        alt={title}
        className="h-70 w-full object-cover rounded-lg mb-4"
      />

      <h4 className="text-xl font-semibold">{title}</h4>

      <p className="text-slate-400 mt-2">
        {description}
      </p>

      <button className="mt-4 h-10 rounded-xl text-[20px] bg-blue-700 text-white">
        <p className="ml-3 mr-3">View Details </p>
      </button>




      
    </div>
  );
}
