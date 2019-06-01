export const apiEndpoint = 'http://localhost:4000' // TODO move it to process.env.API_ENDPOINT variable

export function post(url, body) {
  return fetch(apiEndpoint + url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  });
}