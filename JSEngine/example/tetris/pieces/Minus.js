/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function Minus(type){
    this.type = type;
}

Minus.prototype = new Entity();

Minus.prototype.onDraw = function( canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
     if(this.isBitmapInvalidated){
        this.invalidateBitmap();
    }
    canvas.drawImage(this.mainCanvas,cameraX - this.getWidth()*0.5,cameraY - this.getHeight()*0.5);
};

Minus.prototype.invalidateBitmap = function(){
    //means build the object here
    this.drawGemetory()
    this.isBitmapInvalidated = false;
};
Minus.prototype.drawGemetory = function(){
    this.mainCtx.fillStyle = this.fillColor;
    this.mainCtx.beginPath();
    this.mainCtx.fillRect(0,0,TetrisSpatialManager.stepSize*4,TetrisSpatialManager.stepSize);
    this.mainCtx.closePath();
    this.mainCtx.fill();
    
}

DisplayObject.prototype.invalidateSize = function(){
    if(!this.mainCanvas){
        console.log("CAnvas not defined");
    }
    this.mainCanvas.width = TetrisSpatialManager.stepSize*4
    this.mainCanvas.height = TetrisSpatialManager.stepSize;
    this.isSizeInvalidated = false;
};


