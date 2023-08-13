// see py file for thought process

var numberToWords = function(num) {
    //  handle 0 as an edge case
        if (num === 0) return "Zero";

        let res = "";
        let digits = num.toString().split("");
        let places = digits.length;

        let translation = {
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
        console.log(translation);

        let skip = false;

        for (let i = 0; i < places; i++) {
            //  for 10-19, 20, 30, 40, 50, 60, 70, 80, 90 skip a place (make sure to reset to false to avoid multiple skips)
            if (skip) {
                skip = false;
                continue;
            }

            // set variables for place, digit, and num for easier use
            let place = (places - i - 1);
            let digit = parseInt(digits[i]);
            let num = digit * 10**place;

            // if digit is 0 and isn't already skipped, skip it
            if (digit === 0) continue;

            // "hundreds" place
            if (place % 3 === 2) {
                res += " " + translation[digit] + " " + translation[100];

                // need the thousand, million, billion added if not covered by tens or ones place
                if (place === 5 && digits[i+1] == "0" && digits[i+2] === "0") {
                    res += " " + translation[1000];
                } else if (place === 8 && digits[i+1] === "0" && digits[i+2] === "0") {
                    res += " " + translation[1000000];
                } else if (place === 11 && digits[i+1] === "0" && digits[i+2] === "0") {
                    res += " " + translation[1000000000];
                }
            }

            // "tens" place
            else if (place % 3 === 1) {
                // handles 10-19 (also thousand, million, and billion if at corresponding place)
                if (digit === 1) {
                    let string = digit.toString() + digits[i+1];
                    let ten_to_nineteen = parseInt(string);
                    res += " " + translation[ten_to_nineteen];
                    skip = true;

                    if (place === 4){
                        res += " " + translation[1000];
                    } else if (place === 7) {
                        res += " " + translation[1000000];
                    } else if (place == 10) {
                        res += " " + translation[1000000000];
                    }
                }

                // handles 20-99
                else {
                    let string = digit.toString() + "0";
                    let twenty_to_ninety = parseInt(string);
                    res += " " + translation[twenty_to_ninety];

                    // don't go to ones for 20, 30, 40, 50, 60, 70, 80, and 90
                    // add thousand, million, and billion if at corresponding place
                    if (digits[i+1] == "0") {
                        skip = true;

                        if (place == 4) res += " " + translation[1000];

                        else if (place === 7) res += " " + translation[1000000];

                        else if (place == 10) res += " " + translation[1000000000];
                    }
                }
            }
            // "ones" place
            else if (place % 3 == 0) {
                // get the name for that digit
                if (place == 0) {
                    res += " " + translation[digit];
                }
                // thousand
                else if (place == 3){
                    res += " " + translation[digit] + " " + translation[num/digit];
                }
                // million
                else if (place == 6) {
                    res += " " + translation[digit] + " " + translation[num/digit];
                }
                // billion
                else if (place == 9) {
                    res += " " + translation[digit] + " " + translation[num/digit];
                }
            }
        }

        // algorithm puts a space at the start, return a slice that removes the initial space
        return res.slice(1);
};
