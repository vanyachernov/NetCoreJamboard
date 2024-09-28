import {observer} from "mobx-react-lite";
import {useEffect, useRef} from "react";
import canvasState from "../store/canvasState.ts";

const Canvas = observer(() => {
    const canvasRef = useRef();
    
    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
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
