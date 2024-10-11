import React from 'react';
import { Scale } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Scale className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">LegalAI Analyzer</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Dashboard</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;