"use client"
import { useParams } from "next/navigation";
import DesignHeader from "../_components/DesignHeader";
import SideBar from "../_components/SideBar";
import CanvasEditor from "../_components/CanvasEditor";
import { CanvasContext } from "@/context/CanvasContext";
import { useContext, useState } from "react";

function DesignEditor() {
    const {designId} = useParams();
    const [canvasEditor, setCanvasEditor] = useState();
  return (
    <div>
      <CanvasContext.Provider value={{canvasEditor, setCanvasEditor}}>
        <DesignHeader />
        <div className="flex">
            <SideBar />
            <CanvasEditor />
        </div>
        </CanvasContext.Provider>
    </div>
  )
}

export default DesignEditor

export const useCanvasHook = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error("useCanvas must be used within a CanvasProvider");
  }
  return context;
}