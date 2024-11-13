import quotes from './quotes.json';

export default function handler(req, res) {
  res.status(200).json(quotes);
}