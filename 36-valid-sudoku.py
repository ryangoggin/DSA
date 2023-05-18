# see js solution for thought process


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        col1 = []
        col2 = []
        col3 = []
        col4 = []
        col5 = []
        col6 = []
        col7 = []
        col8 = []
        col9 = []

        for row in board:
            col1.append(row[0])
            col2.append(row[1])
            col3.append(row[2])
            col4.append(row[3])
            col5.append(row[4])
            col6.append(row[5])
            col7.append(row[6])
            col8.append(row[7])
            col9.append(row[8])

            stripped_row = list(filter(lambda x: x != ".", row))
            unique_row = set(stripped_row)

            if len(stripped_row) != len(unique_row):
                return False

        cols = [col1, col2, col3, col4, col5, col6, col7, col8, col9]

        for col in cols:
            stripped_col = list(filter(lambda x: x != ".", col))
            unique_col = set(stripped_col)

            if len(stripped_col) != len(unique_col):
                return False

        sub_box1 = []
        sub_box2 = []
        sub_box3 = []
        sub_box4 = []
        sub_box5 = []
        sub_box6 = []
        sub_box7 = []
        sub_box8 = []
        sub_box9 = []

        for i in range(0, 3):
            sub_box1.append(board[0][i])
            sub_box1.append(board[1][i])
            sub_box1.append(board[2][i])
            sub_box2.append(board[3][i])
            sub_box2.append(board[4][i])
            sub_box2.append(board[5][i])
            sub_box3.append(board[6][i])
            sub_box3.append(board[7][i])
            sub_box3.append(board[8][i])

        for i in range(3, 6):
            sub_box4.append(board[0][i])
            sub_box4.append(board[1][i])
            sub_box4.append(board[2][i])
            sub_box5.append(board[3][i])
            sub_box5.append(board[4][i])
            sub_box5.append(board[5][i])
            sub_box6.append(board[6][i])
            sub_box6.append(board[7][i])
            sub_box6.append(board[8][i])

        for i in range(6, 9):
            sub_box7.append(board[0][i])
            sub_box7.append(board[1][i])
            sub_box7.append(board[2][i])
            sub_box8.append(board[3][i])
            sub_box8.append(board[4][i])
            sub_box8.append(board[5][i])
            sub_box9.append(board[6][i])
            sub_box9.append(board[7][i])
            sub_box9.append(board[8][i])

        sub_boxes = [sub_box1, sub_box2, sub_box3, sub_box4, sub_box5, sub_box6, sub_box7, sub_box8, sub_box9]

        for sub_box in sub_boxes:
            stripped_sub_box = list(filter(lambda x: x != ".", sub_box))
            unique_sub_box = set(stripped_sub_box)

            if len(stripped_sub_box) != len(unique_sub_box):
                return False

        return True
