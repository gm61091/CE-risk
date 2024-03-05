// api pulls
const flag = document.getElementById('flag')
const main = document.getElementById('main')
const news = document.getElementById('news')
async function getBoth() {
  await getCountry();
  await getNews();
}

async function getNews() {
 // const apiKey1 = '4a1d37950ca0433f8e27cb2fe696fe4c';  // wont work when add to urlNews
  //const counrtyNews = 'argentina';
  //const newsUrl = 'https://newsapi.org/v2/everything?q=keyword&apiKey=4a1d37950ca0433f8e27cb2fe696fe4c';
  const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4a1d37950ca0433f8e27cb2fe696fe4c';

  fetch(newsUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(data)
    let news = document.createElement('h3')
    news.innerText = data.articles
    news.appendChild(data)})
  .catch(error => console.error('Error:', error));

  
}

async function getCountry() {
    const apiKey = '4ChDdepKg5KT1TO9HEW5SLnfXwfQWBV9q5te1VCR';
    const country = document.getElementById('country').value.toLowerCase();
    const Url = `https://countryapi.io/api/name/${country}?apikey=${apiKey}`;
    

    fetch(Url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(data.ar.currencies.ARS.symbol)
    
    console.log(data.ar.flag.large)
    flag.setAttribute('src', data.ar.flag.large)
    let currency_symbol = document.createElement('h4')
    currency_symbol.innerText = data.ar.currencies.ARS.symbol
    main.appendChild(currency_symbol)
    })

//   .then(data => console.log(data.))
  
  .catch(error => console.error('Error:', error));
}



