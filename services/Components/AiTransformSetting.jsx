import Image from "next/image"
import { AITransformationSettings } from "../Options"
import CustomImageUpload from "../Sharable/CustomImageUpload"
import { useState } from "react";


function AiTransformSetting() {

    const [selectedAi, setSelectedAi] = useState();


  return (
    <div>
        <CustomImageUpload selectedAi={selectedAi}/>
        <h2 className="my-2 font-bold">AI Transformation By Image Imagekit.io</h2>
        <div className="grid grid-cols-2 gap-3">
            {AITransformationSettings.map((option, index)=>(
                <div key={index} onClick={() => setSelectedAi(option)}>
                    <Image src={option.image} alt={option.name} width={500} height={500} className="w-full h-[100px]  rounded-xl"/>
                    <p className="text-xs text-center">{option.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AiTransformSetting