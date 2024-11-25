const fs = require('fs');

function readPdfFile(filePath) {
    return fs.readFileSync(filePath);
}

//example usage:
const pdfPath = 'path/to/your/notes.pdf';
const binaryData = readPdfFile(pdfPath);