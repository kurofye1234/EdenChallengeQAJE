const { test, expect } = require('@playwright/test');  
  
test.describe('Canvas Presence Test (Dinámico)', () => {  
  test('Validar que todos los elementos canvas están presentes y son visibles', async ({ page }) => {  
    // Navegar a la página  
    await page.goto('https://pacs.evacenter.com/v2/mpr?studyId=738cb683-8426-42a1-b27e-921f455b70c4&tab=images&ac=dXNlcj1ldmEtY2VudGVyQHZpc2l0YW50LmNvbSZwYXNzd29yZD0zOTc5NzRlNS1hOWExLTQyOWYtYWRmMS02YzJkOTQ4ODhhYmImZXh0cmFfdmFsaWRhdGlvbj02ODkxNjNiYS0wMzAzLTRlYTEtYTRlMC1mNGE5Y2RiYTQ0YWQ%3D%3D%3D&md=1&serieId=0d018bf7-c18f-4882-b8fb-440fb72299d8&fromViewer=mobile_viewer');  


  
    // Esperar hasta que al menos un elemento canvas esté en el DOM  
    await page.waitForSelector('canvas'); // Espera a que el primer canvas aparezca  
  
    // Seleccionar todos los elementos canvas  
    const allCanvases = page.locator('canvas');  
  
    // Obtener el número de elementos canvas en la página  
    const count = await allCanvases.count();  
    console.log(`Número de elementos canvas encontrados: ${count}`);  
  
    // Verificar que al menos haya un canvas  
    expect(count).toBeGreaterThan(0); // Asegurarse de que haya al menos un elemento canvas  
  
    // Iterar sobre cada canvas y verificar que sea visible  
    for (let i = 0; i < count; i++) {  
      const canvas = allCanvases.nth(i); // Seleccionar el canvas por índice  
      await expect(canvas).toBeVisible(); // Verificar que el canvas sea visible  
      console.log(`Canvas ${i + 1} es visible.`);  
    }  
  });  
});  


test('Validar que el botón dentro del banner es visible', async ({ page }) => {  
  // Navegar a la página  
  await page.goto('https://pacs.evacenter.com/v2/mpr?studyId=738cb683-8426-42a1-b27e-921f455b70c4&tab=images&ac=dXNlcj1ldmEtY2VudGVyQHZpc2l0YW50LmNvbSZwYXNzd29yZD0zOTc5NzRlNS1hOWExLTQyOWYtYWRmMS02YzJkOTQ4ODhhYmImZXh0cmFfdmFsaWRhdGlvbj02ODkxNjNiYS0wMzAzLTRlYTEtYTRlMC1mNGE5Y2RiYTQ0YWQ%3D%3D%3D&md=1&serieId=0d018bf7-c18f-4882-b8fb-440fb72299d8&fromViewer=mobile_viewer');  


  
  // Seleccionar el banner por clase ya que no encontre algun ID.   
  const banner = page.locator('div[class*="e-h-12 e-flex e-items-center e-px-4 e-w-full e-min-w-fit e-gap-2"]'); // Usa parte de la clase del banner  
  
  // Verificar que el banner está visible  
  await expect(banner).toBeVisible();  
  
  // Seleccionar el botón dentro del banner  
  const button = banner.locator('button:has-text("Annotation")'); 
  
  // Verificar que el botón es visible  
  await expect(button).toBeVisible();  
  console.log('El botón dentro del banner es visible.');  
  await button.click();  
  console.log('Se hizo clic en el botón dentro del banner.');  
  
  // Seleccionar el modal (ajusta el selector según la estructura del Submenu)  
  const modal = page.locator('section[class*="hide-scrollbar e-bg-neutral-900 e-py-2 e-px-4 e-flex e-items-center e-overflow-x-auto e-overflow-y-hidden e-w-full e-relative e-gap-2"]'); // Ajusta según el identificador del Submenu  
  
  // Verificar que el modal está visible  
  await expect(modal).toBeVisible();  
  console.log('El submenu de Anotacion se abrió correctamente.');

  // Verificar que los botones del submenu son visibles y se puede interatuar  
  // 
  const buttonAnnotation = modal.locator('button:has-text("Annotation")');
  await expect(buttonAnnotation).toBeVisible();  
  const buttonArrow = modal.locator('button:has-text("Arrow")');
  await expect(buttonArrow).toBeVisible(); 
  const buttonSpineLabel = modal.locator('button:has-text("Spine label")');
  await expect(buttonSpineLabel).toBeVisible(); 
  await buttonAnnotation.click();  
  console.log('Se hizo clic en el botón "Annotation".'); 
await buttonArrow.click();  
  console.log('Se hizo clic en el botón "Arrow".'); 
await buttonSpineLabel.click();  
  console.log('Se hizo clic en el botón "Spine label".'); 

});