/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const permutations = nums => {
  const result = []
  const backtrack = (arr, curr) => {
    if (arr.length === 0) {
      result.push(curr.slice())
      return
    }
    for (let i = 0; i < arr.length; i++) {
      const newNums = arr.slice()
      newNums.splice(i, 1)
      curr.push(arr[i])
      backtrack(newNums, curr)
      curr.pop()
    }
  }
  backtrack(nums, [])
  return result
}

const permutations2 = nums => {
  const result = []
  const backtrack = (index, combination) => {
    if (index == nums.length) {
      result.push(combination)
      return
    }
    backtrack(index + 1, [...nums[index]])
    backtrack(index + 1, [...combination, nums[index]])
  }
  backtrack(0, [])
  return result
}

console.log(permutations([1, 2, 3]))
