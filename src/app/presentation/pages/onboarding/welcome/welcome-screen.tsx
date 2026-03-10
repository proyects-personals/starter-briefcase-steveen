import React from "react";
import { FaUserCheck, FaChartLine, FaCogs } from "react-icons/fa";

const WelcomeScreen: React.FC = () => {
  return (
    <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col gap-10">
      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          You are now inside the administration panel. From here you can manage
          users, products, permissions and system settings easily and securely.
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition">
          <FaUserCheck className="text-blue-500 text-2xl mb-4" />
          <h3 className="font-semibold text-lg text-gray-800">
            User Management
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Create, edit and manage user profiles, roles and permissions.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition">
          <FaChartLine className="text-green-500 text-2xl mb-4" />
          <h3 className="font-semibold text-lg text-gray-800">
            Analytics & Reports
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            View system activity, totals and performance metrics in real time.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition">
          <FaCogs className="text-purple-500 text-2xl mb-4" />
          <h3 className="font-semibold text-lg text-gray-800">
            System Settings
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Configure application behavior, security and preferences.
          </p>
        </div>
      </div>

      {/* FOOT NOTE */}
      <p className="text-sm text-gray-400">
        If you need help, contact the system administrator or check the
        documentation.
      </p>
    </div>
  );
};

export default WelcomeScreen;
