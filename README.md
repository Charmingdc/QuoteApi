
# Quote API

A simple, serverless API that serves random quotes. The quotes are available in JSON format and are stored in a `.json` file. This API is deployed on Vercel and can be accessed from the endpoint below.

## API Endpoint

You can access the quotes by making a `GET` request to:

```
https://quote-api-ashen.vercel.app/api/quotes
```

## How to Use

1. **GET Request**:  
   Call the API with a standard GET request to fetch the list of quotes.
   
   Example:
   ```bash
   curl https://quote-api-ashen.vercel.app/api/quotes
   ```
   The response will be a JSON array of quotes.

2. **Response Format**:
   The API will return a JSON response containing objects of array of quotes.

   Example response:
   ```json
   {
    "quotes": {
      "anger": [
      "Anger is one letter short of danger.",
      "The best way to deal with anger is to not let it control you.",
      "Anger is a wind which blows out the lamp of the mind.",
      "He who angers you conquers you.",
      "Don’t let anger consume you.",
      "Anger is a temporary madness.",
      ],
      "courage": [
       "Courage is not the absence of fear, but the triumph over it.",
      "Fear is a reaction. Courage is a decision.",
      "Courage is grace under pressure.",
      "The only courage that matters is the kind that gets you from one moment to the next.",
      "Courage is not the absence of fear, but the willingness to face it.",
      "It takes courage to grow up and become who you really are.",
      "Courage is being scared to death, but saddling up anyway.",
      ]
    }
   }
   ```

## How to Contribute

1. Fork this repository.
2. Add or edit quotes in the `quotes.json` file.
3. Create a pull request.

## Local Development

To run the API locally:

1. Clone the repo:
   ```bash
   git clone https://github.com/Charmingdc/QuoteApi.git
   cd QuoteApi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local server:
   ```bash
   npm run dev
   ```

4. Access the API at:
   ```
   http://localhost:3000/api/quotes
   ```

## License

This project is open source and available under the [MIT License](LICENSE).
