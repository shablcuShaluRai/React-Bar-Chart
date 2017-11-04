export async function fetchData() {
  let url = 'https://gist.githubusercontent.com/shalurai/f356824e9f19f46a86dc91d8d13b7450/raw/e31b2f657fa458a37c10ea55c93b656c0a9a5f80/GDP-data.json';
  let response = await fetch(url);
 let body = await response.json();
 console.log(body);
  return body;
}
