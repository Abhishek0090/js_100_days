// Write a js function findMedian(arr) that takes an array of numbers as input and returns the median value . if the array has an even number of elements . return the average of two middle

// for e.g , the median of 3,3 , 5,9 ,15 is 5 . if there is an even number of observations , then there is no single middle value; the median is then usually defined to be the mean of the two middle values : so the median of 3,5,7,9 is (5+7)/2 = 6

// todo tips
// sort the array in ascending order
// if the array has an odd number of elements, the median is the middle element
// if the array has an even number of elements, the median is the average of the two middle elements

const findMedian = (arr) => {
  // step1 : sort the array
  // step2 : check if the array length is odd or even
  // step3 : for even length array
  // step4 : for odd length array
  arr = arr.sort((a, b) => a - b);
  let middleElementIdx = Math.floor(arr.length / 2);
  let median;
  if (arr.length % 2 === 0) {
    median = (arr[middleElementIdx - 1] + arr[middleElementIdx]) / 2;
  } else {
    median = arr[middleElementIdx];
  }
  return median;
};

console.log(findMedian([4, 5, 2, 3]));
