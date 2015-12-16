//A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

//Make your solution work for a grid of any size.

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}

var generatePositions = function (row, col){
    var positions = {
        left  : [row, col-1],
        right : [row, col+1],
        top   : [row-1, col],
        bottom: [row+1, col]
    }
    return positions;
}


var inBounds = function (position, bounds){
   return position.reduce(function(status, coordinate){ return status === false ? status : coordinate < bounds && coordinate >= 0 }, true);
}

var copyBoard = function(board){
    var copy = [];
    
    for (var i = 0; i < board.length; i++){
        copy.push([]);
        for (var j = 0; j < board.length; j++){
            copy[i].push(board[i][j]);
        }
    }
    
    return copy;
}

var robotPaths = function (n){
    
    var cleanBoard = makeBoard(n),
        outcomes = 0;
    
    
    var recurse = function(currentBoard, row, col){
        currentBoard[row][col] = true;
        var positions = generatePositions(row, col);
        
        
        for (var direction in positions){
          
          var position = positions[direction];
          
          //BASE CASES
          //not in bounds?
          if (!inBounds(position, n)){
              continue;
          }
          
          //position already visited?
          if (currentBoard[position[0]][position[1]]){
              continue;
          }
          
          //reached our destination?
          if (position[0] === n-1 && position[1] === n-1){
              outcomes++;
              return
          }
          
          //recursive cases      
          var copy = copyBoard(currentBoard);
          console.log(copy, "copy")
          recurse(copy, position[0], position[1]);
          
        }
      
        
    }
    
    recurse(cleanBoard, 0, 0);
    return outcomes;
    
    
}

robotPaths(3)
