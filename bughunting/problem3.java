//Problem 3
protected PreDeConModel computeLocalModel (DoubleDBIDList neighbors, ....) {
     final int referenceSetSize = neighbors.size();
    // Shouldn't happen:
    if(referenceSetSize == 0) { //the problem was that this condition will always be false
                                //because there is not such thing as an array length of < 0
        LOG.warning("Empty reference set -
             should at least include the query point!");
         return new PreDeConModel(Integer.MAX_VALUE, DBIDUtil. EMPTYDBIDS);
     }
    for(int d = 0; d < dim; d++) {
         s[d] /= referenceSetSize;
        mvVar.put(s[d]);
     }
}
