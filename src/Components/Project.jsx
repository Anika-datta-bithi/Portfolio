import React, { useState, useEffect } from 'react';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Project.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 dark:border-white"></div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 tracking-wide">
          My Projects
        </h2>

        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-start">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col mx-auto w-full max-w-[280px]"
            >
              {/* Clickable Mobile Frame Image - Hardcoded Link Applied Here */}
              <a 
                href="https://affiliate-marketing-web.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-[9/19] w-full overflow-hidden relative bg-gray-100 dark:bg-gray-950"
              >
                <img 
                  src={project.imageSrc} 
                  alt={project.altText} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-xs tracking-wide shadow-md transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    View Live Site ↗
                  </span>
                </div>
              </a>

              {/* Project Info Footer */}
              <div className="p-4 text-center border-t border-gray-100 dark:border-gray-700/50 bg-white dark:bg-gray-800">
                <h3 className="font-bold text-base text-gray-800 dark:text-white truncate">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}