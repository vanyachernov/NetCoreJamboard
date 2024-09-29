import Tool from "./Tool.ts";

export default class Triangle extends Tool {
    private mouseDown: boolean;
    private startX: number;
    private startY: number;
    private saved: string | undefined;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        this.listen();

        this.mouseDown = false;
        this.startX = -1;
        this.startY = -1;
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
            this.startX = e.pageX - target.offsetLeft;
            this.startY = e.pageY - target.offsetTop;
            this.saved = this.canvas.toDataURL();
        }
    }

    private mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            const target = e.target as HTMLElement | null;

            if (target) {
                const currentX = e.pageX - target.offsetLeft;
                const currentY = e.pageY - target.offsetTop;
                const width = currentX - this.startX;
                const height = currentY - this.startY;

                this.draw(this.startX, this.startY, width, height);
            }
        }
    }

    private draw(x: number, y: number, w: number, h: number) {
        if (!this.saved) return;

        const image = new Image();
        image.src = this.saved;
        image.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + w / 2, y + h);
            this.ctx.lineTo(x - w / 2, y + h);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        };
    }
}
