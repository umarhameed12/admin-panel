import React, { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="p-5">{children}</div>;
};

export default PageWrapper;
