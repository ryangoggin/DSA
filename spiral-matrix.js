/*
	Breakdown sprial pattern:
    Iteration = 0
    	1.)      iterates right in row = 0              from column = 0           to column = (width - 1)
    	2.) then iterates down  in column = (width - 1) from row = 1              to row = (height - 1)
    	3.) then iterates left  in row = (height - 1)   from column = (width - 2) to column = 0
    	4.) then iterates up    in column = 0           from row = (height - 2)   to row = 1
    Iteration = 1
    	5.) then iterates right in row = 1              from column = 1           to column = (width - 2)
        6.) then iterates down  in column = (width - 2) from row = 2              to row = (height - 2)
        7.) then iterates left  in row = (height - 2)   from column = (width - 3) to column = 1
        8.) then iterates up    in column = 1           from row = (height - 3)   to row = 2

    Nested Loops Iteration Based on Iteration Number:
        step 1-->5 .) starting row is    iteration               , starting column is iteration               , ending column is (width - 1 - iteration)
        step 2-->6 .) starting column is (width - 1 - iteration) , starting row is (iteration + 1)            , ending row is (height - 1 - iteration)
        step 3-->7 .) starting row is   (height - 1 - iteration) , starting column is (width - 2 - iteration) , ending column is iteration
        step 4-->8 .) starting column is iteration               , starting row is (height - 2 - iteration)   , ending column is iteration + 1

    4x nested for loops repeated for ??? times --> nested for loops... nested in a for loop... or maybe a while loop
    # of times 4 nested for loops cycke should repeat based on matrix size:
    	3x3: 1.25x
        4x3: 1.5x
        3x4: 1.25x
        4x4: 1.75x
        5x4: 2x
        5x5: 2.25x

    Spiral should stop once spiralarray.length is equal to number of elements in matrix (height * width)
        -->can set to outer "iteartion" loop to iterate "width" or "height" times since # of cycles is always less and each iteration checks if spiralArray is full
        	-->must adjust inner nested loops iteration based on outer "iteration" loop...

*/

function spiralOrder(matrix) {
    // your code here...
    const height = matrix.length;
    const width = matrix[0].length;
    const numElements = height * width;
    let spiralArray = [];

    for (let iteration = 0; iteration <= height; iteration++) {
        //Step 1: for loops iterating to the right in one row:
      for (let row = iteration; row < (iteration + 1); row++) {
        for (let col = iteration; col < (width - iteration); col++) {
            //Push each element into spiralArray while checking if spiralArray is full:
            if (spiralArray.length < numElements) {
                spiralArray.push(matrix[row][col]);
                //Check if the push filled spiralArray and return spiralArray if it is
                if (spiralArray.length === numElements) {
                    return spiralArray;
                }
            }
        }
      }

      //Step 2: for loops iterating down in one column:
      for (let col = (width - 1 - iteration); col < (width - iteration); col++) {
        for (let row = (iteration + 1); row < (height - iteration); row++) {
            //Push each element into spiralArray while checking if spiralArray is full:
            if (spiralArray.length < numElements) {
                spiralArray.push(matrix[row][col]);
                //Check if the push filled spiralArray and return spiralArray if it is
                if (spiralArray.length === numElements) {
                    return spiralArray;
                }
            }
        }
      }

      //Step 3: for loops iterating to the left in one row:
      for (let row = (height - 1 - iteration); row < (height - iteration); row++) {
        for (let col = (width - 2 - iteration); col > (iteration - 1); col--) {
            //Push each element into spiralArray while checking if spiralArray is full:
            if (spiralArray.length < numElements) {
                spiralArray.push(matrix[row][col]);
                //Check if the push filled spiralArray and return spiralArray if it is
                if (spiralArray.length === numElements) {
                    return spiralArray;
                }
            }
        }
      }

      //Step 4: for loops iterating up in one column:
      for (let col = iteration; col < (iteration + 1); col++) {
        for (let row = (height - 2 - iteration); row > iteration; row--) {
            //Push each element into spiralArray while checking if spiralArray is full:
            if (spiralArray.length < numElements) {
                spiralArray.push(matrix[row][col]);
                //Check if the push filled spiralArray and return spiralArray if it is
                if (spiralArray.length === numElements) {
                    return spiralArray;
                }
            }
        }
      }
    }
  }


  matrix = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]]

  console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]]


  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12],
            [13,14,15,16]]


  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

  matrix = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]]

  console.log(spiralOrder(matrix)); // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]
