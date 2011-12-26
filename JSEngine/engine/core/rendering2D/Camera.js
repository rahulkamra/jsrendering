/**
 * @author rahul.kumar
 */
function Camera(cameraWidth , cameraHeight , boundsWidth,boundsHeight){
	this.cameraWidth = cameraWidth;
	this.cameraHeight = cameraHeight;
	this.boundsWidth = boundsWidth;
	this.boundsHeight = boundsHeight;
	
	this.mainCanvas = document.createElement("canvas");
	this.mainCanvas.width = this.cameraWidth;
	this.mainCanvas.height = this.cameraHeight;
	this.mainCtx = this.mainCanvas.getContext('2d');
	
	
	
	this.onTick = function (dt){
		
	}
	
	
	
}
