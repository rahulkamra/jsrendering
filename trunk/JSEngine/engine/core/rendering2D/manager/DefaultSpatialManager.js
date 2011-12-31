/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function DefaultSpatialManager(){
    
};

DefaultSpatialManager.prototype = new SpatialManager();


DefaultSpatialManager.prototype.screenToCoordinate = function(point){
    return point;
}

DefaultSpatialManager.prototype.coordinateToScreen = function(point){
    return point;
}



