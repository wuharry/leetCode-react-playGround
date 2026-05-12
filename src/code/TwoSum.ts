export function twoSum(nums: number[], target: number): number[] {
  const arrMap = new Map(nums.map((num, index) => [num, index]));
  // console.log(arrMap);

  const ans: number[] = [];
  for (let index = 0; index < nums.length; index++) {
    const compareValue = target - nums[index];
    if (arrMap.get(compareValue) && arrMap.get(compareValue) !== index) {
      // console.log([index, arrMap.get(compareValue)]);
      ans.push(index, arrMap.get(compareValue) as number);

      break;
    }
  }

  console.log(ans);

  return ans;
}
