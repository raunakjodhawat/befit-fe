export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { id, quantity, timestamp, authorizationToken } = req.body;
      let url = process.env.httpHost + process.env.url + process.env.path + "user"
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authorizationToken
        },
        body: JSON.stringify({ id, quantity, timestamp })
      }).then(response => response.json())
      .then(data => res.status(200).json(data))
      .catch(error => res.status(400).json({ error: `Failed to create history: ${error.message}` }));
    } else if (req.method === 'GET') {
        const { timestamp, authorizationToken } = req.body;
        let url = process.env.httpHost + process.env.url + process.env.path + "history"
        await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authorizationToken
          },
          body: JSON.stringify({ timestamp })
        }).then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ error: `Failed to get user's history: ${error.message}` }));
    } else if (req.method === 'DELETE') {
        const { timestamp, authorizationToken } = req.body;
        let url = process.env.httpHost + process.env.url + process.env.path + "history"
        await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authorizationToken
          },
          body: JSON.stringify({ timestamp })
        }).then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ error: `Failed to get user's history: ${error.message}` }));
        
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
  }