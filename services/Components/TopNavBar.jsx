import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import ShapesSettings from "../Sharable/ShapesSettings";
import { useEffect, useState } from "react";

function TopNavBar() {
  const { canvasEditor } = useCanvasHook();
  const [showShapeSettings, setShowShapeSettings] = useState(false);

  useEffect(() => {
    if (canvasEditor) {
    }
  }, [canvasEditor]);

  if (canvasEditor) {
    canvasEditor.on("object:selected", (e) => {
      const activeObject = canvasEditor.getActiveObject();
      if(e.selected[0]?.cornerStyle=='rect'){
        setShowShapeSettings(true);
      }
    });

    canvasEditor.on("selection:cleared", (e) => {
      setShowShapeSettings(false);
    });
  }
  return (
    <div className="p-3 bg-white">
      <ShapesSettings />
    </div>
  );
}

export default TopNavBar;
