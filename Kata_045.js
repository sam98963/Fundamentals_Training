function getMean(arr, x, y) {
  if (x > 1 && y > 1 && x <= arr.length && y <= arr.length) {
      let sumFirstX = 0;
      let sumLastY = 0;

      for (let i = 0; i < x; i++) {
          sumFirstX += arr[i];
      }

      for (let i = arr.length - y; i < arr.length; i++) {
          sumLastY += arr[i];
      }

      return (sumFirstX/x + sumLastY/y) / 2;
  } else {
      return -1;
  }
}