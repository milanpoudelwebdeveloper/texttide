import React from "react";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-[#edf3fc] h-screen">{children}</div>;
};

export default LayoutWrapper;
