# given 2 lists of integers, pushed and popped w/ distinct values
# return true if this could be the result of a sequence of push and pop operations on an initially empty stack
# return falses if otherwise

# 0.) make an empty list for the stack
# 1.) iterate over combined len of pushed and popped
# 2.) if stack is currently empty (len == 0), append first index of pushed list and pop that index off pushed
# 3.) elif the last index of the stack is the same as the first index of popped list, pop last index of stack and pop first index of popped
# 4a.) else if pushed isn't empty, append first index of pushed list and pop that index off pushed
# 4b.) else the sequence is not valid, return False
# 5.) if the for loop can be completed and exited then the sequence is valid, return True

# Complete the 'real_stack' function below.
#
# The function is expected to return a BOOLEAN.
# The function accepts following parameters:
#  1. INTEGER_ARRAY pushed
#  2. INTEGER_ARRAY popped
#

def real_stack(pushed, popped):
    # Write your code here
    stack = []
    for i in range(len(pushed) + len(popped)):
        if len(stack) == 0:
            stack.append(pushed[0])
            pushed.pop(0)
        elif stack[-1] == popped[0]:
            stack.pop(-1)
            popped.pop(0)
        else:
            if len(pushed) > 0:
                stack.append(pushed[0])
                pushed.pop(0)
            else:
                return False

    return True
