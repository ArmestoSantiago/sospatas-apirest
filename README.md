# SOSPatas API

API REST for SOSPatas web: A backend service for managing animal data with CRUD operations and validation.

### Features

- RESTful interface
- CRUD operations (Create, Read, Update, Delete)
- Data validation
- Standardized JSON responses

### Technologies Used

- Node.js
- Express.js
- SQLite
- [Turso](https://turso.tech/) (For database hosting)

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/ArmestoSantiago/sospatas-apirest.git
    ```
    
2. Install dependencies:

    ```
    npm install
    ```
    
3. Create a .env file in the root of the project and add your database credentials (You can obtain one at [Turso Web](https://turso.tech/)):

    ```
    DB_TEST_TOKEN=your_db_token
    DB_TEST_URL=your_db_url
    ```
4. Start the server

    ```
    npm run dev
    ```

### Usage

Once the server is running, you can interact with the API using an HTTP client like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

1. Get all animals
   
    - Method: GET
    - URL: /animals
    - Description: Returns a list of all animals.
  
2. Create a new animal
   
    - Method: POST
    - URL: /animals
    - Description: Creates a new animal.
    - Request Body:
      
        ```
        {
            "user_id": "userId",
            "type": "AnimalType",
            "condition": "Condition",
            "description": "Description",
            "location": "Location",
            "imgSrc": "ImageURL"
        }
        ```

  ### Examples

  Get all losted or street animals:

  ```
    curl -X GET http://localhost:1234/animals
  ```

  Create a new losted animal:
  
   ```
    curl -X POST http://localhost:1234/animals -H "Content-Type: application/json" -d '{"user_id": "userId", "type": "AnimalType", "condition": "Condition", "description": "Description", "location": "Location", "imgSrc": "ImageURL"}'
   ```

