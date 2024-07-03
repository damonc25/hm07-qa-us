// eslint-disable-next-line no-undef
const config = require('../config');

test('kit should be created and then deleted', async () => {
	let kitId;
// Create a new kit
	const createRequestBody = {
		"name": "sample kit",
		"cardId": 7
	};
	try {
		const createResponse = await fetch(`${config.API_URL}/api/v1/kits/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(createRequestBody)
	});
	expect(createResponse.status).toBe(201);

	// Get the created kit ID from the response body
	const createRequestBody = await createResponse.json();
	kitId = createRequestBody.id;

	console.log('Kit created with id:', kitId);
} catch (error) {
	console.error(error);
}
// Delete Kit
let actualResponseBody;
try {
	const deleteResponse = await fetch(`${config.API_URL}/api/v1/kits/`, {
			method: 'DELETE',
		});
		expect(deleteResponse.status).toBe(200);

	actualResponseBody = await deleteResponse.json();
	console.log(actualResponseBody);
} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toBe(true);
});

test('Should receive 404 status code when trying to fetch deleted kit', async () => {
	let actualDeleteStatus;
	const kitId = 7;
	try{
		const fetchDeletedResponse = await fetch(`${config.API_URL}/api/v1/kits/7`);
			actualDeleteStatus = fetchDeletedResponse.status;
		const fetchDeletedBody = await fetchDeletedResponse.json();
	

	  } catch (error) {
		console.error('Test failed due to an error during execution:', error);
		throw new Error('Test failed due to an error during execution');
	  }
	  expect(actualDeletedStatus).toBe(404);
	});
