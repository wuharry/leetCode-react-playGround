export function twoSum(_nums: number[], target: number): number[] {
  const arrMap = new Map(_nums.map((num, index) => [num, index]));

  const ans: number[] = [];
  for (let index = 0; index < _nums.length; index++) {
    const currentNum = _nums[index];
    if (currentNum === undefined) return ans;
    const compareValue = target - currentNum;
    if (arrMap.get(compareValue) && arrMap.get(compareValue) !== index) {
      // console.log([index, arrMap.get(compareValue)]);
      ans.push(index, arrMap.get(compareValue) as number);

      break;
    }
  }

  console.log(ans);

  return ans;
}
