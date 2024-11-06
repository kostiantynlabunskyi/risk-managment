const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  this.on('callOnpremise', async () => {
    const response = await cds.connect.to('OnPremiseService').get('/onpremise');
    return response;
  });
});
