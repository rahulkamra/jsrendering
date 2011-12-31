/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Main(){
    Engine.width = 700;
    Engine.height = 700;
    var camera = new Camera(Engine.width, Engine.height, Engine.width, Engine.height)
    this.engine = new Engine(camera);
    this.camera = this.engine.camera;
    this.camera.addLayer("objects");
}





