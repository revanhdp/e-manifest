import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import ManifestPage from './ManifestPage';
import KendaraanPage from './KendaraanPage';
import PengemudiPage from './PengemudiPage';
import ProfilPage from './ProfilPage';

const Navigation: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('manifest');

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
    
    // Handle logout
    if (item === 'logout') {
      // Add logout logic here (e.g., clear session, redirect to login)
      console.log('Logout clicked');
    }
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'manifest':
        return <ManifestPage />;
      case 'kendaraan':
        return <KendaraanPage />;
      case 'pengemudi':
        return <PengemudiPage />;
      case 'profil':
        return <ProfilPage />;
      default:
        return <ManifestPage />;
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Mobile: Stack header on top, Desktop: Side by side */}
      <div className="md:flex md:h-full">
        <Sidebar 
          activeItem={activeMenuItem} 
          onItemClick={handleMenuItemClick}
        />
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Navigation;