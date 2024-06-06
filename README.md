# Fetch URL API Service

This project is a REST API service built with Node.js and Express, leveraging Playwright to fetch the final rendered content of a given URL. The service returns the HTML content of the URL, optionally using a proxy server.

## Prerequisites

- Node.js and npm installed
- Docker installed

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/rbehzadan/fetch-url-api.git
   cd fetch-url-api
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

## Usage

### Running the Service Locally

1. **Start the server:**

   ```sh
   node server.js
   ```

2. **Send a request to the API:**

   You can use `curl`, Postman, or any HTTP client to send a POST request to the server.

   ```sh
   curl -X POST http://localhost:8080/fetch \
       -H "Content-Type: application/json" \
       -d '{"url":"https://example.com", "proxy":"http://proxyserver:port"}'
   ```

   **Note:** The `proxy` field is optional.

### Running the Service with Docker

1. **Build the Docker image:**

   ```sh
   docker build -t fetch-url-api .
   ```

2. **Run the Docker container:**

   ```sh
   docker run -p 8080:8080 fetch-url-api
   ```

3. **Send a request to the API:**

   ```sh
   curl -X POST http://localhost:8080/fetch \
       -H "Content-Type: application/json" \
       -d '{"url":"https://example.com", "proxy":"http://proxyserver:port"}'
   ```

   **Note:** The `proxy` field is optional.

## API Endpoints

### POST /fetch

Fetches the final rendered HTML content of the provided URL.

**Request Body:**

- `url` (string): The URL to fetch the content from. (Required)
- `proxy` (string): The proxy server to use. (Optional)

**Response:**

- `content` (string): The rendered HTML content of the URL.

**Example Request:**

```json
{
  "url": "https://example.com",
  "proxy": "http://proxyserver:port"
}
```

**Example Response:**

```json
{
  "content": "<html>...</html>"
}
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgments

- [Express](https://expressjs.com/)
- [Playwright](https://playwright.dev/)
