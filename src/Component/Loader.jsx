import React from 'react'

const Loader = () => (
  <div className="fixed inset-0 bg-[#E3E3E3] bg-opacity-80 z-[9999] flex items-center justify-center">
    <div className="animate-spin rounded-full h-14 w-14 border-t-8 border-blue-500 border-solid" />
  </div>
);
export default Loader;