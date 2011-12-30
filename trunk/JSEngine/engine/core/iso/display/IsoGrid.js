function IsoGrid(gridSize,cellSize){
    this.invalidateCanvas = true;
    
    this.gridSize = gridSize;
    this.cellSize = cellSize;
    
    this.renderLogic  = function(){
        
    };
    
    this.drawGeometry = function(){
        
    };
    
    this.draw = function( canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
        if(this.gridSize.length == 0 || !cellSize)return;
        if(this.invalidateCanvas){
            this.reCreateCanvas();
        }
        canvas.drawImage(this.mainCanvas,cameraX - this.getWidth()*0.5,cameraY - this.getHeight()*0.5);
    };
    
    this.reCreateCanvas = function(){
        if(cellSize[0] != cellSize[1]){
            alert("Only same rows and columns are supported");
        }
        var tempCanvas = document.createElement("canvas");
         var cSize = this.cellSize; 
        var gridSize = this.gridSize;
        
        var height = cSize*gridSize[0];
        var width = 2*height;
        
        tempCanvas.width = width;
        tempCanvas.height = height;
        
        var g = tempCanvas.getContext('2d');
        
        g.strokeStyle = "#000000";
        g.fillStyle = "#FFFF00";
        g.beginPath();
        
        var i = 0;
       
        var m = (gridSize[0]);
        
        while (i <= m)
        {
            pt = IsoMath.isoToScreen(new Pt(cSize * i));
            g.moveTo(pt.x+width/2, pt.y);
				
            pt = IsoMath.isoToScreen(new Pt(cSize * i, cSize * gridSize[1]));
            g.lineTo(pt.x+width/2, pt.y);
				
            i++;
            console.log(pt.x, pt.y)
        }
               
        i = 0;
        m = (gridSize[1]);
        while (i <= m)
        {
            pt = IsoMath.isoToScreen(new Pt(0, cSize * i));
            g.moveTo(pt.x+width/2, pt.y);
				
            pt = IsoMath.isoToScreen(new Pt(cSize * gridSize[0], cSize * i));
            g.lineTo(pt.x+width/2, pt.y);
				
            i++;
        }       
        // tempCtx.closePath();
        g.stroke();
        //tempCtx.fill();
        this.invalidateCanvas = false;
       
        this.setWidth(width);
        this.setHeight(height);
        console.log(tempCanvas.width,tempCanvas.height)
        this.mainCtx.drawImage(tempCanvas,0,0);
        //document.getElementById("main2").appendChild(tempCanvas);
        
    };
    
    
    
}

IsoGrid.prototype = new IsoPrimitive();

