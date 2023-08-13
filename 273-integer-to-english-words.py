# Convert a non-negative integer num to its English words representation.

# Example 1:

# Input: num = 123
# Output: "One Hundred Twenty Three"

# Example 2:

# Input: num = 12345
# Output: "Twelve Thousand Three Hundred Forty Five"

# Example 3:

# Input: num = 1234567
# Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

######################################################################################

# didn't pseudocode for this... thought process commented throughout solution... look throughout for it

class Solution:
    def numberToWords(self, num: int) -> str:
        # handle 0 as an edge case
        if num == 0:
            return "Zero"

        res = ""
        digits = list(str(num))
        places = len(digits)

        translation = {
            1: "One",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine",
            10: "Ten",
            11: "Eleven",
            12: "Twelve",
            13: "Thirteen",
            14: "Fourteen",
            15: "Fifteen",
            16: "Sixteen",
            17: "Seventeen",
            18: "Eighteen",
            19: "Nineteen",
            20: "Twenty",
            30: "Thirty",
            40: "Forty",
            50: "Fifty",
            60: "Sixty",
            70: "Seventy",
            80: "Eighty",
            90: "Ninety",
            100: "Hundred",
            1000: "Thousand",
            1000000: "Million",
            1000000000: "Billion"
        }

        skip = False

        for i in range(places):
            # for 10-19, 20, 30, 40, 50, 60, 70, 80, 90 skip a place (make sure to reset to false to avoid multiple skips)
            if skip:
                skip = False
                continue

            # set variables for place, digit, and num for easier use
            place = (places - i - 1)
            digit = int(digits[i])
            num = digit * 10**place

            # if digit is 0 and isn't already skipped, skip it
            if digit == 0:
                continue

            # "hundreds" place
            if place % 3 == 2:
                res += " " + translation[digit] + " " + translation[100]

                # need the thousand, million, billion added if not covered by tens or ones place
                if place == 5 and digits[i+1] == "0" and digits[i+2] == "0":
                    res += " " + translation[1000]

                elif place == 8 and digits[i+1] == "0" and digits[i+2] == "0":
                    res += " " + translation[1000000]

                elif place == 11 and digits[i+1] == "0" and digits[i+2] == "0":
                    res += " " + translation[1000000000]

            # "tens" place
            elif place % 3 == 1:
                # handles 10-19 (also thousand, million, and billion if at corresponding place)
                if digit == 1:
                    string = str(digit) + digits[i+1]
                    ten_to_nineteen = int(string)
                    res += " " + translation[ten_to_nineteen]
                    skip = True

                    if place == 4:
                        res += " " + translation[1000]

                    elif place == 7:
                        res += " " + translation[1000000]

                    elif place == 10:
                        res += " " + translation[1000000000]

                # handles 20-99
                else:
                    string = str(digit) + "0"
                    twenty_to_ninety = int(string)
                    res += " " + translation[twenty_to_ninety]

                    # don't go to ones for 20, 30, 40, 50, 60, 70, 80, and 90
                    # add thousand, million, and billion if at corresponding place
                    if digits[i+1] == "0":
                        skip = True

                        if place == 4:
                            res += " " + translation[1000]

                        elif place == 7:
                            res += " " + translation[1000000]

                        elif place == 10:
                            res += " " + translation[1000000000]

            # "ones" place
            elif place % 3 == 0:
                # get the name for that digit
                if place == 0:
                    res += " " + translation[digit]

                # thousand
                elif place == 3:
                    res += " " + translation[digit] + " " + translation[num/digit]

                # million
                elif place == 6:
                    res += " " + translation[digit] + " " + translation[num/digit]

                # billion
                elif place == 9:
                    res += " " + translation[digit] + " " + translation[num/digit]

        # algorithm puts a space at the start, return a slice that removes the initial space
        return res[1:]
