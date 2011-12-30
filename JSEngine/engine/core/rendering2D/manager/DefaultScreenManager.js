/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function DefaultScreenManager(){
    
};

DefaultScreenManager.prototype = new ScreenManager();


DefaultScreenManager.prototype.screenToCoordinate = function(point){
    return point;
}

DefaultScreenManager.prototype.coordinateToScreen = function(point){
    return point;
}



