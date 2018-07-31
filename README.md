# two-sum-kata-idea
Quickly find two numbers in an array that sum to a given total.

You will be given an array of numbers and a target number. This array may be extremely long (up to 5m elements). Your goal is to find the two numbers which sum to that target and return them. There may be more than one pair of numbers which sum to this target; return the first possible pair `[see below]`. If no such pair is found, return `undefined`.

**(The pair that comes 'first' is based on the second number of the pair; indices [452, 453], for example, is considered as coming before [1, 500] (because the first pair's second index (453), is smaller than the second pair's index (500)).**

Examples: 

```javascript
findPairs([1, 2, 3, 4, 5, 6, 7], 13) => [6, 7]
findPairs([1, 2, 3, 4, 5, 6, 7], 3) => [1, 2]
findPairs([1, 2, 3, 4, 5, 6, 7], 4) => [1, 3]
findPairs([21, 32, 43, 45, 65, 56, 27], 70) => [43, 27]
``` 
Your code needs to be fast or it will time out-- in fact, even after attaining the proper complexity, it's possible you may still have to make a couple tweaks/optimizations :)

Have fun and good luck :)
