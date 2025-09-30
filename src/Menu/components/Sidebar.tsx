import React, { useState } from 'react';
import { LogOut, Truck, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'manifest', onItemClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard'},
    { id: 'manifest', label: 'Manifest'},
    { id: 'kendaraan', label: 'Kendaraan'},
    { id: 'pengemudi', label: 'Pengemudi'},
    { id: 'profil', label: 'Profil'},
  ];

  const handleItemClick = (item: string) => {
    if (onItemClick) {
      onItemClick(item);
    }
    // Close mobile menu after selection
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Header with Menu */}
      <div className="md:hidden bg-white px-4 py-3 flex items-center justify-between relative shadow">
        <button 
          onClick={toggleMobileMenu}
          className="bg-blue-600 rounded-full p-2 text-white flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        <span className="text-black font-bold text-2xl absolute left-1/2 transform -translate-x-1/2">E-Manifest</span>
        
        <div className="w-8"></div>

        {/* Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 z-40 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        {/* Slide Menu */}
        <div className={`fixed top-0 left-0 bottom-0 w-64 bg-blue-600 z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="bg-blue-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-white font-semibold text-lg">E-Manifest</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-1 hover:bg-blue-600 rounded transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = activeItem === item.id;
                
                return (
                  <li 
                    key={item.id}
                    className="transform transition-all duration-300"
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${index * 80}ms` : '0ms',
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                          : 'text-blue-100 hover:bg-blue-500 hover:text-white hover:transform hover:scale-105'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            
            {/* Mobile Logout */}
            <div className="border-t border-blue-500 mt-6 pt-6">
              <button
                onClick={() => handleItemClick('logout')}
                className="w-full flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-200 hover:transform hover:scale-105"
                style={{ 
                  transitionDelay: mobileMenuOpen ? `${menuItems.length * 80}ms` : '0ms',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex bg-blue-600 w-64 min-h-screen flex-col">
        {/* Desktop Header */}
        <div className="bg-blue-600 px-6 py-4 flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <Truck className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-white font-semibold text-lg">E-Manifest</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = activeItem === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-full transition-colors ${
                      isActive
                        ? 'bg-blue-500 text-white shadow-xl/25'
                        : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="px-4 pb-6">
          <button
            onClick={() => handleItemClick('logout')}
            className="w-full flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;