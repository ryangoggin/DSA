// given the head of a linked list, return if the nodes' values are a palindrome

/*
1.) make an array to hold the vals of the linked list
2.) set the currNode to head
3.) traverse the linked list and put all the vals into the array
4.) use a for loop for the forward pointer and make a backward pointer starting at the last index of the val array
5.) in the for loop, iterate so the forward pointer only goes to the midway point of the vals array
6.) compare the element of vals at the forward and backward pointer and return false if they aren't equivalent
7.) decrement backward pointer at the end of each loop
8.) return true if the for loop finishes as it is a palindrome in this case
*/


var isPalindrome = function(head) {
    let vals = [];
    let currNode = head;

    while (currNode) {
        vals.push(currNode.val);
        currNode = currNode.next;
    }

    let backward = vals.length - 1;

    for (let forward = 0; forward < vals.length/2; forward++) {
        if (vals[forward] !== vals[backward]) return false;
        backward--;
    }
    return true;
};
