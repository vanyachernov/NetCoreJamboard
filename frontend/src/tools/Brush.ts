import Tool from "./Tool.ts";

export default class Brush extends Tool {
    private mouseDown: boolean;

    constructor(canvas: any) {
        super(canvas);
        this.listen();
        this.mouseDown = false;
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    }

    private mouseUpHandler(e: any) {
        this.mouseDown = false;
    }

    private mouseDownHandler(e: any) {
        this.mouseDown = true;
        this.ctx.beginPath();
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }

    private mouseMoveHandler(e: any) {
        if (this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }

    private draw(x: number, y: number) {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
}