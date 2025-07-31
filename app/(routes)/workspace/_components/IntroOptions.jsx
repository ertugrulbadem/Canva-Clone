import { canvasSizeOptions } from "@/services/Options"
import Image from "next/image"

function IntroOptions() {
  return (
    
    <div className="w-full">
    <div className="relative">
        <Image src={'/banner.jpg'} alt='banner' width={1800} height={300} className="w-full h-[200px] rounded-2xl object-cover"/>
        <h2 className="text-3xl absolute bottom-5 left-10 text-white">Workspace</h2>

    </div>

    <div className="flex gap-6 items-center mt-10 justify-center">
            {canvasSizeOptions.map((option, index)=>(
                <div key={index} className="flex flex-col items-center cursor-pointer">
                    <Image src={option.icon} alt={option.name} width={60} height={60} className="hover:scale-105 transition-all"/>
                    <h2 className="text-xs mt-2 font-medium">{option.name}</h2>
                </div>
            ))}
        </div>

    </div>
  )
}

export default IntroOptions