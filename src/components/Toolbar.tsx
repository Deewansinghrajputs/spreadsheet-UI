import React from "react";
import { Plus, RefreshCcw } from "lucide-react";

const Toolbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-2 border-b bg-white gap-4">
      {/* Left Side - Controls + Tab */}
      <div className="flex items-center gap-4">
        {/* Toolbar Buttons */}
        <div className="flex flex-wrap gap-2">
          {["Tool bar", "Hide fields", "Sort", "Filter", "Cell view"].map(
            (label) => (
              <button
                key={label}
                className="text-sm px-3 py-1.5 border rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => console.log(`${label} clicked`)}
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Tab */}
        <div className="flex items-center gap-1 text-sm font-medium text-gray-700 ml-4 px-3 py-1.5 border rounded-md bg-gray-100">
          <RefreshCcw className="w-4 h-4 text-orange-500" />
          Q3 Financial Overview
        </div>
      </div>

      {/* Right Side - Action Buttons */}
      <div  className="flex flex-wrap gap-2 justify-end">
        {["Import", "Export", "Share"].map((action) => (
          <button
            key={action}
            className="text-sm px-3 py-1.5 border rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => console.log(`${action} clicked`)}
          >
            {action}
          </button>
        ))}

        {/* New Action (green) */}
        <button
          onClick={() => console.log("New Action clicked")}
          className="flex items-center gap-2 px-4 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
