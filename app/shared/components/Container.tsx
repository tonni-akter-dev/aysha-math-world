import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:px-25 mx-auto px-4 sm:px-6">{children}</div>
  );
};

export default Container;
