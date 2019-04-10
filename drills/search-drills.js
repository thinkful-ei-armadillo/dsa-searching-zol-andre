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

function findBook(lib, dewey, book){
    const target = lib[dewey];
    if(!target){
        return null;
    }

    for(let i=0; i<target.length; i++){
        if(target[i] === book){
            return i;
        }
    }
    return 'not found';
}

findBook(lib, dewey, title)