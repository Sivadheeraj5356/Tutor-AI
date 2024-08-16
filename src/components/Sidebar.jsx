import { assets } from "../assets/assets"
export function Sidebar(){
   return <div className="max-sm:hidden min-h-screen w-56 bg-slate-100 flex flex-col justify-between dark:bg-neutral-800" >
    <div>
      <img className={"h-12 w-12 pt-5 pl-5 cursor-pointer dark:invert"} src={assets.menu_icon} alt="" />
      <div className="flex justify-center gap-2 items-center mt-10  pr-3 bg-white dark:bg-neutral-800 shadow-lg rounded-full h-12 w-36 pl-5 ml-5 cursor-pointer">
        <img className={"h-8 w-6 dark:invert"} src={assets.plus_icon} alt="" />
        <div className="w-20 dark:text-white">New Chat</div>
      </div>

      <div className="ml-5 mt-10 font-semibold dark:text-white">Recent</div>
      </div>
      <div className="flex flex-col gap-6 ml-5 mb-10">
        <div className="grid grid-cols-4 gap-3 cursor-pointer"> 
        <img className="h-6 w-6 col-span-1 dark:invert" src={assets.question_icon} alt="" />
        <div className="col-span-2 dark:text-white">Help</div>
        </div>
        <div className="grid grid-cols-4 gap-2 cursor-pointer">
        <img className="h-6 w-6 col-span-1 dark:invert" src={assets.history_icon} alt="" />
        <div className="col-span-2 dark:text-white">Activity</div>
        </div>
        <div className="grid grid-cols-4 gap-1 cursor-pointer">
        <img className="h-6 w-6 cols-span-1 dark:invert" src={assets.setting_icon} alt="" />
        <div className="col-span-2 dark:text-white">Settings</div>
        </div>
      </div>
   </div>
}