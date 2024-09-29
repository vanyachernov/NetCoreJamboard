import Tool from "./Tool.ts";

export default class Circle extends Tool {
    private mouseDown: boolean;
    private startX: number;
    private startY: number;
    private saved: string | undefined;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        this.listen();

        this.mouseDown = false;
        this.startX = 0;
        this.startY = 0;
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
                const radius = Math.sqrt(width ** 2 + height ** 2);
                this.draw(this.startX, this.startY, radius);
            }
        }
    }

    private draw(x: number, y: number, r: number) {
        if (!this.saved) {
            return;
        }
        
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
