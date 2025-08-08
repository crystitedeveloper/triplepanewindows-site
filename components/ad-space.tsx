
import React from 'react';

interface AdSpaceProps {
  size: 'banner' | 'rectangle' | 'skyscraper' | 'leaderboard';
  position?: string;
  className?: string;
}

const AdSpace = ({ size, position, className = '' }: AdSpaceProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'banner':
        return 'h-24 w-full md:w-96';
      case 'rectangle':
        return 'h-64 w-80';
      case 'skyscraper':
        return 'h-96 w-32';
      case 'leaderboard':
        return 'h-20 w-full';
      default:
        return 'h-24 w-full';
    }
  };

  return (
    <div className={`${getSizeClasses()} ${className} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden group`}>
      {/* Placeholder content */}
      <div className="text-center p-4">
        <div className="text-gray-400 text-xs font-medium mb-1">
          AD SPACE
        </div>
        <div className="text-gray-500 text-xs">
          {size.toUpperCase()}
          {position && ` - ${position}`}
        </div>
        <div className="text-gray-400 text-xs mt-1">
          Replace with your ad code
        </div>
      </div>

      {/* Hover effect to show it's a placeholder */}
      <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
      
      {/* Size indicator in corner */}
      <div className="absolute top-1 right-1 bg-gray-200 text-gray-600 text-xs px-1 rounded">
        {size}
      </div>
    </div>
  );
};

export default AdSpace;
