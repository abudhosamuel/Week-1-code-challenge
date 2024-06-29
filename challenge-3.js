const readlineSync = require('readline-sync');

// KRA tax rates and bands (simplified)
const taxRates = [
    { upTo: 24000, rate: 0.1 },
    { upTo: 32333, rate: 0.25 },
    { upTo: Infinity, rate: 0.3 }
];

// NHIF rates (simplified)
const nhifRates = [
    { upTo: 5999, deduction: 150 },
    { upTo: 7999, deduction: 300 },
    { upTo: 11999, deduction: 400 },
    { upTo: 14999, deduction: 500 },
    { upTo: 19999, deduction: 600 },
    { upTo: 24999, deduction: 750 },
    { upTo: 29999, deduction: 850 },
    { upTo: 34999, deduction: 900 },
    { upTo: 39999, deduction: 950 },
    { upTo: 44999, deduction: 1000 },
    { upTo: 49999, deduction: 1100 },
    { upTo: 59999, deduction: 1200 },
    { upTo: 69999, deduction: 1300 },
    { upTo: 79999, deduction: 1400 },
    { upTo: 89999, deduction: 1500 },
    { upTo: 99999, deduction: 1600 },
    { upTo: Infinity, deduction: 1700 }
];

// NSSF rate (simplified)
const nssfRate = 0.06;

function calculateTax(grossSalary) {
    let tax = 0;
    let remainingSalary = grossSalary;

    for (const band of taxRates) {
        if (remainingSalary > 0) {
            const taxableAmount = Math.min(remainingSalary, band.upTo);
            tax += taxableAmount * band.rate;
            remainingSalary -= taxableAmount;
        } else {
            break;
        }
    }

    return tax;
}

function calculateNhif(grossSalary) {
    for (const band of nhifRates) {
        if (grossSalary <= band.upTo) {
            return band.deduction;
        }
    }
    return 0;
}

function calculateNssf(grossSalary) {
    return Math.min(grossSalary * nssfRate, 1800); // Assuming a maximum NSSF deduction cap of 1800
}

function main() {
    const basicSalary = parseFloat(readlineSync.question('Enter the basic salary: '));
    const benefits = parseFloat(readlineSync.question('Enter the benefits: '));

    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhif = calculateNhif(grossSalary);
    const nssf = calculateNssf(grossSalary);

    const netSalary = grossSalary - tax - nhif - nssf;

    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`PAYE (Tax): ${tax.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
    console.log(`NSSF Deduction: ${nssf.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

main();
