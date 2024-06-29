class Cylinder {
    // Constructor to initialize radius and height
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate the volume of the cylinder
    getVolume() {
        // Volume formula V = πr^2h
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        // Returning the volume rounded to four decimal places
        return volume.toFixed(4);
    }
}

// Example usage
let cylinder = new Cylinder(5, 10);
console.log(`The volume of the cylinder is: ${cylinder.getVolume()}`); // Output: The volume of the cylinder is: 785.3982
