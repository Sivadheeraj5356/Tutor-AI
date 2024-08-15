import { useContext } from "react"
import { assets } from "../assets/assets"
import { Context } from "../Context/Context"

export function MainContent(){
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

                <div><img className={'rounded-full h-10 w-10'} src={assets.user_icon} alt="" /></div>
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
                    <div className="text-lg">{recentPrompt}</div>
                  </div>
                  <div className="flex gap-5 mt-5 h-96">
                    <img className={'rounded-full h-10 w-10'} src={assets.gemini_icon} alt="" />
                    <div className="overflow-auto text-xl" style={{scrollbarWidth:"none"}} dangerouslySetInnerHTML={{__html:resultData}} ></div>
                  </div>
               </div>  }
           
            
          
           <div className="lg:ml-40 max:sm-ml-30 mt-20">
        <div className="max-sm:ml-0 fixed bottom-10 lg:w-1/2  h-14 flex text-gray-900 bg-slate-100 shadow-md rounded-3xl p-1 pl-3 text-sm pr-2">
            <input onChange={(e)=>{setInput(e.target.value)}} value={input} onKeyDown={handleKey} autoComplete="off" id="default-search" className="w-full bg-slate-100 text-black border-none outline-none text-base pl-5" placeholder="Enter a prompt here" required />
            <button onClick={()=>onSent()} className="bg-slate-50 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
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
    <div className="text-5xl font-bold text-gray-600  ">Hello, Learner.</div>
    <div className="text-4xl mt-7 font-semibold text-neutral-500">How can I assist with your learning today?</div>
  </div>
}

function Card(){
    return <div className=" lg:flex gap-4 lg:ml-40 mt-20 md:ml-10 sm:grid-cols-2 max-sm:grid-cols-2 grid  " >
        <div className="h-48 w-48 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer">
      <div className="p-4">Tell me about React js and React - Native in detail</div>
      <img className={"ml-28 mt-5 rotate-2"} src={assets.code_icon} alt="" />
      </div>
        <div className="h-48 w-48 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer">
      <div className="p-4">Tell me about React js and React - Native in detail</div>
      <img className={"ml-28 mt-5 rotate-2"} src={assets.code_icon} alt="" />
      </div>
        <div className="h-48 w-48 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer">
      <div className="p-4">Tell me about React js and React - Native in detail</div>
      <img className={"ml-28 mt-5 rotate-2"} src={assets.code_icon} alt="" />
      </div>
        <div className="h-48 w-48 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-lg max-sm:scale-75 cursor-pointer">
      <div className="p-4">Tell me about React js and React - Native in detail</div>
      <img className={"ml-28 mt-5 rotate-2"} src={assets.code_icon} alt="" />
      </div>
    </div>
}

