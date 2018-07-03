'use strict';

function collectSameElements(collectionA, objectB) {
var array=new Array();
   collectionA.forEach((v,i)=>{
   Object.keys(v).forEach(v=>{

    // document.write(collectionA[i][v]+"#");
     for(var j=0;j<objectB['value'].length;j++)
     {
        if(collectionA[i][v]==objectB['value'][j])
        {
        array.push(collectionA[i][v]);
        }
     }
   })
   }
   )
  return array;
}
