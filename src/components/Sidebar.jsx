import { assets } from "../assets/assets"
export function Sidebar(){
   return <div className="max-sm:hidden min-h-screen w-56 bg-slate-100 flex flex-col justify-between" >
    <div>
      <img className={"h-12 w-12 pt-5 pl-5 cursor-pointer"} src={assets.menu_icon} alt="" />
      <div className="flex justify-center gap-2 items-center mt-10  pr-3 bg-white shadow-lg rounded-full h-12 w-36 pl-5 ml-5 cursor-pointer">
        <img className={"h-8 w-6 "} src={assets.plus_icon} alt="" />
        <div className="w-20">New Chat</div>
      </div>

      <div className="ml-5 mt-10 font-semibold">Recent</div>
      </div>
      <div className="flex flex-col gap-6 ml-5 mb-10">
        <div className="grid grid-cols-4 gap-3 cursor-pointer"> 
        <img className="h-6 w-6 col-span-1" src={assets.question_icon} alt="" />
        <div className="col-span-2">Help</div>
        </div>
        <div className="grid grid-cols-4 gap-2 cursor-pointer">
        <img className="h-6 w-6 col-span-1" src={assets.history_icon} alt="" />
        <div className="col-span-2">Activity</div>
        </div>
        <div className="grid grid-cols-4 gap-1 cursor-pointer">
        <img className="h-6 w-6 cols-span-1" src={assets.setting_icon} alt="" />
        <div className="col-span-2">Settings</div>
        </div>
      </div>
   </div>
}