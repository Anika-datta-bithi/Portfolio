import React from 'react';


const Education = () => {
  const educationData = [
    {
      year: "2026",
      degree: "MCE (Master of Computer Engineering)",
      institution: "Stamford University, Dhaka",
      status: "IN PROGRESS"
    },
    {
      year: "2024",
      degree: "BSc in CSE (Computer Science & Engineering)",
      institution: "Sylhet Metropolitan University",
      status: "SUCCESSFULLY COMPLETED"
    },
    {
      year: "2019",
      degree: "HSC (Higher Secondary Certificate)",
      institution: "M.C. College, Sylhet",
      status: "SUCCESSFULLY COMPLETED"
    },
    {
      year: "2016",
      degree: "SSC (Secondary School Certificate)",
      institution: "Govt. Agragami Girls' High School",
      status: "SUCCESSFULLY COMPLETED"
    }
  ];

  return (
    /* Background updated cleanly to white */
    <div className="relative overflow-hidden w-full bg-white font-sans text-neutral-900 overflow-x-hidden m-0 p-0">
      
      {/* Header - Centered precisely */}
      <div className="w-full flex flex-col items-center pt-16 mb-12">
        <h2 className="text-xl font-bold uppercase tracking-[0.5em] text-neutral-900 border-b-2 border-neutral-900/30 pb-1">
          Education
        </h2>
      </div>

      {/* Main Timeline Grid */}
      <div className="relative w-full max-w-[100vw] flex flex-col items-center">
        
        {/* Center Vertical Crisp Dark Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-900/20 to-transparent transform -translate-x-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`relative py-12 px-10 md:px-20 flex flex-col ${
                index % 2 === 0 
                  ? 'md:items-end md:text-right' 
                  : 'md:items-start md:text-left'
              }`}
            >
              {/* Year Badge and Dot */}
              <div className={`flex items-center mb-4 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } justify-center md:justify-start`}
              >
                
                {/* Connecting Dot to Center Line */}
                <div className={`hidden md:block absolute w-3.5 h-3.5 bg-neutral-900 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.15)] z-10 top-[3.4rem] ${
                  index % 2 === 0 ? '-right-[7px]' : '-left-[7px]'
                }`}
                ></div>

                {/* Highly Visible Year Badge */}
                <span className="text-lg font-black bg-neutral-900 text-white px-6 py-1 rounded-sm transform -skew-x-12 shadow-md">
                  {edu.year}
                </span>
              </div>

              {/* Education Details */}
              <div className="z-10 max-w-xl">
                <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-1 leading-tight uppercase tracking-tight">
                  {edu.degree}
                </h3>
                {/* Text color switched to a readable neutral tone for the white bg */}
                <p className="text-neutral-600 text-lg md:text-xl italic font-medium mb-4 drop-shadow-sm">
                  {edu.institution}
                </p>
                
                {/* Status Bar */}
                <div className={`flex items-center gap-3 justify-center ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
                >
                  <div className="w-12 h-[1px] bg-neutral-900/20"></div>
                  <span className="text-[10px] tracking-[0.25em] text-neutral-500 font-bold uppercase">
                    {edu.status}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;