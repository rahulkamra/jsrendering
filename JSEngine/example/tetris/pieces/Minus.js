/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function Minus(id,spatialManager){
    this.id = id;
    this.spatialManager = spatialManager
}

Minus.prototype = new Entity(this.id,this.spatialManager);

Minus.prototype.onDraw = function( canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
    canvas.drawImage(this.mainCanvas,this._screenX,this._screenY);
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


