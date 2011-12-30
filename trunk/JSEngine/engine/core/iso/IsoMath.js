/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function IsoMath(){}

IsoMath.screenToIso = function (screenPt,createNew){
};

IsoMath.transformationObj = new DefaultIsometricTransformation(false,false);

IsoMath.screenToIso = function(screenPt, createNew)
{
    var isoPt = transformationObject.screenToSpace(screenPt);
			
    if (createNew)
        return isoPt;
			
    else
    {
        screenPt.x = isoPt.x;
        screenPt.y = isoPt.y;
        screenPt.z = isoPt.z;
				
        return screenPt;
    }
}

IsoMath.isoToScreen =function(isoPt, createNew)
{
    var screenPt= IsoMath.transformationObj.spaceToScreen(isoPt);
			
    if (createNew)
        return screenPt;
    else
    {
        isoPt.x = screenPt.x ;
        isoPt.y = screenPt.y;
        isoPt.z = screenPt.z;
				
        return isoPt;
    }
};