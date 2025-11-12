// src/components/StatsSection.jsx
import React from 'react';

/**
 * STATS SECTION COMPONENT
 * Displays statistics and metrics in an attractive grid layout
 * This component showcases key achievements and numbers
 */
const StatsSection = () => {
  // STATS DATA SECTION
  // This data could also come from props or API
  const stats = [
    { value: '7+', label: 'Projects Completed', color: 'purple' },
    { value: '10+', label: 'Technologies Used', color: 'indigo' },
    { value: '1k+', label: 'Users Served', color: 'green' },
    { value: '97%', label: 'Client Satisfaction', color: 'orange' }
  ];

  return (
    <div data-aos="fade-up" className="mt-16 aos-init">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatBox 
            key={index}
            value={stat.value}
            label={stat.label}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * STAT BOX COMPONENT
 * Individual statistic display box
 */
const StatBox = ({ value, label, color }) => {
  const colorClasses = {
    purple: 'text-purple-400',
    indigo: 'text-indigo-400',
    green: 'text-green-400',
    orange: 'text-orange-400'
  };

  return (
    <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <h3 className={`text-3xl font-bold ${colorClasses[color]} mb-2`}>
        {value}
      </h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};

export default StatsSection;