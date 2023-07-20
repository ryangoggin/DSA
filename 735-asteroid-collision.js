/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
*/

/*
SLOW
1.) use a pointer and while loop to iterate through the asteroids
2.) make the left asteroid the one at the pointer and the right one the one after the pointer
3.) check if there's a collision (left > 0, right < 0)
4.) there's 3 types of collisions to handle:
4a.) left is bigger -> splice out the smaller right asteroid, keep pointer where it is
4b.) right is bigger -> splice out the smaller left asteroid, move pointer back 1
4c.) same size -> splice out both, move pointer back one
5.) if no collision increment pointer
6.) return asteroids array after iteration completes
*/

var asteroidCollision = function(asteroids) {
    let pointer = 0;

    while (pointer < asteroids.length - 1) {
        let left = asteroids[pointer];
        let right = asteroids[pointer + 1];
        if (left > 0 && right < 0) {
            if (Math.abs(left) > Math.abs(right)) {
                asteroids.splice(pointer + 1, 1);
            } else if (Math.abs(left) < Math.abs(right)) {
                asteroids.splice(pointer, 1);
                pointer--;
            } else {
                asteroids.splice(pointer, 2);
                pointer--;
            }
        } else {
            pointer++;
        }
    }

    return asteroids;
};
