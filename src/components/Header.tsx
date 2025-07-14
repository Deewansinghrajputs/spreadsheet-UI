import React from "react";
import { Bell, ChevronRight, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-3 border-b bg-white gap-3 sm:gap-0">
      {/* Left - Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Workspace</span>
        <ChevronRight size={16} />
        <span>Folder 2</span>
        <ChevronRight size={16} />
        <span className="font-medium text-gray-900">Spreadsheet 3</span>
      </div>

      {/* Right - Search, Notification, Avatar */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8 pr-4 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1 rounded-full">
            2
          </span>
        </div>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
          JD
        </div>
      </div>
    </div>
  );
};

export default Header;
