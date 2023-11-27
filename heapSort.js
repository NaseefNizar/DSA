function heapSort(arr) {
  // Build a max heap from the array
  buildMaxHeap(arr);
  // Sort the array by repeatedly extracting the maximum element and
  // placing it at the end of the unsorted portion of the array
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap the maximum element (at index 0) with the last element
    swap(arr, 0, i);
    // Restore the max heap property on the unsorted portion of the array
    maxHeapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const n = arr.length;
  // Heapify each non-leaf node in the array
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, n);
  }
}

function maxHeapify(arr, i, n) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  // Find the largest of the current node, its left child, and its right child
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  // If the largest element is not the current node, swap the nodes and
  // recursively restore the max heap property on the affected subtree
  if (largest !== i) {
    swap(arr, i, largest);
    maxHeapify(arr, largest, n);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



console.log(heapSort([3,5,1,2,4,9,8]));