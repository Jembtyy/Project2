// Last.fm API avain
const API_KEY = "12d54e539c3ac8e59020dee13594850e";

// Kun käyttäjä painaa hakunappia
document.querySelector("#searchBtn").addEventListener("click", function() {
  const artist = document.querySelector("#artistInput").value;
  if (artist === "") {
    alert("Kirjoita artistin nimi!");
    return;
  }
  haeData(artist);
});

// Haetaan data Fetchillä
function haeData(artist) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`;

  fetch(url)
    .then(response => response.json())
    .then(data => parsiData(data))
    .catch(error => console.error("Virhe datan haussa:", error));
}

// Parsitaan data ja tuodaan näkyviin
function parsiData(data) {
  const albumit = data.topalbums.album;
  let taulu = `
      <table border="1">
        <tr>
          <th>Albumi</th>
          <th>Kuva</th>
        </tr>
  `;

  for (let i = 0; i < albumit.length; i++) {
    const nimi = albumit[i].name;
    const kuva = albumit[i].image[2]["#text"];
    taulu += `
      <tr>
        <td>${nimi}</td>
        <td><img src="${kuva}" alt="${nimi}" width="100"></td>
      </tr>
    `;
  }

  taulu += `</table>`;
  document.querySelector("#data").innerHTML = taulu;
}