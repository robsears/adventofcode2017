## Advent of Code 2017: Day 2

### Problem
> As you walk through the door, a glowing humanoid shape yells in your direction. "You there! Your state appears to be idle. Come help us repair the corruption in this spreadsheet - if we take another millisecond, we'll have to display an hourglass cursor!"

**Part 1**
> The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

**Part 2**
> "Based on what we're seeing, it looks like all the User wanted is some information about the evenly divisible values in the spreadsheet. Unfortunately, none of us are equipped for that kind of calculation - most of us specialize in bitwise operations."
>
> It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each line's result.

### Solution

I solved this puzzle in Bash because, like yesterday's puzzle, this one seems pretty straightforward in terms of the data manipulation. Bash is fairly primitive when it comes to anything beyond addition and subtraction, and this problem doesn't call for much of that.

My strategy here is pretty simple:

1. Read each line and split it up into an array of numbers
2. Sort the array from smallest to largest
3. The difference between the first and last value of the array is added to a running sum for part 1
4. Start with the first number in the array and compare it against all subsequent numbers looking for a modulus of 0
5. If a match is found, add the quotient to a running sum for part 2
6. If no mod 0 is found, move to the next number and repeat until a match is found
7. Print the solutions and exit

I got this solution in 11:41 for part 1 and 24:24 after refactoring for part 2. Overall, not bad!

### Running

This code can be run in a terminal. I wrote this on OSX (a BSD flavor), but it should be cross-platform compatible. It can be run once it's given executable permissions:

```
$ chmod +x solution.sh
$ ./solution.sh
Part 1 Solution: XXXX
Part 2 Solution: YYYY
```
