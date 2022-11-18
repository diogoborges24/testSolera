//Problem 1

private boolean checkDimensions (CLIQUEUnit other, int e) {
     for(int i = 0, j = 0; i < e; 1++, j += 2) {
         if (dims[i] ! = other. dims[i]
                bounds[j] ! = other.bounds[j]
                bounds[j + 1] ! = other.bounds[j + 1]) //the bug was in this line where the variable bounds was
                                                       //the same in both operands of the condition, so it will always
                                                       //be false, so we added the bounds, as if the property of other
                                                       //in the second operand 
         {
           return false;
         }
     }
     return true;
 }

