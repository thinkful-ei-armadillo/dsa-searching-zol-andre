// Postorder traversal of a BST 8,12,10,16,25,20,15
// construct BST
 /*
                        15
                      /     \
                    10       20
                   /  \     /  \
                  8    12  16   25
 
 */

 function postorderToBST(arr, start=0, end = arr.length-1){
     //base case
    if(start>end){
        return;
    }

     let i=0;
     let bst = new _Node(arr[end]);

     while(arr[i] < bst.key){
         i++;
     }

     bst.left = postorderToBST(arr, start, i);
     bst.right = postorderToBST(arr, i+1, end-1);
 }