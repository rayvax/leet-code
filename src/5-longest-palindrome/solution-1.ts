function longestPalindrome(s: string): string {
  let longestPalindromeLength = s.length;

  while (longestPalindromeLength > 1) {
    const palindromesToCheckCount = s.length - longestPalindromeLength + 1;

    palindromeStartLoop: for (
      let palindromeStartIndex = 0;
      palindromeStartIndex < palindromesToCheckCount;
      palindromeStartIndex++
    ) {
      let compStart = palindromeStartIndex;
      let compEnd = palindromeStartIndex + longestPalindromeLength - 1;

      while (compStart < compEnd) {
        if (s[compStart] !== s[compEnd]) {
          continue palindromeStartLoop;
        }

        compStart++;
        compEnd--;
      }

      return s.substring(palindromeStartIndex, palindromeStartIndex + longestPalindromeLength);
    }

    longestPalindromeLength--;
  }

  return s.substring(0, 1);
}

export { longestPalindrome };
