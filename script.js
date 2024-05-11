// const currentTimeElement = document.getElementById("current-time");

// function updateTime() {
//   const now = new Date();
//   const timeString = now.toLocaleTimeString(); // Adjust format if needed
//   currentTimeElement.textContent = timeString;
// }

// updateTime();
// setInterval(updateTime, 1000); // Update every second
const fs = require('fs');
const path = require('path');

// Get the directory path where the script is located
const directoryPath = path.dirname(require.main.filename);

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter JSON files
    const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

    // Output the list of JSON files
    console.log('JSON Files in the directory:');
    jsonFiles.forEach(file => {
        console.log(file);
    });
});