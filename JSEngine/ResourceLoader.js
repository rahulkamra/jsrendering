/**
 * @author rahul.kumar
 */
Constants = {};
Model = {};
Constants.Loading = "Loading";
Model.imageDataDictionary = {};

function ResourceLoader(){
    this.url   = '';
    this.success = '';

};

ResourceLoader.prototype.onLoad = function (){
    Model.imageDataDictionary[this.key] = this.img;
    this.success(this.img);
}
    
ResourceLoader.prototype.getImageData = function(url, success) {

    this.url = url;
    this.success = success;

    var key = this.getKey(url);
    if (Model.imageDataDictionary[key]) {
        if (Model.imageDataDictionary[key] == Constants.Loading) {
            checkLater();
            return;
        }
        success(Model.imageDataDictionary[key]);
    }

    var img = new Image();
    var _this = this;
        
    img.onload =  function (){
        Model.imageDataDictionary[key] = img;
        _this.success(img);
    }
    /*
             * var canvas = document.createElement("canvas");
             * canvas.width = img.width; canvas.height = img.height; var
             * ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0);
             * var imageData = ctx.getImageData(0, 0, canvas.width,
             * canvas.height);
             */
           
           
    img.src = url.url;
};
  
ResourceLoader.prototype.getKey = function(url) {
    return url.url;
};
ResourceLoader.prototype.checkLater = function() {
    callLater(check, 1000);
};
ResourceLoader.prototype.check = function() {
    this.getImageData(this.url, this.success);
};
