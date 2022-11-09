const areaOrPerimeter = function(l , w) {
  
  if (l == w) {
    return l**2;
  } else {
    return 2 * (l + w);
  }
}