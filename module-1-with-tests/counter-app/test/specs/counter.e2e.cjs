const assert = require('assert');

describe('Counter component', () => {
    before(async () => {
        await browser.url('http://localhost:5173');
    });

    it('renders initial value', async () => {
        const counterValue = await $('#counter-value');
        await counterValue.waitForExist({ timeout: 5000 });
        const text = await counterValue.getText();
        assert.strictEqual(text, '10');
    });

    it('increments when Increment button is clicked', async () => {
        const incBtn = await $('#increment-btn');
        await incBtn.click();
        const counterValue = await $('#counter-value');
        const text = await counterValue.getText();
        assert.strictEqual(text, '11');
    });

    it('decrements when Decrement button is clicked', async () => {
        const decBtn = await $('#decrement-btn');
        await decBtn.click();
        const counterValue = await $('#counter-value');
        const text = await counterValue.getText();
        assert.strictEqual(text, '10');
    });

});
