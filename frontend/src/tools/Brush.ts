import Tool from "./Tool.ts";

export default class Brush extends Tool {
    private mouseDown: boolean;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        
        this.listen();
        
        this.mouseDown = false;
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    }

    private mouseUpHandler() {
        this.mouseDown = false;
    }

    private mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true;

        const target = e.target as HTMLElement | null;
        if (target) {
            this.ctx.beginPath();
            this.ctx.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
        }
    }

    private mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            const target = e.target as HTMLElement | null;
            if (target) {
                this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
            }
        }
    }

    protected draw(x: number, y: number) {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
}
