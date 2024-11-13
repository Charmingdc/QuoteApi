'use stict';


import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'quotes.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Could not read file' });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}