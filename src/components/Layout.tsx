import { ReactNode, useEffect, useState } from "react";
import Navbar from "./NavComponent";
import Sidebar from "./SideComponent";
const Layouts = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    if (window.screen.width < 600) {
      setShowSidebar(false);
    }
  }, [window.screen.width]);
  return (
    <div className="flex max-w-[100vw] bg-primaryBlack min-h-screen">
      {showSidebar ? <Sidebar /> : null}
      <div className="overflow-hidden w-full relative">
        <Navbar />
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
