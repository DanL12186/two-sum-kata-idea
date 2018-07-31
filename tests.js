//add different operations; add, sub, mult, div.

const twoSumSolution=(nums, target)=> {
  const cache = new Set()
  for (let i = 0, len = nums.length; i<len; i++) {
    const num = nums[i]
    ,     diff = target - num;
    if (cache.has(diff))
      return [diff, num]
    cache.add(num)
  }
}

Test.describe("Some short tests which may not contain pairs", function() {
  for (let i = 0; i < 100; i++) {
    const xArr = Array(50)
    for (let i = 0; i < 50; i++) {
      xArr[i] = ~~(Math.random() * 600)
    }
   Test.assertDeepEquals(findPairs(xArr,482), twoSumSol(xArr, 482), `Not quite..`);
  }
});

Test.assertSimilar(findPairs([238,5670,100,304,222,9020], 14690), [5670, 9020]);

Test.describe("Some medium-length tests", function() {
  for (let i = 0; i < 50; i++) {
    const xArr = Array(500)
    for (let i = 0; i < 500; i++) {
      xArr[i] = ~~(Math.random() * 6000)
    }
    Test.assertDeepEquals(findPairs(xArr,4812), twoSumSol(xArr,4812), `Not quite..`);
  }
});

Test.describe("Some long tests", function() {
  for (let i = 0; i < 100; i++) {
    const xArr = Array(5000)
    for (let i = 0; i < 5000; i++) {
      xArr[i] = ~~(Math.random() * 60000)
    }
    const randInt = ~~(Math.random() * 100000)
    Test.assertDeepEquals(findPairs(xArr,randInt), twoSumSol(xArr,randInt), `Not quite..`);
  }
});

Test.describe("Some extremely long tests", function() {
  for (let i = 0; i < 25; i++) {
    const xArr = Array(5000000)
    for (let i = 0; i < 5000000; i++) {
      xArr[i] = ~~(Math.random() * 600000000)
    }
    const randInt = ~~(Math.random() * 1000000000)
    Test.assertDeepEquals(findPairs(xArr,randInt), twoSumSol(xArr,randInt), `Not quite..`);
  }
});

Test.describe("A very long test with matches at the end", function() {
    const xArr = Array(5000000)
    for (let i = 0; i < 5000000; i++)
      xArr[i] = 1
    const x = ~~(Math.random() * 10000)
    const y = ~~(Math.random() * 50000)
    xArr.push(x)
    xArr.push(y)
    Test.assertDeepEquals(findPairs(xArr, x+y), [x,y], `Not quite..`);
});

Test.describe("One final, long test with no pairs", function() {
    const xArr = Array(5000000)
    for (let i = 0; i < 5000000; i++)
      xArr[i] = 1
    Test.assertDeepEquals(findPairs(xArr,0), undefined, `Not quite..`);
});
