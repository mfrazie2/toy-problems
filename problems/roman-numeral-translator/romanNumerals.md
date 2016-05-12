#Roman Numeral Translator

Given a Roman Numeral as an input, write a function that converts the Roman Numeral to a number and returns the value.
If an invalid input is supplied, `null` should be returned.

-----
####Input:
  String representation of a Roman Numeral (I, V, XV, etc.)

####Output:
  Number representing the Roman Numeral
  
####Constraints:
  Roman Numerals will be proceeded by at most one smaller value
    Example: "IV", "IX" --> Okay

####Edge Cases:
  If non-Roman Numeral given as input, return `null`

-----

Roman Numerals:

|  RN   |  Number    |  
|:----:|:------:|
|  I    |   1    |
|  V  |    5   |
|  X  |   10  |
|  L  |    50 |
|  C  |  100 |
|  D  |  500 |
|  M  | 1000 |



Example Inputs/Outputs

|  Input   |  Output    |  
|:----:|:------:|
|  "I"    |    1   |
|  "IV"  |   4    |
|  "VI"  |   6   |
| "XXV" | 25 |
| "XCIX" | 99 |
| "Stuff" | null |
| ""     |  null |
| 100 | null |
| { }  |  null |
| [ ]  |  null |


------

Input: "XXV"

  "XXV" --> (10)(10)(5) --> 10 + 10 + 5 --> 25
  
  
Input: "IV"
  
  "IV" --> (1)(5) --> 5 - 1 --> 4
  

Input: "VI"

  "VI" --> (5)(1) --> 5 + 1 --> 6


Input: "MMVIII"
  
  "MMVII" --> (1000)(1000)(5)(1)(1)(1) --> 1000 + 1000 + 5 + 1 + 1 + 1 --> 2008


Input: "MCMX"

  "MCMX" --> (1000)(100)(1000)(10) --> 1000 + (1000 - 100) + 10 --> 1910



------------
Map numerical values on to the Roman Numeral and sum the values
If smaller number proceeds larger value, subtract smaller value and add to sum
If smaller number value follows larger value, sum the values

```
Create hash map of Roman Numerals to numerical values from 1 to 1000 (I,V,X,L,C,D,M)


Define a function that takes a single parameter `romanNumeral` string
  Split string into array
  Map numerical values on to individual Roman Numerals using hash map
    If RN is not found in hash map, assign -1
  
  If mapped number array contains -1
    Return null

  Declare sum variable and assign initial value of 0
  Iterate over mapped number array  
    If current index value > next index value
      Add current index value to sum
      Increase index value by 1
    If current index value < next index value
      Subtract current index value from next index value
      Add results of above to sum
      Increase index value by 2 (skipping over next index)
  
  Return sum
```
