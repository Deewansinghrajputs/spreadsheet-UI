import React from "react";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import SpreadsheetTable from "./components/SpreadsheetTable";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Breadcrumb & User Controls */}
      <Header />

      {/* Toolbar with actions */}
      <Toolbar />

      {/* Main Spreadsheet */}
      <div className="p-4">
        <SpreadsheetTable />
      </div>
    </div>
  );
};

export default App;
