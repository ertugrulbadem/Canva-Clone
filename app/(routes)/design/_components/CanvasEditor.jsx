"use client";
import { Canvas } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useCanvasHook } from "../[designId]/page";
import TopNavBar from "@/services/Components/TopNavBar";

function CanvasEditor() {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null);
  const {canvasEditor, setCanvasEditor} = useCanvasHook();

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 1280 / 2,
        height: 720 / 2,
        backgroundColor: "#fff",
        preserveObjectStacking: true
      });

      const scaleFactor = window.devicePixelRatio || 1;
      initCanvas.set({
        width: 1280 * scaleFactor,
        height: 720 * scaleFactor,
        zoom: 1 / scaleFactor,
      });
      initCanvas.renderAll();
      setCanvas(initCanvas);
      setCanvasEditor(initCanvas);
      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.key == "Delete" || event?.key == "Backspace"){
        if(canvasEditor){
          const activeObject = canvasEditor.getActiveObject();
          if(activeObject){
            canvasEditor.remove(activeObject);
            canvasEditor.renderAll();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  },[canvasEditor])
  return (
    <div className="bg-secondary w-full h-screen">
      <TopNavBar />
    <div className=" flex mt-10 items-center justify-center flex-col">
      
      <canvas id="canvas" ref={canvasRef} />
    </div>
    </div>
  );
}

export default CanvasEditor;
