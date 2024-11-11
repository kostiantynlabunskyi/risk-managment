const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  this.on('callOnpremise', async () => {
    const destination = await cds.connect.to('OnPremiseService');
    const response = await destination.get('/onpremise');   
    return response;
  });
});
