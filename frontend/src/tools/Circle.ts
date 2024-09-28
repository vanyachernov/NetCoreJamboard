import Tool from "./Tool.ts";

export default class Circle extends Tool {
    private mouseDown: boolean;
    private startX: number;
    private startY: number;
    private saved: any;

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
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL();
    }

    private mouseMoveHandler(e: any) {
        if (this.mouseDown) {
            const currentX = e.pageX - e.target.offsetLeft;
            const currentY = e.pageY - e.target.offsetTop;
            const width = currentX - this.startX;
            const height = currentY - this.startY;
            const radius = Math.sqrt(width**2 + height**2);
            this.draw(this.startX, this.startY, radius);
        }
    }

    private draw(x: number, y: number, r: number) {
        const image = new Image();
        image.src = this.saved;
        image.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(x, y, r, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
        };
    }
}
