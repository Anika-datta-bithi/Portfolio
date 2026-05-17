import React, { useState, useEffect } from 'react';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Project.json located in the public folder
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
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 tracking-wide">
          The Project
        </h2>

        {/* Responsive Grid Row (1 row on desktops, stacks cleanly on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Clickable Image Linking to Live Site */}
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-[3/4] w-full overflow-hidden"
              >
                <img 
                  src={project.imageSrc} 
                  alt={project.altText} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md">
                    View Live Site ↗
                  </span>
                </div>
              </a>

              {/* Project Info Footer */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white truncate">
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