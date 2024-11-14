require('dotenv').config(); // Load environment variables from .env file

const config = {
    // Database Configuration
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    // Server Configuration
    server: {
        port: process.env.PORT || 5000, // Default to 5000 if PORT is not set
    },
    // Google Sheets API Configuration
    // googleSheets: {
    //     sheetId: process.env.GOOGLE_SHEET_ID || '', // The ID of your Google Sheet
    //     apiKey: process.env.GOOGLE_API_KEY || '',     // Your Google API key for accessing Sheets
    // },

    // Other Configurations
    nodeEnv: process.env.NODE_ENV || 'development', // Environment type (development/production)
};

module.exports = config;