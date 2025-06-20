import BellSVG from "./icons/BellSVG"
import EnvelopSVG from "./icons/EnvelopSVG"
import LogoSVG from "./icons/LogoSVG"
import SearchSVG from "./icons/SearchSVG"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center">
          <LogoSVG />
        </div>
        <span className="text-2xl font-bold text-white tracking-tighter">WeProcess</span>
      </div>

      <div>
        <button type="button" className="box-shadow-[0px_2px_8px_0px_#00000026] text-[#E5E5E5] text-[16px] font-normal min-h-[52px] px-8 cursor-pointer bg-[#FFFFFF1A] rounded-[20px]">Dashboard</button>
        <button type="button" className="box-shadow-[0px_2px_8px_0px_#00000026] text-[#E5E5E5] text-[16px] font-normal min-h-[52px] px-8 cursor-pointer">Instructions</button>
        <button type="button" className="box-shadow-[0px_2px_8px_0px_#00000026] text-[#E5E5E5] text-[16px] font-normal min-h-[52px] px-8 cursor-pointer">Invoices</button>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-[52px] w-[52px] rounded-full border-[#656565] border flex items-center justify-center">
          <SearchSVG />
        </div>
        <div className="h-[52px] w-[52px] rounded-full border-[#656565] border flex items-center justify-center">
          <BellSVG />
        </div>
        <div className="h-[52px] w-[52px] rounded-full border-[#656565] border flex items-center justify-center">
          <EnvelopSVG />
        </div>

        <div className="h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img src="./images/profile-sm-img.png" alt="we_process_profile_img" className="w-full" />        
        </div>
      </div>

      
    </div>
  )
}

export default Navbar