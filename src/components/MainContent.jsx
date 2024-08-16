import { useContext } from "react"
import { assets } from "../assets/assets"
import { Context } from "../Context/Context"
import { useTheme } from "../App"

export function MainContent(){
  const {darkMode , toggle } = useTheme()
  const {onSent , recentPrompt , showResult ,loading , input , setInput ,resultData } = useContext(Context)
  const handleKey =(e)=>{
    if(e.key === 'Enter'){
     e.preventDefault();
     onSent()
   }
}
    return(
        <div className="w-4/5 mx-auto">
             <div className="flex justify-between items-center mt-8  ">
             <div
    className="text-4xl font-bold cursor-pointer"
    style={{
        background: 'linear-gradient(16deg, #4b90ff, #ff5546)', 
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    }}
>
    TuTor AI
</div>
                 <div className="flex gap-16">
                <div>
                  <div  className="h-10 w-10 border rounded-3xl flex">
                    {darkMode ?   <div onClick={toggle} className="m-1 cursor-pointer  bg-zinc-300 rounded-full">   <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg> </div> :   <div onClick={toggle} className="m-1 cursor-pointer">    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg> </div> }
             

            

                  </div>
                </div>
                <div><img className={'rounded-full h-10 w-10'} src={assets.user_icon} alt="" /></div>
                </div>
             </div> 
             <div className="text-2xl font-semibold mt-5 text-gray-500"> Your Personalised Learning Companion</div> 
              
            
             {!showResult ?
             <div>
              <Hello></Hello>
              <Card></Card>
             </div>
               
               : <div className="ml-40 w-2/3">
                  <div className="flex gap-5 mt-8">
                    <img className={'rounded-full h-10 w-10'} src={assets.user_icon} alt="" />
                    <div className="text-lg dark:text-white">{recentPrompt}</div>
                  </div>
                  <div className="flex gap-5 mt-5 h-96">
                    <img className={'rounded-full h-10 w-10'} src={assets.gemini_icon} alt="" />
                    <div className="overflow-auto text-xl dark:text-white" style={{scrollbarWidth:"none"}} dangerouslySetInnerHTML={{__html:resultData}} ></div>
                  </div>
               </div>  }
           
            
          
           <div className="lg:ml-40 max:sm-ml-30 mt-20">
        <div className="max-sm:ml-0 fixed bottom-10 lg:w-1/2  h-14 flex text-gray-900 bg-slate-100 shadow-md rounded-3xl p-1 pl-3 text-sm pr-2 dark:bg-neutral-700">
            <input onChange={(e)=>{setInput(e.target.value)}} value={input} onKeyDown={handleKey} autoComplete="off" id="default-search" className="w-full bg-slate-100 dark:bg-neutral-700 dark:text-white text-black border-none outline-none text-lg pl-5" placeholder="Enter a prompt here" required />
            <button onClick={()=>onSent()} className="bg-slate-50 dark:bg-neutral-700 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="w-4 h-4 dark:invert" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </button>
        </div>
    </div>


        </div>
    )
}

function Hello(){
  return <div className="max-sm:mx-auto lg:ml-40 mt-20">
    <div className="text-5xl font-bold text-gray-600 dark:text-slate-100 ">Hello, Learner.</div>
    <div className="text-4xl mt-7 font-semibold text-neutral-500">How can I assist with your learning today?</div>
  </div>
}

function Card(){
    return <div className=" lg:flex gap-4 lg:ml-40 mt-20 md:ml-10 sm:grid-cols-2 max-sm:grid-cols-2 grid  " >
        <div className="h-48 w-48 dark:text-white bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer dark:bg-neutral-700">
      <div className="p-4">Tell me about React js and React - Native in detail</div>
      <img className={"ml-28 mt-5 rotate-2 dark:invert"} src={assets.code_icon} alt="" />
      </div>
        <div className="h-48 w-48 dark:text-white bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer dark:bg-neutral-700">
      <div className="p-4">Help me with writing an essay on Sustainability</div>
      <img className={"ml-28 mt-5 rotate-2 dark:invert"} src={assets.code_icon} alt="" />
      </div>
        <div className="h-48 w-48 dark:text-white bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer dark:bg-neutral-700">
      <div className="p-4">Give me the code for implementing Linked List in Java</div>
      <img className={"ml-28 mt-5 rotate-2 dark:invert"} src={assets.code_icon} alt="" />
      </div>
        <div className="h-48 w-48 dark:text-white bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer dark:bg-neutral-700">
      <div className="p-4">Give me the content for portfolio ready resume for job interviews</div>
      <img className={"ml-28 mt-1 rotate-2 dark:invert"} src={assets.code_icon} alt="" />
      </div>
    </div>
}

