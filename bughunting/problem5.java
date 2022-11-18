

public static final ByteSequence prefixEnd0f(ByteSequence prefix) {
   byte[] endKey = prefix.getBytes().clone();
   for (int i = endkey.length - 1; i >= 0; i--) {
     if (endKey[i] < 0x7F) {                                        //The problem was that the byte type has a max range
                                                                    // of 0x7F and the condition states that the value should be less than 0xFF
                                                                    //which if it's greater than 0x7F it will overflow, and the condition will
                                                                    //always be true
      endKey[i] =  (byte) (endkey[i] + 1);
       return ByteSequence.from(Arrays.copy0f(endKey, i + 1));
   return ByteSequence.from(NO_PREFIX_END);
     }
   }
   }