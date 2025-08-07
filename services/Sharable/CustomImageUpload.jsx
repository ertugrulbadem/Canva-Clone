import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import { FabricImage } from "fabric";
import ImageKit from "imagekit";
import { ImageUp, Loader } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function CustomImageUpload({selectedAi}) {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const { designId } = useParams();
  const { canvasEditor } = useCanvasHook();

  var imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });

  const onImageUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const imageRef = await imagekit.upload({
      file: file,
      fileName: designId + ".png",
      isPublished: true,
    });
    //const imageUrl = URL.createObjectURL(file);
    setImage(imageRef?.url);

    setLoading(false);
  };

  const onAddToCanvas = async () => {
    const canvasImageRef = await FabricImage.fromURL(image);
    canvasEditor.add(canvasImageRef);
    setImage(null);
  };

  useEffect(() => {
    if(selectedAi){
        let imageUrl = image;
        if(image?.includes('?tr=')){
            imageUrl = imageUrl + ',' + selectedAi.command
        }
        else{
            imageUrl = imageUrl + '?tr=' + selectedAi.command
        }
        setImage(imageUrl)
    }
  }, [selectedAi])
  return (
    <div>
      {!image ? (
        <label
          htmlFor="uploadImage"
          className="bg-secondary p-4 flex flex-col items-center justify-center rounded-xl h-[100px] mb-4"
        >
          <ImageUp />
          <h2 className="text-xs">Upload Image</h2>
        </label>
      ) : (
        <label htmlFor="uploadImage">
          <Image
            src={image}
            alt="image"
            width={300}
            height={300}
            className="w-full h-[150px]  rounded-xl"
          />
        </label>
      )}
      <input
        type="file"
        id="uploadImage"
        className="hidden"
        onChange={onImageUpload}
      />

      {image && (
        <button
          className="w-full bg-purple-600 text-white py-2 px-4 rounded my-2"
          onClick={onAddToCanvas}
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin" /> : "Add To Canvas"}
        </button>
      )}
    </div>
  );
}

export default CustomImageUpload;
