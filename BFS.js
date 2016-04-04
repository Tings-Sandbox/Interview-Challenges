//NODE: a node is an object that contains a value and a visited property
var Node = function (val){
  this.val = val;
  this.visited = false;
};

//QUEUE: a queue is FIFO. My implementation of the queue keeps track of who's next using this.curr. 
var Queue = function (){
  this.list = [];
  this.curr = 0;
};

Queue.prototype.add = function(node){
  this.list.push(node);
};

Queue.prototype.remove = function(){
  return this.list[this.curr++];
};

var q = new Queue();
q.add(new Node(1));
q.add(new Node (2));
q.add(new Node(3));
// console.log(q.remove());
// console.log(q.remove());
// console.log(q.remove());


//BREADTH FIRST SEARCH is an algorithm that will search a tree, level by level. It can perform a search for a particular value, or perform an action on each node. I will implement both functionalities in the bfs.
// I will need to create the tree class, and be able to traverse through each level. 
// You can do this using a queue
// The tree will have a node, and a children array of nodes.

var Tree = function (val){
  this.children = [];
  this.node = new Node(val);
};

Tree.prototype.addChild = function (val) {
  var instance = new Tree (val);
  this.children.push(instance);
  return instance;
};

var a = new Tree (1);
a.addChild(2);
b = a.addChild(3);
b.addChild(4);

// console.log(a);

var alphabetsTree = new Tree('a');
var secondLevelB = alphabetsTree.addChild('b');
var secondLevelC = alphabetsTree.addChild('c');
secondLevelB.addChild('d');
secondLevelB.addChild('e');
secondLevelC.addChild('f');
var thirdLevelG = secondLevelC.addChild('g');
thirdLevelG.addChild('h');

Tree.prototype.bfs = function (val, action){
  
  var q = new Queue();
  
  
  function recurse (subtree){
    //in breadth first traversals, you'd want to perform an action on every subtree
    action(subtree.node);
    
    //in bfs, you'd want to find a particular value;
    if (subtree.node.val == val){
      console.log(val, 'found!');
    }
    
    // if subtrees not been visited
    if (subtree.node.visited === false){
      subtree.node.visited = true;
      //console.log('subtree.val',subtree.val, '\n');
      for (var i = 0; i < subtree.children.length; i++){
        q.add(subtree.children[i]);
      }
    }
    
    //recursive case runs as long as the q has not been all attended to
    if (q.curr < q.list.length ){
      //console.log('q',q.curr, q.list);
      recurse(q.remove());
    }
    
    
  }
  
  recurse(this);
};

//iterate through tree and console log each node in a bf manner, also search for 'a' in a bf manner.
alphabetsTree.bfs('a', function(node){ console.log(node) });

