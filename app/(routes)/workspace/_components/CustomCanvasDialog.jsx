import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function CustomCanvasDialog({children}) {

  const [name, setName] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Custom Canvas</DialogTitle>
          <DialogDescription asChild>
            <div>
                <h2 className="text-sm">Provide Canvas Width and Height</h2>
                <div className="mt-5">
                    <label>Design Name</label>
                    <Input className="mt-1" placeholder="Design Name" onChange={(e) => setName(e.target.value)}/>
                <div className="mt-1 flex gap-5 w-full">
                    <div className="w-full">
                    <label>Width</label>
                    <Input className="mt-1" type={"number"} placeholder={500} onChange={(e) => setWidth(e.target.value)}/>
                    </div>

                    <div className="w-full">
                    <label>Height</label>
                    <Input className="mt-1" type={"number"} placeholder={500} onChange={(e) => setHeight(e.target.value)}/>
                    </div>

                </div>
                </div>

                <div className="flex justify-end mt-3">
                <button className="bg-purple-600 text-white w-full py-2 rounded mt-5 cursor-pointer">Create</button>
                </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CustomCanvasDialog;
