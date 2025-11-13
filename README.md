# Projektin nimi ja tekijät
Music Info App, Jere Kauppinen

## Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa [netlify.com](https://jeren-projetki2.netlify.app/)
Linkki projektin videoesittelyyn [youtube](youtube.com/watch?v=wzKOspHO98c&feature=youtu.be)

## Työn jakautuminen 
Tein tämän yksin.

## Oma arvio työstä ja oman osaamisen kehittymisestä
Mielestäni onnistuin ymmärtämään ja toteuttamaan AJAX-haun, parsimaan JSON-vastauksen ja näyttämään datan DOM:ssa.
Parantamista olisi ulkoasussa voisi olla enemmän visuaalisia elementtejä ja hakutulosten rajausta.
Sovelluksesta jäi puuttumaan 
Koen, että olen oppinut miten API:t toimivat käytännössä ja miten JSON-data käsitellään JavaScriptissä.
Epäselväksi jäi miten API avain piiloitetaan, tein functionin, silti ei toiminut.
Antaisin itselleni pisteitä seuraavasti: 7/10 p

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka



## Sisällysluettelo:

- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Tunnetut virheet/bugit](#Tunnetut virheet/bugit)
- [Kuvakaappaukset](#kuvakaappaukset)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Lähestymistapa](#lähestymistapa)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta
Music Info App on yksinkertainen JavaScript-pohjainen sovellus, joka hakee artistien albumeita Last.fm API:n avulla.
Käyttäjä kirjoittaa artistin nimen, painaa Hae ja saa näkyviin listan suosituimmista albumeista kansikuvineen.

## Tunnetut virheet/bugit
Joidenkin artistien kohdalla Last.fm ei palauta kuvia, taulukossa näkyy tyhjä kuva.
API avaimen piiloittaminen ei toiminut, tein function netlifyssä silti en saanut sitä toimimaan (teen videon versiosta missä en piiloittanut sitä). Koodi on kuitenki niin, että sen pitäisi olla piilossa.


## Kuvakaappaukset
https://gyazo.com/c27d0ed328e854b16d402972b59edc77


## Teknologiat  
Käytin seuraavia teknologioita: `html`, `css`, `JavaScript` ja `Last.fm API`.

## Asennus  
- lataa tiedostot ja avaa index.html
- Syötä artistin nimi ja paina Hae nähdäksesi albumit.

## Kiitokset
- [Last.fm API] https://www.last.fm/api
- [Mika Stenberg] https://mika-stenberg.gitbook.io/web-sovelluksia-javascriptin-avulla/6.-ajax/untitled
- ChatGPT auttoi selittämään AJAX-kutsujen toimintaa ja API avaimen piilottamisessa.

## Lisenssi
MIT-lisenssi @ Jembtyy
