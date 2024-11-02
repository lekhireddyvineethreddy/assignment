import React from 'react';
import { FiBarChart2, FiUsers, FiBell, FiFileText } from 'react-icons/fi'; 

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-white p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-8">Appzest</h3>
        
        <nav className="flex flex-col space-y-6">
          <a href="#analytics" className="flex items-center text-gray-700 hover:bg-blue-100 p-3 rounded-lg">
            <FiBarChart2 className="mr-3 text-xl text-blue-600" /> 
            Analytics
          </a>
          <a href="#users" className="flex items-center text-gray-700 hover:bg-blue-100 p-3 rounded-lg">
            <FiUsers className="mr-3 text-xl text-blue-600" /> 
            Users
          </a>
          <a href="#notifications" className="flex items-center text-gray-700 hover:bg-blue-100 p-3 rounded-lg">
            <FiBell className="mr-3 text-xl text-blue-600" /> 
            Notifications
          </a>
          <a href="#transactions" className="flex items-center text-gray-700 hover:bg-blue-100 p-3 rounded-lg">
            <FiFileText className="mr-3 text-xl text-blue-600" /> 
            Transactions
          </a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 mt-8">
        <img src="https://via.placeholder.com/50" alt="User" className="w-10 h-10 rounded-full" />
        <div className="text-gray-700">
          <p className="font-semibold">Vineeth Reddy</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
