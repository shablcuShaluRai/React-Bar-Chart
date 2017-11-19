export async function fetchData() {
  try {
    let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    let response = await fetch(url);
    let body = await response.json();
    return body;
  }
  catch(e){
    console.log(e);
  }

}
