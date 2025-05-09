// Developed by pooja

/*
 * Name: Hotel Room Booking System ~ Backed
 * Description: Build an Hotel Room Booking System using node.js, express.js application from the scratch
 * Author: Pooja (Pooja)
 * Version: v0.0.1
 *
 */

// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');
const PORT = process.env.APP_PORT || 5002;
// app listens to .env defined port
app.listen(PORT, () => {
  logger.info(`App server running on: ${PORT}`);
});
