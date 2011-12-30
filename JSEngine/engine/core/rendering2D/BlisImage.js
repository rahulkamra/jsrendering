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


BlisImage.prototype.draw = function(canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
    if(!canvas){
        return;
    }
    if(this.isSizeInvalidated){
        this.invalidateSize();
    }
    //bitmap is always invalidated after size , because image should be drawn when the size is set
    if(this.isBitmapInvalidated){
        this.invalidateBitmap();
    }
    this.mainCanvas.id = "Image";
    //console.log(cameraX - this.getWidth()*0.5,cameraY - this.getHeight()*0.5);
    //canvas.drawImage(this.mainCanvas,0,0);
    canvas.drawImage(this.mainCanvas,cameraX - this.getWidth()*0.5,cameraY - this.getHeight()*0.5);
};

BlisImage.prototype.invalidateBitmap = function(){
    this.mainCtx.drawImage(this.image, 0, 0);
    this.mainCanvas.id = "Image";
    DisplayObject.prototype.invalidateBitmap();
};
