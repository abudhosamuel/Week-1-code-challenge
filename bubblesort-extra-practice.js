function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reduce the length for the next iteration since the last element is in the correct position
        n--;
    } while (swapped);
    return arr;
}

// Example usage
let sampleInput = [5, 6, 1, 3, 4, 2];
let sortedArray = bubbleSort(sampleInput);
console.log(sortedArray); // Expected output: [1, 2, 3, 4, 5, 6]
