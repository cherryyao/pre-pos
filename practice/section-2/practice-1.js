'use strict';

function countSameElements(collection) {
  var res = new Array();

  for(var i = 0;i<collection.length;)
  {
   var count = 0;
   for(var j=i;j<collection.length;j++)
   {
    if(collection[i] == collection[j])
    {
     count++;
    }

   }
   res.push({
   key:collection[i],
   count:count
   })
   i+=count;

  }
 console.log(res);
  return res;
}
