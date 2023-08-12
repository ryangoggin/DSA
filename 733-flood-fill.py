# An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

# You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

# To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

# Return the modified image after performing the flood fill.

# Example 1:

# Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
# Output: [[2,2,2],[2,2,0],[2,0,1]]
# Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
# Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

# Example 2:

# Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
# Output: [[0,0,0],[0,0,0]]
# Explanation: The starting pixel is already colored 0, so no changes are made to the image.

#####################################################################

# 1.) use helper fxn colorNeighbors to color the current pixel and recursively call on its neighbors
# 2.) if the row or col are out of bounds either way, return
# 3.) if the pixel's color is different from the original, return as it doesn't get filled
# 4.) change the current pixel to the color to change to
# 5.) recursively call on each of the pixel's neighbors
# 6.) back in the original function check to make sure the pixel's color is different from the color to be changed, return the image if it is
# 7.) call the colorNieghbors helper on the original pixel row/col and pass in the currCol (original pixel's color) and changeCol (the one given as an arg)
# 8.) return image after the helper runs


class Solution:
    def floodFill(self, image: List[List[int]], row: int, col: int, color: int) -> List[List[int]]:
        if image[row][col] == color:
            return image

        self.colorNeighbors(image, image[row][col], color, row, col)
        return image

    def colorNeighbors(self, image, currCol, changeCol, row, col):
        if row < 0 or col < 0 or row >= len(image) or col >= len(image[0]):
            return

        if currCol != image[row][col]:
            return

        image[row][col] = changeCol

        self.colorNeighbors(image, currCol, changeCol, row+1, col)
        self.colorNeighbors(image, currCol, changeCol, row-1, col)
        self.colorNeighbors(image, currCol, changeCol, row, col+1)
        self.colorNeighbors(image, currCol, changeCol, row, col-1)
