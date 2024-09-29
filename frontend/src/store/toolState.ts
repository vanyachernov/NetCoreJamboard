import {makeAutoObservable} from "mobx";

class ToolState
{
    tool = null;
    
    constructor() {
        makeAutoObservable(this);
    }
    
    setTool(tool: any) {
        this.tool = tool;
    }

    setFillColor(color: string) {
        if (this.tool)
        {
            this.tool.fillColor = color;
        }
    }

    setStrokeColor(color: string) {
        if (this.tool)
        {
            this.tool.strokeColor = color;
        }
    }

    setLineWidth(width: number) {
        if (this.tool)
        {
            this.tool.lineWidth = width;
        }
    }
}

export default new ToolState();