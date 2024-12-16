import { projects } from '../Data/portfolio';

export default function GridComponent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group bg-gray-900 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                >
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement; 
                                target.src = "https://images.unsplash.com/photo-1557821552-17105176677c";
                            }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <button
                            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            Ver proyecto
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}  