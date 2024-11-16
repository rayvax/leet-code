import { longestPalindrome } from './solution-2';

describe('Getting longest palindrome', () => {
  test('Should work for odd palindrome', () => {
    const result = longestPalindrome('babad');

    expect(['bab', 'aba']).toContain(result);
  });
  test('Should work for even palindrome', () => {
    const result = longestPalindrome('cbbd');

    expect(['bb']).toContain(result);
  });
  test('Should work for single letter', () => {
    const result = longestPalindrome('a');

    expect(result).toBe('a');
  });
  test('Should work for multiple palindromes', () => {
    const result = longestPalindrome('cbbdabaw');

    expect(['aba']).toContain(result);
  });
});
