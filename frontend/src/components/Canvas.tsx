import {observer} from "mobx-react-lite";
import {useEffect, useRef} from "react";
import canvasState from "../store/canvasState.ts";
import toolState from "../store/toolState.ts";
import Brush from "../tools/Brush.ts";

const Canvas = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvasState.setCanvas(canvas);
            toolState.setTool(new Brush(canvas));
        }
    }, []);
    
    return (
        <div className="flex justify-center items-center pt-20">
            <canvas
                ref={canvasRef}
                width="700"
                height="500"
                className="border-[1px] border-green-600 rounded-md cursor-pointer"
            ></canvas>
        </div>
    );
});

export default Canvas;
