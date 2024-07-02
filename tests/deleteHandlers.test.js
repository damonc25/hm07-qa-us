// eslint-disable-next-line no-undef
const config = require('../config');

test('Kit 7 should be deleted', async () => {
    try {
		const deleteresponse = await fetch(`${config.API_URL}/api/v1/kits 7`, {
			method: 'DELETE',
		});
		const actualStatusCode = deleteresponse.status;
		expect ([200,204]).toContain(actualStatusCode);

	} catch (error) {
		console.error(error);
	}
});

test('Fetch deleted response', async () => {
	try{
		const fetchDeletedResponse = await fetch(`${config.API_URL}/api/v1/kits/7`);
		console.log('Fetch deleted kit status:', 
			fetchDeletedResponse.status);
		const fetchDeletedBody = await fetchDeletedResponse.json();
		console.log('Fetch deleted kit body:', fetchDeletedBody);
	
		expect(fetchDeletedResponse.status).toBe(404);
		
	
	  } catch (error) {
		console.error('Test failed due to an error during execution:', error);
		throw new Error('Test failed due to an error during execution');
	  }
	});
