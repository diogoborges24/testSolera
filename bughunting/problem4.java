//Problem 4

public String getstrippedSubstring() {
     int sstart = start, ssend = end;
    while (sstart < ssend) {
         char с = input.charAt(sstart);
        if(c == '' || c == '\n' || c == || c == '\t') {  //Even if one of the checks is false, the next check will return true
             break;                                      //because of the != operator the condition in the if statement will eventually be true
         }                                               //and eventually the substring will include all these special characters
        ++sstart;
     }
}