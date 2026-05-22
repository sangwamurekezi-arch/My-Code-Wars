function solution(k){
  var opposite = '';
  for (var j = k.length - 1; j >= 0; j--)
    opposite += k[j];
  return opposite;
}