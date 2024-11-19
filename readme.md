Knapsack Problem Visualizer
This project implements the 0/1 Knapsack Problem using Dynamic Programming. It calculates the maximum value that can be achieved without exceeding the knapsack's capacity.

Algorithm
Dynamic Programming Table:

A table P[i][j] is built, where i is the number of items, and j is the capacity.
Recurrence relation:
If the item's weight exceeds j: P[i][j] = P[i-1][j].
Otherwise: P[i][j] = max(P[i-1][j], P[i-1][j - weights[i-1]] + values[i-1]).

Backtracking:

Trace back through the table to determine the items included in the optimal solution.
Time Complexity: O(n * W), where n is the number of items and W is the capacity.

How to Use
Input weights, values, and capacity, then calculate to see the maximum value and selected items.
