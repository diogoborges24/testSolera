
//Problem 2

@Override
 public double[] computeMean() {
        Not supported except for singletons.
     return points.size() == 1 ? points.get(0) : null; //the problem was that the points.get(1) gets the second
                                                       //array object, so it throws IndexOutOfBounds exception since
                                                       //the condition states that the size of points is = to 1
