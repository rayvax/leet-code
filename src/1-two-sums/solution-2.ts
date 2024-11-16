type ArrayElement<ArrayType extends unknown[]> = ArrayType extends (infer R)[] ? R : never;

export function twoSum(nums: number[], target: number): [number, number] {
  const sortedNums = nums.map((value, i) => ({ value, originalIndex: i })).sort((a, b) => a.value - b.value);

  type SortedArrayValue = ArrayElement<typeof sortedNums>;
  const compareFunc = (arrayElement: SortedArrayValue, target: number) => arrayElement.value - target;

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i].value === target / 2) {
      if (sortedNums[i].value === sortedNums[i + 1].value) {
        return [sortedNums[i].originalIndex, sortedNums[i + 1].originalIndex];
      }

      continue;
    }

    const secondNumberIndex = binarySearch(sortedNums, target - sortedNums[i].value, compareFunc);

    if (secondNumberIndex !== null) {
      const firstOriginalIndex = sortedNums[i].originalIndex;
      const secondOriginalIndex = sortedNums[secondNumberIndex].originalIndex;
      return [firstOriginalIndex, secondOriginalIndex];
    }
  }

  throw Error('Input should have exactly one solution');
}

const defaultBinarySearchCompare = (a: any, b: any) => a - b;
export function binarySearch<T, V>(
  sortedArray: T[],
  target: V,
  compare: (arrayElement: T, target: V) => number = defaultBinarySearchCompare,
): number | null {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const targetIndex = Math.floor((right + left) / 2);

    const comparisionResult = compare(sortedArray[targetIndex], target);

    if (comparisionResult > 0) {
      right = targetIndex - 1;
    } else if (comparisionResult < 0) {
      left = targetIndex + 1;
    } else {
      return targetIndex;
    }
  }

  return null;
}
