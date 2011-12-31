/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function BlisImage(width,height,image){
    
    this.setWidth(width);
    this.setHeight(height);
    
    this.image = image;
    
    
};
BlisImage.prototype = new DisplayObject();


BlisImage.prototype.onDraw = function(canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
    this.mainCanvas.id = "Image";
   // DisplayObject.prototype.onDraw (canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH);
    canvas.drawImage(this.mainCanvas,cameraX - this.getWidth()*0.5,cameraY - this.getHeight()*0.5);
};

BlisImage.prototype.invalidateBitmap = function(){
    this.mainCtx.drawImage(this.image, 0, 0);
    this.mainCanvas.id = "Image";
    DisplayObject.prototype.invalidateBitmap();
};
