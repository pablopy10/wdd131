// Add the current year to the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Add the last modified date to the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  // Formula for wind chill (Celsius)
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  ).toFixed(2);
}

// Static weather values
const temperature = 20; // in Celsius
const windSpeed = 10; // in km/h

// Check if conditions are met to calculate wind chill
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("windChill").textContent = `${windChill}°C`;
} else {
  document.getElementById("windChill").textContent = "N/A";
}
