import React from 'react';
import { User } from 'lucide-react';

const ProfilPage = () => {
  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profil</h1>
      </div>
      
      <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
        <div className="text-center">
          <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Halaman Profil</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;