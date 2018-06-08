Add your answers to the Algorithms exercises here.

EXERCISE 1.
a. O(1)
b. O(log n)
c. O(n^3)
d. O(n^2)
e. O(n^4)
f. O(n)
g. O(n)

Exercise 2.
a.
The function input is the array of numbers, the function iterates through each number and stores the higher value between the number it is on and the stored previous value, the higher value is retained for the next iteration, the function returns the stored highest value kept.
initialize arrays:
const j = [array[0],0];
const i = [array[0],0];
loop through arrays:
if value > j[0] && index is >= i[1]
replace j[0,1] with that value and index
if value < i[0] && index is <= j[1]
replace i[0,1] with that value and index
the first values in each array will hold the largest in j and the smallest in i
the second values will check j >= i
each iteration will then check for the max value by j[0] - i[0]

b.Create a function eggDrop that iterates through each 'floor' starting from the bottom, and drops an egg from each floor. If the egg remains unbroken, proceed to the next floor. If the egg breaks after the drop, that floor becomes f.

Exercise 3
Both will have the running times of O(n) because they will both need to sort through the whole array.
