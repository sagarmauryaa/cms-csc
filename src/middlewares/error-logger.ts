const fs = require("fs");
const path = require("path");

// Middleware to log errors to a file
module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        try {
            await next();

            // Log non-200 status codes
            if (ctx.status !== 200) {
                const non200Message = `
          [${new Date().toISOString()}] 
          Method: ${ctx.method} 
          URL: ${ctx.url} 
          Status: ${ctx.status} 
          Message: ${ctx.message || "Non-200 response"}
        `;

                // Define log file path
                const logFilePath = path.join(process.cwd(), "logs", "error-log.txt");

                // Write non-200 status message to the log file
                fs.appendFile(logFilePath, non200Message, (error) => {
                    if (error) {
                        console.error("Error writing to log file:", error);
                    }
                });
            } else if (ctx.status == 200 && ctx.method.toLowerCase() == 'get' && ctx.url.includes('/api/')) {

                // const msg200 = `[${new Date().toISOString()}]\nURL: ${ctx.url.split("?")[0]}\nQUERY: ${JSON.stringify(ctx.query)}\n\r`;

                // // Define log file path
                // const logFilePath = path.join(process.cwd(), "logs", "apiurls.txt");

                // // Write non-200 status message to the log file
                // fs.appendFile(logFilePath, msg200, (error) => {
                //   if (error) {
                //     console.error("Error writing to log file:", error);
                //   }
                // });
            }
        } catch (err) {
            const errorMessage = `
        [${new Date().toISOString()}] 
        Method: ${ctx.method} 
        URL: ${ctx.url} 
        Status: ${ctx.status || 500} 
        Message: ${err.message} 
        Stack: ${err.stack}
      `;

            // Define log file path
            const logFilePath = path.join(process.cwd(), "logs", "error-log.txt");

            // Write error message to the log file
            fs.appendFile(logFilePath, errorMessage, (error) => {
                if (error) {
                    console.error("Error writing to log file:", error);
                }
            });

            // Re-throw the error to ensure Strapi handles it
            throw err;
        }
    };
};