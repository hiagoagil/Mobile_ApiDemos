describe('Android elementos teste', () => {
    it('localizando elemento com acessibility ID', async () => {
        // Elemento ID 
        const idacebility = await $('~App')
        await idacebility.click()
        const opcaoactionbar = await $('~Action Bar')
        await expect(opcaoactionbar).toBeExisting()
    })


    it('Localizando elemento de class name', async () => {
        // Elemento classname 
        const classname = $('android.widget.TextView')
        console.log(classname.getText())

        // Asserção 
        await expect(classname).toHaveText("API Demos")

    });

    it('Localizando elemento xpath', async () => {
        // Xpath - (//tagname[@attribute=value]) 
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

        // Encontrando elemento resourceId 
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // Encontrando elemento pelo texto
        await $('//android.widget.TextView[@text="Command two"]').click()

        // Encontrando elemento pela classe 
        const elementoclasse = $('android.widget.TextView')
        await expect(elementoclasse).toHaveText('You selected: 1 , Command two')

    });

    it.only('Input text ', async () => {
        await $('~Views').click()
        await $('//*[@text="Auto Complete"]').click()
        await $('//*[@content-desc="1. Screen Top"]').click()
        const inputtext = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await inputtext.addValue('Brazil')
        await expect(inputtext).toHaveText('Brazil')

    });

})
