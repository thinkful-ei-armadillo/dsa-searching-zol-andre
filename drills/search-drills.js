const BinarySearchTree = require('./BinarySearchTree');

/*
How many searches?

1.Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and 
are using the recursive binary search algorithm. Identify the 
sequence of numbers that each recursive call will search to find 8.


Input: 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
Output: Index of 3

step 1: 3, 5, 6, 8 
step 2: 6, 8 
step 3: 8 


Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and are using 
the recursive binary search algorithm. Identify the sequence of numbers 
that each recursive call will search to find 16?

step 1: 12, 14, 15, 17, 18
step 2: 15, 17, 18
step 3: 15, 17
step 4: 17
step 5: retrun -1;


Find a book
Imagine you are looking for a book in a library with a Dewey Decimal index. 
How would you go about it? 
--> Firstt identify which class the book you look for, then narrow the search down to
    into its sub divisions to locate the book based on its topic/title.

Can you express this process as a search algorithm? 
--> 
Implement your algorithm to find a book whose Dewey and book title is provided.
*/

/*
function findBook(lib, dewey, book){
  const target = lib[dewey];
  if(!target){
    return null;
  }

  for(let i=0; i<target.length; i++){
    if(target[i] === book){
      return `Found ${target[i]} in section ${dewey}`;
    }
  }
  return 'not found';
}

findBook(lib, dewey, title)

{
  100: ['title', 'title2']
}*/


/*
  Searching in a BST

  Given the binary search trees
  What would be the post-order traversal?

  Pre-order:  35 25 15 14 19 27 89 79 91 90

              35
            /    \
          25     89
        /  \    / \
      15   27 79  91 
    /  \         /
  14   19      90

  In-order:   14 15 19 25 27 35 79 89 90 91

               35
            /    \
          25     89
        /  \    / \
      15   27 79  90 
    /  \           \
  14   19          91

*/


function tree(t){ 
  if(!t){ return 0; }
  return ' '+ tree(t.left) + t.value + tree(t.right) + ' '; 
}

// 1).
function insertInOrder(arr, start = 0, end = arr.length - 1) {
  if(start > end) {
    return;
  }

  const middle = Math.floor((start + end) / 2);
  console.log(arr[middle]);
  let bst = new BinarySearchTree(middle, arr[middle]);
  bst.left = insertInOrder(arr, start, middle - 1);
  bst.right = insertInOrder(arr, middle + 1, end);

  //return bst;
}

function insertPostOrder(arr, start = 0, end = arr.length - 1) {
  if(start > end) {
    return;
  }

  let i = 0;
  let bst = new BinarySearchTree(end, arr[end]);

  while(arr[i] < bst.key) { i++; }

  console.log(arr[end]);

  bst.left = insertInOrder(arr, start, i);
  bst.right = insertInOrder(arr, i + 1, end - 1);

  //return bst;
}

function insertPreOrder(arr, start = 0, end = arr.length - 1) {
  if(start > end) {
    return;
  }

  let i = 0;
  let bst = new BinarySearchTree(start, arr[start]);

  while(arr[i] > bst.key) { i++; }

  bst.left = insertInOrder(arr, start - 1, i + 1);
  bst.right = insertInOrder(arr, i, end);

  return bst;
}

// insertInOrder(arrInOrder);
// insertPostOrder(arrInOrder);


// 2.)
let arrPostOrder = [5, 7, 6, 9, 11, 10, 8];

/*
            8
          /   \
         6    10
       /  \  /  \
      5   7 9   11

*/

function maxProfit(arr) {
  let max = 0;
  let bestDay = 0;

  for(let i = 0; i < arr.length - 2; i++) {
    let difference = arr[i + 1] - arr[i];

    if(difference > max) {
      max = difference;
      bestDay = i;
    }
  }

  return `You will make a profit of $${max} on day ${bestDay + 1} / 7`;
}



function main() {
  const dataset = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  const commanders = [
    {name: 'Captain Picard', rank: 10},
    {name: 'Commander Riker', rank: 7},
    {name: 'Commander Data', rank: 11},
    {name: 'Lt. Cmdr. Worf', rank: 6},
    {name: 'Lt. Cmdr. LaForge', rank: 8},
    {name: 'Lt. Cmdr. Crusher', rank: 13},
    {name: 'Lieutenant security-officer', rank: 5},
    {name: 'Lieutenant Selar', rank: 12},
  ];
  const commandersBST = new BinarySearchTree();
  const test = new BinarySearchTree();

  commanders.forEach(c => commandersBST.insert(c.rank, c.name));
  dataset.forEach(num => test.insert(num, num));
  //test.bfs(dataset);

  console.log('PRE-ORDER:');
  test.dsfPreOrder();
  
  console.log('POST-ORDER');
  test.dsfPostOrder();

  console.log('IN-ORDER');
  test.dsfInOrder();

  console.log('* IN-ORDER');
  insertInOrder([14,15,19,25,27,35,79,89,90,91]);

  console.log('* POST-ORDER');
  insertPostOrder([35,25,15,14,19,27,89,79,91,90]);

  console.log('COMMANDERS');
  commandersBST.dsfPreOrder();

  console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));
}

main();