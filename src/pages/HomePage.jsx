import React from 'react';
import Sidebar from '../components/Sidebar';
import LineChart from '../components/LineChart';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { AiOutlineUsergroupAdd, AiOutlineCalendar } from 'react-icons/ai';

const HomePage = () => {
  return (
    <div className="flex bg-sky-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Analytics Dashboard</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Select Date Range
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Users Card - Green Color */}
          <div className="p-4 bg-white rounded-lg shadow flex items-center">
            <FiUsers className="text-green-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Users</h3>
              <p className="text-2xl font-bold text-green-600">140</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center">
            <FiUserPlus className="text-blue-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Referral Users</h3>
              <p className="text-2xl font-bold text-blue-600">64</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow flex items-center">
            <AiOutlineUsergroupAdd className="text-green-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Today's Organic Users</h3>
              <p className="text-2xl font-bold text-green-600">76</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center">
            <AiOutlineCalendar className="text-blue-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">This Week Users</h3>
              <p className="text-2xl font-bold text-blue-600">679</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center">
            <AiOutlineCalendar className="text-blue-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">This Month Users</h3>
              <p className="text-2xl font-bold text-blue-600">22,727</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center">
            <AiOutlineCalendar className="text-blue-600 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Last Month Users</h3>
              <p className="text-2xl font-bold text-blue-600">71,291</p>
            </div>
          </div>
        </section>

        <section className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Last 7 Days: Registrations vs Referrals</h3>
          <LineChart />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
