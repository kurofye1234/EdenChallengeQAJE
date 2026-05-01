const { devices } = require('@playwright/test');  
  
module.exports = {  
  testDir: './tests', // Carpeta donde estarán los tests  
  timeout: 30000,  
  retries: 0,  
  reporter: 'list',  
  use: {  
    headless: false, // Cambiar a true si no deseas ver el navegador  
    viewport: { width: 1280, height: 720 },  
    ignoreHTTPSErrors: true,  
    video: 'retain-on-failure', // Graba video solo si la prueba falla  
    screenshot: 'only-on-failure', // Toma capturas solo si la prueba falla  
  },  
};  