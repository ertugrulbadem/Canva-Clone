"use client"
import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import axios from "axios";
import { FabricImage } from "fabric";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


function SearchImages() {

    const [imageList, setImageList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const {canvasEditor} = useCanvasHook();

    useEffect(() => {
        GetImageList('Gradient')
    },[])

    const GetImageList = async (searchInput) => {
        //https://api.unsplash.com/search/photos
        const result = await axios.get("https://api.unsplash.com/search/photos",{
            params:{
                query: searchInput,
                page:1,
                per_page: 20
            },
            headers:{
                Authorization:`Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
            }
        })
        setImageList(result?.data?.results)
    }

    const addImageToCanvas = async (imageUrl) => {
        const canvasImageRef = await FabricImage.fromURL(imageUrl);
        canvasEditor.add(canvasImageRef);
        canvasEditor.renderAll();
    }
  return (
    <div className="mt-5">
        <h2 className="font-bold">Search Images</h2>
        <div className="flex gap-2 items-center my-2">
        <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded-sm" onChange={(e) => setSearchInput(e.target.value)}/>
        <button className="bg-primary text-white p-2 rounded-sm cursor-pointer" onClick={() => GetImageList(searchInput)}><SearchIcon /></button>
        </div>
    <div className="mt-3 grid grid-cols-2 gap-2 overflow-auto h-[75vh]">
        {imageList.map((image,index) => (
            <div key={index} onClick={() => addImageToCanvas(image?.urls?.small)} className="cursor-pointer">
                <Image src={image?.urls?.thumb} alt={image?.slub}
                width={300} height={300} className="w-full h-[80px] rounded-sm object-cover"
                />
            </div>
        ))}
    </div>
    </div>
  )
}

export default SearchImages