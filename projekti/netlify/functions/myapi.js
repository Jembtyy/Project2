// netlify/functions/myapi.js
export async function handler(event, context) {
  const API_KEY = process.env.LASTFM_API_KEY; // ympäristömuuttuja
  const artist = event.queryStringParameters.artist;

  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Virhe haussa" }),
    };
  }
}