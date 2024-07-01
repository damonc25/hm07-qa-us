const config = require('../config');

test('Should return a 200 status code', async () => {
    let actualStatusCode;
    const url = `${config.API_URL}/api/v1/kits?cardId=1`;
    console.log('Fetching URL:', url);
    try {
        const response = await fetch(url);
        actualStatusCode = response.status;
    } catch (error) {
        console.error('Error during fetch:', error);
    }
    expect(actualStatusCode).toBe(200);
});

test('Body should contain For picnic', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`);
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
    console.log(actualResponseBody)
    expect(actualResponseBody[0].name).toBe('For picnic');
});