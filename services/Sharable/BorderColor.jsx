import { useCanvasHook } from "@/app/(routes)/design/[designId]/page";
import ColorPickerEditor from "./ColorPickerEditor";
import { useState } from "react";

function BorderColor() {
  const [color, setColor] = useState("#000");
  const { canvasEditor } = useCanvasHook();

  const onColorChange = (color) => {
    setColor(color);
    const activeObject = canvasEditor.getActiveObject();
    activeObject.set({
      stroke: color,
    });
    canvasEditor.add(activeObject);
    canvasEditor.renderAll();
  };

  return (
    <div className="p-2">
      <ColorPickerEditor
        onColorChange={(v) => onColorChange(v)}
        value={color}
      />
    </div>
  );
}

export default BorderColor;
