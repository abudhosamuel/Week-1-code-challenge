function steps(n) {
    // Outer loop for each level
    for (let i = 1; i <= n; i++) {
        let step = '';
        // Inner loop to construct each level
        for (let j = 1; j <= i; j++) {
            step += '#';
        }
        console.log(step);
    }
}

// Example usage
steps(2);

steps(3);

