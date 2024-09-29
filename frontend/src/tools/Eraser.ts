import Brush from "./Brush.ts";

export default class Eraser extends Brush {
    constructor(canvas: any) {
        super(canvas);
    }
    
    private draw(x: number, y: number) {
        this.ctx.strokeStyle = "white";
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    };
}
