## Advent of Code 2017: Day 1

### Problem
> You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked, but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."
>
> It goes on to explain that you may only leave by solving a captcha to prove you're not a human. Apparently, you only get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.

**Part 1**
> The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.
>
> For example:
>
>     1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
>     1111 produces 4 because each digit (all 1) matches the next.
>     1234 produces 0 because no digit matches the next.
>     91212129 produces 9 because the only digit that matches the next one is the last digit, 9.

**Part 2**
> Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.
>
> For example:
>
>    1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
>     1221 produces 0, because every comparison is between a 1 and a 2.
>     123425 produces 4, because both 2s match each other, but no other digit has a match.
>     123123 produces 12.
>     12131415 produces 4.

### Solution

I solved this puzzle in C because it seemed like a reasonable choice, especially for an early challenge. My understanding of the problem is that the captcha requires a very simple algorithm:

> Take a digit, compare it with another X steps away. If it is a match, add it to a running summation. Move to the next digit and repeat until all digits in the input string have been compared. The last digit is compared against the first digit.

C seems well suited to this problem because: A) the input is not a number, but a string, and B) the C language stores strings as arrays of chars. A basic `for` loop will let us look at each character. C also can do modulus arithmetic pretty easily, which lets us compare the last digit with the first without needing special case handling.

Really, the only difference between parts 1 and 2 is the step size. I wrote a function that does the summation using an arbitrary step size, and functions for parts 1 and 2 respectively, which pass in the correct step size and return the result.

One neat trick I came across: in C, each digit in the range '0'..'9' is one greater than its previous digit. This means that if you have a digit stored as a `char`, you can get the integer value by subtracting '0'. For example, the char '5' has a value of 53, while the char '0' has a value of 48. So `'5' - '0' == 5`.

This is part of the C Standard, so we can cast char digits to ints without calling any other libraries and with no overhead. Obviously this is only for unsigned digits, but it's still a neat trick.


### Running

This code can be compiled with GCC and run on a command line. It requires specifying your personal input:

```
$ gcc solution.c -o solution
$ ./solution "YOURINPUT"
Part 1 Solution: XXXX
Part 2 Solution: YYYY
```
