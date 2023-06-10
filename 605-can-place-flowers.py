# see js file for thought process

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True

        if n == 1 and len(flowerbed) == 1 and flowerbed[0] == 0:
            return True

        for i in range(len(flowerbed)):
            if flowerbed[i] == 0:
                if i == 0:
                    if flowerbed[i + 1] == 0:
                        flowerbed[i] = 1
                        n -= 1
                        if n == 0:
                            return True
                elif i == len(flowerbed) - 1:
                    if flowerbed[i-1] == 0:
                        flowerbed[i] = 1
                        n -= 1
                        if n == 0:
                            return True
                else:
                    if flowerbed[i + 1] == 0 and flowerbed[i-1] == 0:
                        flowerbed[i] = 1
                        n -= 1
                        if n == 0:
                            return True

        return False
