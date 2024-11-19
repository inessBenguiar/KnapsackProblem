Knapsack Problem Visualizer
This project is a visual and interactive implementation of the Knapsack Problem, showcasing the functionality of the Dynamic Programming algorithm used to solve this classic optimization problem.

Algorithm Explanation
The Knapsack Problem aims to maximize the total value of selected items without exceeding the knapsack's capacity. This project implements the 0/1 Knapsack Problem using a Dynamic Programming (DP) approach, which breaks the problem into smaller overlapping subproblems.

How It Works
Input Details:

Weights: Represents the weight of each object.
Values: Corresponds to the value of each object.
Capacity: Maximum weight the knapsack can carry.
Dynamic Programming Approach:

A 2D table P of size (n+1) x (W+1) is constructed, where:
n is the number of items.
W is the knapsack's capacity.
The value at P[i][j] represents the maximum value achievable using the first i items with a capacity of j.
Key Recurrence Relation:

If the current item's weight exceeds the current capacity:

P[i][j] = P[i-1][j]
Otherwise:
P[i][j] = max(P[i-1][j], P[i-1][j-weights[i-1]] + values[i-1])
Backtracking to Find Selected Items:

After computing the table, the selected items are identified by tracing back through the table, checking which items contribute to the optimal solution.
Time Complexity:

The algorithm runs in O(n * W), where n is the number of items and W is the knapsack capacity.
Features
Interactive Knapsack Solver:

Input weights, values, and capacity to compute the optimal solution.
Displays:
Maximum value achievable.
Selected items contributing to the maximum value.
Time complexity of the solution.
Dynamic Matrix Background:

Animated canvas background inspired by the "Matrix."
How to Use
Enter the weights and values of the objects as comma-separated values.
Specify the knapsack's capacity.
Click "Calculate" to solve the problem and view:
The maximum value achievable.
The selected items.
The algorithm's time complexity.
Technologies Used
HTML5
CSS3
JavaScript