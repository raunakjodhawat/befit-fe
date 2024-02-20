export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
      let url = process.env.httpHost + process.env.url + process.env.path + "user";
      let auth = Buffer.from(`${username}:${password}`).toString('base64');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth}`
        }
      });
      if (response.ok) {
        res.status(200).json({ message: 'User is authenticated' })
      } else {
        res.status(401).json({ error: 'Failed to authenticate' })
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' })
    }
  }