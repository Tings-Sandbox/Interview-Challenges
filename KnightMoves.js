/*See KnightMoves.png for problem's description*/
function solution(A, B) {
    var shortestMoves = -2;
    
    function recurse (x, y, moves){

      //base case -- surpassed our target
      if (x > A && y > B){
        return;
      }
      
      // base case -- out of bounds
      if (x < 0 || y < 0){
        return;
      }
      
      //base case -- reached our target
      if (x === A && y === B){
        shortestMoves = moves;
        return;
      }
      
      //recursive case: 
      //up right moves are (+2,+1), (+1,+2); up left moves are (-2, +1), (-1, +2); down right moves are (-2, -1), (-1, -2); down left moves are (+1, -2), (+2, -1); but call stack is exceeded when i include them
      var options = [[+2,+1], [+1,+2]];
      for (var i = 0; i < options.length; i++){
        recurse(x + options[i][0], y + options[i][1], moves+1);
      }
    }
    
    recurse(0,0,0);
    return shortestMoves;
    
}
