import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Home, Info, Layers, Link as LinkIcon, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen size={36} className="mr-3" />
            <h1 className="text-2xl font-bold">Formation OnlineFormaPro</h1>
          </div>
          
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive 
                      ? "flex items-center border-b-2 border-white py-1 font-medium" 
                      : "flex items-center py-1 hover:border-b-2 hover:border-white transition-all"
                  }
                >
                  <Home size={18} className="mr-1" /> Accueil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/certification" 
                  className={({ isActive }) => 
                    isActive 
                      ? "flex items-center border-b-2 border-white py-1 font-medium" 
                      : "flex items-center py-1 hover:border-b-2 hover:border-white transition-all"
                  }
                >
                  <Info size={18} className="mr-1" /> Certification
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/modules" 
                  className={({ isActive }) => 
                    isActive 
                      ? "flex items-center border-b-2 border-white py-1 font-medium" 
                      : "flex items-center py-1 hover:border-b-2 hover:border-white transition-all"
                  }
                >
                  <Layers size={18} className="mr-1" /> Modules
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/resources" 
                  className={({ isActive }) => 
                    isActive 
                      ? "flex items-center border-b-2 border-white py-1 font-medium" 
                      : "flex items-center py-1 hover:border-b-2 hover:border-white transition-all"
                  }
                >
                  <LinkIcon size={18} className="mr-1" /> Ressources
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive 
                      ? "flex items-center border-b-2 border-white py-1 font-medium" 
                      : "flex items-center py-1 hover:border-b-2 hover:border-white transition-all"
                  }
                >
                  <Phone size={18} className="mr-1" /> Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;