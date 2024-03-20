export default async function handler(req, res) {
  if (req.method === 'GET') {
    let url = process.env.httpHost + process.env.url + process.env.path + "user"
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization
      }
    });
    if (response.ok) {
      res.status(200).json({ message: 'User is authenticated' })
    } else {
      res.status(401).json({ error: 'Failed to authenticate' })
    }
  } else {
    res.status(405).json({ error: 'Unexpected HTTP code' })
  }
}