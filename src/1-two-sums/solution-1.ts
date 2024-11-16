export function twoSum(nums: number[], target: number): number[] {
  const firstNumbersToSkip: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (firstNumbersToSkip.includes(nums[i])) {
      continue;
    }

    const secondNumbersToSkip: number[] = [...firstNumbersToSkip];

    for (let j = i + 1; j < nums.length; j++) {
      if (secondNumbersToSkip.includes(nums[j])) {
        continue;
      }

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }

      secondNumbersToSkip.push(nums[j]);
    }

    firstNumbersToSkip.push(nums[i]);
  }

  throw Error('Input should have exactly one solution');
}
