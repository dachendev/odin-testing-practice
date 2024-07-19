function average(sum, length) {
  if (length === 0) {
    throw new Error("Cannot calculate average of empty array");
  }

  return sum / length;
}

export default function analyzeArray(arr = []) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  let sum = 0;
  let min = arr[0] || null;
  let max = arr[0] || null;

  arr.forEach((num) => {
    sum += num;
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });

  return {
    average: arr.length > 0 ? average(sum, arr.length) : null,
    min,
    max,
    length: arr.length,
  };
}
