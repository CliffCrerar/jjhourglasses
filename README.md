# HOURGLASSES

## Challenge Description

Given the following 6x6 array.

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

An hourglass is a subset of values with indices falling in the following pattern:

```
a b c
  d
e f g
```

The 6x6 array contains 16 hourglasses.

### EXAMPLE
> `Fig1`
```
-9 -9 -9 1 1 1 
 0 -9  0 4 3 2
-9 -9 -9 1 2 3
 0  0  8 6 6 0
 0  0  0 -2 0 0
 0  0  1 2 4 0
```

The 16 hourglasses sums in `Fig1` are:

```
-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
```

The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2.

```
0 4 3
  1
8 6 6
```

## Challenge

> Complete the function body in `app.js` so the function returns a value representing the highest sum value of numbers for an hourglass in a 6x6 array.