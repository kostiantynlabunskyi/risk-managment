const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Items } = this.entities;

    this.on('getItemsByQuantity', async (req) => {
        const { quantity } = req.data;
        return await SELECT.from(Items).where({ quantity: { '>=': quantity } });
    });

    this.on('createItem', async (req) => {
        const { title, quantity } = req.data;
        return await INSERT.into(Items).entries({ title, quantity });
    });

    this.before('CREATE', 'Items', async (req) => {
        if (req.data.quantity > 100) {
            req.error(400, 'Quantity cannot exceed 100');
        }
    });
});
