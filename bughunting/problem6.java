
//1st problem is that char is unsigned in java so it will never be less then 0
//2nd problem is that we should subtract 1 from the index_64.length otherwise it would throw IndexOutOfBounds
private static byte char64 (char x) {
   if ((int)x > index_64.length - 1)
     return -1;
   return index_64[(int)x];
 }



