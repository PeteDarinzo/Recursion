/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, l = 0) {
  if (!words.length) return l;
  let word = words[0];
  if (word.length > l) {
    return longest(words.slice(1), l = word.length);
  } else {
    return longest(words.slice(1), l);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return '';
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if ((str.length === 0) || (str.length === 1)) return true; // base case = palindrone
  if (str[0] !== str[str.length - 1]) return false; // not palindrome
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return i;
  return findIndex(arr.slice(1), val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, copy = "") {
  if (!str.length) return copy;
  copy += str.charAt(str.length - 1);
  return revString(str.slice(0, -1), copy);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let output = [];
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "string") {
      output.push(value);
    } else if (typeof value === "object") {
      output = [...output, ...gatherStrings(value)];
    }
  }
  return output;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = (arr.length - 1)) {
  if (leftIdx > rightIdx) return -1; // base case: if left index goes above right, the value isn't present
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];
  if (middleVal < val) { //middle val to small => search upper half
    return binarySearch(arr, val, middleIdx + 1, rightIdx);
  } else if (middleVal > val) { // middle val too big => search lower half
    return binarySearch(arr, val, leftIdx, rightIdx - 1);
  } else {
    return middleIdx;
  }
}

/** Given a multi-dimensional integer array, return the total number of integers, stored inside this array */

function realSize(arr) {
  let total = 0;
  for (let element of arr) {
    if (Array.isArray(element)) {
      total += realSize(element);
    } else {
      total += 1;
    }
  }
  return total;
}

/** Write a function that sums squares of numbers in list that may contain more lists
 */

function sumSquares(arr) {
  let sum = 0;
  for (let element of arr) {
    if (Array.isArray(element)) {
      sum += sumSquares(element);
    } else {
      sum += Math.pow(element, 2);
    }
  }
  return sum;
}

/** You need to design a recursive function called replicate which will receive arguments times and number. */

// solution : build from the ground up
// if times = 0, return an empty array
// previous function call then appends the number
// previous function call appends again, etc.
// first function call then returns the array, with all values

function replicate(times, number) {
  if (times > 0) { // base case - continue until 0 times, or if less than 0 return empty array
    let output = replicate(times - 1, number);
    output.push(number);
    return output;
  } else {
    return [];
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  realSize,
  sumSquares,
  replicate
};
