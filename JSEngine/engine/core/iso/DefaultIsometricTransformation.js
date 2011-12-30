/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function DefaultIsometricTransformation(projectValuesToAxonometricAxes,maintainZAxisRatio){
    this.bAxonometricAxesProjection = projectValuesToAxonometricAxes;
    this.bMaintainZAxisRatio = maintainZAxisRatio;
    
    var radians;
    var ratio = 2;
		
    var bAxonometricAxesProjection;
    var bMaintainZAxisRatio;
		
    var axialProjection= Math.cos(Math.atan(0.5));
    
    
    this.screenToSpace = function(screenPt)
    {
        var z = screenPt.z;
        var y= screenPt.y - screenPt.x / ratio + screenPt.z;
        var x= screenPt.x / ratio + screenPt.y + screenPt.z;
			
        if (!bAxonometricAxesProjection && bMaintainZAxisRatio)
            z = z * axialProjection;
			
        if (bAxonometricAxesProjection)
        {
            x = x / axialProjection;
            y = y / axialProjection;
        }
			
        return new Pt(x, y, z);
    }
    
    
    this.spaceToScreen = function(spacePt)
    {
        if (!bAxonometricAxesProjection && bMaintainZAxisRatio)
            spacePt.z = spacePt.z / axialProjection;
			
        if (bAxonometricAxesProjection)
        {
            spacePt.x = spacePt.x * axialProjection;
            spacePt.y = spacePt.y * axialProjection;
        }
			
        var z= spacePt.z;
        var y = (spacePt.x + spacePt.y) / ratio - spacePt.z;
        var x = spacePt.x - spacePt.y;
			
        return new Pt(x, y, z);
    }
}
