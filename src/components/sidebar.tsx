import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaEnvelope,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import logo from "/logo.png";
import * as SC from "../styles";

interface NavItem {
  icon: ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { icon: <FaHome />, label: "Dashboard" },
  { icon: <FaChartBar />, label: "Analytic & Report" },
  { icon: <FaUsers />, label: "Account manage..." },
  { icon: <FaEnvelope />, label: "Message" },
  { icon: <FaClipboardList />, label: "Job oversight" },
];

const lowNavItems: NavItem[] = [
  { icon: <FaCog />, label: "Settings" },
  { icon: <FaSignOutAlt />, label: "Logout" },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <button
        className="md:hidden text-2xl p-1 ml-1 fixed top-4 left-0 z-50 bg-green-800 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      <div
        className={`fixed top-0 left-0 lg:h-[1006px] z-40 transform bg-[#F7F4F4] text-[var(--color)] rounded-r-[15px] p-4 transition-transform duration-300 ease-in-out
        w-[250px] md:static md:translate-x-0 md:w-[25%] md:h-[2200px] md:flex
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:rounded-[15px]`}
      >
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-[102px] h-[82px] pt-[22px]" />
          <div className="space-y-[16px] flex flex-col pt-[15px] h-[365px] w-[173px]">
            {navItems.map((item, index) => (
              <SC.Button key={index}>
                <span className="text-[12px]">{item.icon}</span>
                <span className="text-[12px]">{item.label}</span>
              </SC.Button>
            ))}
          </div>
          <div className="space-y-[16px] flex flex-col w-[172px]">
            {lowNavItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-3 cursor-pointer hover:bg-green-700 hover:text-white p-2 rounded-md border border-green-700"
              >
                <span className="text-[12px]">{item.icon}</span>
                <span className="text-[12px]">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
