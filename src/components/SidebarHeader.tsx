const SidebarHeader = () => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center gap-3 mb-3">
        <img 
          src="/oneethos-logo.png" 
          alt="OneEthos" 
          className="h-8 w-auto"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
      <p className="text-sm text-gray-500">Test Contractor</p>
    </div>
  );
};

export default SidebarHeader;
