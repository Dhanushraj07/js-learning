async function sendPostData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', // Request method
      headers: {
        'Content-Type': 'application/json', // Sending JSON data
        'Authorization': 'Bearer fakeToken123' // Optional: if API needs a token
      },
      body: JSON.stringify({
        title: 'Hello World',
        body: 'This is a test post from fetch with async/await',
        userId: 1
      })
    });

    // Optional: Check if request was successful
    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the response JSON
    console.log('POST response:', data);
  } catch (error) {
    console.error('❌ Error sending POST request:', error.message);
  }
}

sendPostData();
