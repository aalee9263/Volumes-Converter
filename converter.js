function convertUnits(event) {
    event.preventDefault(); // Prevent the form from submitting

    const liter = parseFloat(document.getElementById("liter").value);
    const milliliter = parseFloat(document.getElementById("milliliter").value);
    // Add more unit variables here

    const conversionFactors = {
        liter: 1,
        milliliter: 1000,
        // Add more conversion factors here
    };

    // Perform conversions for each unit
    for (const unit in conversionFactors) {
        const result = (liter * conversionFactors[unit]) / conversionFactors['liter'];
        document.getElementById(unit).value = result.toFixed(2);
    }

    // Update the result element
    document.getElementById("result").textContent = "Conversion completed!";
}
