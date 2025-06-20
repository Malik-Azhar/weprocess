import Navbar from "./Navbar";

const Header = ({ children }) => {
  return (
    <div className="bg-[#043F35] text-white p-6 rounded-[20px] flex flex-col gap-16">
      <Navbar />
      <div className="flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default Header;
