export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
      let url = process.env.httpHost + process.env.url + process.env.path + "user"
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      }).then(response => response.json())
      .then(data => res.status(200).json(data))
      .catch(error => res.status(400).json({ error: `Failed to create user: ${error.message}` }));
    } else {
      res.status(405).json({ error: 'Method Not Allowed' })
    }
  }