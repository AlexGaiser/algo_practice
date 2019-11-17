# *[Balanced Brackets]*
# Given a string S of `(` and `)` parentheses, we add the minimum number of parentheses (`(` or `)`, and in any positions) so that the resulting parentheses string is valid.  Formally, a parentheses string is valid if and only if:

# • It is the empty string
# • It can be written as AB (A concatenated with B), where A and B are valid strings
# • It can be written as (A), where A is a valid string.
# • Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

# Examples:
# ```Input: "())"
# Output: 1

# Input: "((("
# Output: 3

# Input: "()"
# Output: 0

# Input: "()))(("
# Output: 4```

def balancedbrackets(string):
    countleft = 0
    countright = 0
    for i in string:
        if i == "(":
            countleft +=1
            countright-=1
        elif i ==")":
            countright +=1
            countleft -=1
    


    return  abs(countleft+countright)