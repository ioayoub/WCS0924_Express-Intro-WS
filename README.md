# Express Intro

This is a simple Express.js application that serves car data through a RESTful API.

## Project Structure

## Setup

1. Clone the repository.
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Copy the `.env.sample` file to `.env` and update the `SERVER_PORT` variable if needed:
   ```sh
   cp .env.sample .env
   ```

## Running the Application

To start the application in development mode, run:
`sh
        npm install
    `
then
`sh
        npm run dev
    `

The server will start on the port specified in the `.env` file.

## API Endpoints

### API Endpoints

#### Get All Cars

- URL: `/cars`
- Method: `GET`
- Query Parameters:
  `limit` (optional): Number of cars to return (default is 10)
  `category` (optional): Filter cars by category
- Response :
  ```json
  [
      {
      "id": 1,
      "marque": "Toyota",
      "modele": "Corolla",
      "categorie": "Compact"
      },
  ]
  ...
  ```

#### Get Car by ID

- URL: /cars/:id
- Method: GET
- URL Parameters:
  - `id`: ID of the car
- Response =
  ```json
  {
    "id": 1,
    "marque": "Toyota",
    "modele": "Corolla",
    "categorie": "Compact"
  }
  ```

### Project Files

- `main.js`: Entry point of the application.
- `src/routers/cars.routes.js`: Defines the routes for the car API.
- `src/data/cars.json`: Contains the car data.

### Dependencies

- `dotenv`: Loads environment variables from a .env file.
- `express`: Web framework for Node.js.

## License

This project is licensed under the ISC License.

Feel free to modify the content as needed.
