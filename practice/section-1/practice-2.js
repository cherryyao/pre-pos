'use strict';

function collectSameElements(collectionA, collectionB) {
  var array=new Array();
    for(var i=0;i<collectionA.length;i++)
    {
        for(var j=0;j<collectionB.length;j++)
        {
           for(var k=0;k<collectionB[j].length;k++){
           if(collectionA[i]==collectionB[j][k])
             {
                 array.push(collectionA[i]);
               }
           }

        }
    }
   return array;
}
