# see js file for thought process

class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        pointer = 0

        while pointer < len(asteroids) - 1:
            left = asteroids[pointer]
            right = asteroids[pointer + 1]

            if left > 0 and right < 0:
                if abs(left) > abs(right):
                    del asteroids[pointer + 1]
                elif abs(left) < abs(right):
                    del asteroids[pointer]
                    if pointer > 0:
                        pointer -= 1
                else:
                    del asteroids[pointer: pointer + 2]
                    if pointer > 0:
                        pointer -= 1
            else:
                pointer += 1

        return asteroids
