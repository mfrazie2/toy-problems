# Sum Remainders

Create a function that accepts two parameters (x, y) and returns the sum of all remainders from 1 to _x_ when divided by _y_.
_____
###Input: 
  Arguments will be positive integers
###Output:
  Integer
###Constraints:

###Edge Cases:
  Maximum value may be large (consider performance for larger values)

_____
  
Summation following this format:
  (1 % y) + (2 % y) + (...) + (x % y)

Sample: 
  x = 10
  y = 5

| x    |   y   |  sum   |  Steps   |
|:----:|:------:|:----------:|:------------:|
| 1   | 5    |    1       | 1 % 5 = 1  |
| 2   | 5    |    3       | 2 % 5 = 2  |
| 3   | 5    |    6       | 3 % 5 = 3  |
| 4   | 5    |    10     | 4 % 5 = 4  |
| 5   | 5    |    10     | 5 % 5 = 0  |
| 6   | 5    |    11       | 6 % 5 = 1  |
| 7   | 5    |    13       | 7 % 5 = 2  |
| 8   | 5    |    16       | 8 % 5 = 3  |
| 9   | 5    |    20     | 9 % 5 = 4  |
| 10   | 5    |    20     | 10 % 5 = 0  |


Sample: 
  x = 15
  y = 4

| x    |   y   |  sum   |  Steps   |
|:----:|:------:|:----------:|:------------:|
| 1   | 6    |    1       | 1 % 6 = 1  |
| 2   | 6    |    3       | 2 % 6 = 2  |
| 3   | 6    |    6       | 3 % 6 = 3  |
| 4   | 6    |    10     | 4 % 6 = 4  |
| 5   | 6    |    15     | 5 % 6 = 5  |
| 6   | 6    |    15       | 6 % 6 = 0  |
| 7   | 6    |    16       | 7 % 6 = 1  |
| 8   | 6    |    18       | 8 % 6 = 2  |
| 9   | 6    |    21     | 9 % 6 = 3  |
| 10   | 6    |    25     | 10 % 6 = 4  |
| 11   | 6    |    30      | 11 % 6 = 5  |
| 12   | 6    |    30      | 12 % 6 = 0  |
| 13   | 6    |    31     | 13 % 6 = 1  |
| 14   | 6    |    33     | 14 % 6 = 2  |
| 15   | 6    |    36     | 15 % 6 = 3  |


There is repetition in the remainder pattern.

5 goes into 10 two times and the pattern repeats twice
1 + 2 + 3 + 4 + 0 + 1 + 2 + 3 + 4 + 0

6 goes into 15 twice with a remainder of three
  The pattern repeats twice
1 + 2 + 3 + 4 + 5 + 0 + 1 + 2 + 3 + 4 + 5 + 0 + 1 + 2 + 3

15 / 6 = 2 [factor]
15 - (6 * 2) = 3 [remainder]

IF x > y
Knowing the number of times y goes into x, the sum of remainders from 1 to y can be calculated and multiplied by the number of times 
y goes into x; then the sum of remainders from 1 to remainder amount is added to the first sum


Sample:
  x = 100
  y = 3

100 / 3 = 33 [factor]
100 - (3 * 33) = 1 [remainder]

1 % 3 = 1
2 % 3 = 2
3 % 3 = 0

33 * (1 + 2 + 0) + 1



Sample:
  x = 10
  y = 20

10 / 20 = 0.5 [factor]
10 - (20 * 0.5) = 0 [remainder]

1 % 20 = 1
...
10 % 20 = 10

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

IF x < y OR x = y
Sum of remainders from 1 to x when divided by y


____________

Define a function that takes two parameters (x, y)
  Check if parameters are NOT number data types
    Throw error
  
  Declare variables:
    sum = 0
    factor = x / y
    ~~remainder = x - factor~~
    remainder = x - ( y * factor )
  
  ~~If factor is greater than 1~~
  If x is greater than y
    Call subRoutine(y) and add to sum
  
    Multiply sum by factor and assign to sum
  
  ~~If remainder is greater than 1~~
    Call subRoutine(y, remainder) and add to sum
  
  If x is less than y OR x equals y
    Call subRoutine(y, x) and assign it to sum
  
  Return sum
    
    
    

subRoutine (returns sum from a range 1 -> end (or denominator))

Define a function that takes a two parameters (denominator, end[optional])
  Declare variables:
    sum = 0
    start = 1
    end = end OR denominator
  
  While start is less than end
    Add remainder of start divided by denominator to sum
    Increase start value by 1
  
  Return sum
____________


Above works well when values are small but can be optimized

Summing a range from 1 -> n can be expressed as
n(n + 1) / 2


subRoutine

Define a function that takes one parameter (end) 
  return (end * (end + 1)) / 2
  

Main Function

Define a function that takes two parameters (x, y) 
  Check if parameters are NOT number data types
      Throw error
    
    Declare variables:
      sum = 0
      factor = x / y
      remainder = x - ( y * factor )
    
    If x is greater than y
      Call subRoutine(y) and add to sum
    
      Multiply sum by factor and assign to sum
    
    If remainder is greater than 0
      Call subRoutine(remainder) and add to sum
    
    If x is less than y OR x equals y
      Call subRoutine(x) and assign it to sum
    
    Return sum