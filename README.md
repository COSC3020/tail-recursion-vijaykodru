[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.


The asymptotic time complexity for both tail recursive fibonacci and non tail recursive version is same $\Theta(n)$. This is because both of them do one step at a time in creating the next fibonacci number using the previous two elements of the array. This linear implementation of the code makes the recursive do the same but doing it at the end of the fucntion by calling the function itself as the return value. 

References:
tail-recursion-Dhruv8806

https://www.geeksforgeeks.org/tail-recursion-fibonacci/

Functional programming class I took back in Fall 2023 helped me mostly with this as I had a pretty good understanding from the class.
