/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function BlisImage(width,height,image){
    
    this.setWidth(width);
    this.setHeight(height);
    this.image = image;
    this.mainCtx.drawImage(image, 0, 0);
    this.mainCanvas.id = "Image";
};
BlisImage.prototype = new DisplayObject();


BlisImage.prototype.draw = function(canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
    if(!canvas){
        return;
    }
    if(this.is)
    this.mainCanvas.id = "Image";
    canvas.drawImage(this.mainCanvas,cameraX - this.getWidth()*0.5,cameraY - this.getHeight()*0.5);
};