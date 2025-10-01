import React from 'react';

const StatusBadge = ({ status, className = '' }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Overload':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Sesuai':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyles()} ${className}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;