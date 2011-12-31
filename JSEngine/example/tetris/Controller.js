/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Controller.gridArray = new Array();
Controller.camera = "";

function Controller(){
    
}
Controller.prototype.initScreenArray = function (){
    var rows = Engine.width / TetrisScreenManager.stepSize;
    var cols = Engine.height / TetrisScreenManager.stepSize;
    
    for(var count = 0 ; count < rows ; count++){
        for(var innerCount = 0 ; innerCount < cols ; innerCount++){
            if(!Engine.gridArray[count]){
                Engine.gridArray[count] = new Array();
            } 
            Controller.gridArray[count][innercount] = 0
        }
    } 
};

Controller.prototype.spawnANewPiece = function (){
    var spatial = new TetrisSpatialManager();
   // var minus = new Minus("",spatial);
    //minus.setPosition(new Point(50,50));
    //Controller.camera.addObject(minus,"objects");
   
};
