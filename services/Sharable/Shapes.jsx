import Image from "next/image"
import { ShapeList } from "../Options"
import { Circle, Line, Rect } from "fabric"
import { useCanvasHook } from "@/app/(routes)/design/[designId]/page"

function Shapes() {

    const {canvasEditor} = useCanvasHook();

    const onShapeSelect = (shape) => {
        const properties = {
            left: 100,
            top: 100,
            radius: 50,
            fill: 'black',
            stroke: 'black',
            width: 100,
            height: 100, 
            strokeWidth: 0
        }
        if(shape.name == "Circle"){
            const circleRef = new Circle({
                ...properties
            })
            canvasEditor.add(circleRef);
        }else if(shape.name == "Square"){
            const squareRef = new Rect({
                ...properties
            })
            canvasEditor.add(squareRef)
        }else if(shape.name == "Line"){
            const lineRef = new Line([50,50,200,200],{
                stroke: 'black',
                strokeWidth: 5
            })
            canvasEditor.add(lineRef)
        }
        canvasEditor.renderAll();
    }
  return (
    <div>
        <div className="grid grid-cols-3 gap-3">
        {ShapeList.map((shape, index)=>(
            <div className="p-2 border rounded-xl" onClick={() => onShapeSelect(shape)} key={index}>
                <Image src={shape.icon} alt={shape.name} width={100} height={100}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Shapes