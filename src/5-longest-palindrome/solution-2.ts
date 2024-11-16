function longestPalindrome(s: string): string {
  let result = '';

  let i = 0;
  while (i < s.length) {
    let right = i;

    do {
      right++;
    } while (right < s.length && s[i] === s[right]);

    const repeatedCenterCount = right - i;

    let left = i - 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    const currentPalindrome = s.substring(left + 1, right);
    if (currentPalindrome.length > result.length) {
      result = currentPalindrome;
    }

    i += repeatedCenterCount;
  }

  return result;
}

export { longestPalindrome };
