# ShopSmart Backend

This is the backend of the **ShopSmart** project, a full-stack e-commerce website where users can browse, search, filter, and sort products. The backend is built using Node.js, Express.js, and MongoDB.

## Features

- RESTful API for managing products.
- Pagination, searching, categorization, and sorting functionalities.
- Google and Email/Password authentication using Firebase.
- Secure and clean code with best practices.
- Detailed documentation for API endpoints.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Firebase**: Authentication for Google and Email/Password login.

## Getting Started

### Prerequisites

- **Node.js** installed on your machine.
- **MongoDB** installed and running locally or use a cloud MongoDB service like MongoDB Atlas.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/shopsmart-backend.git
    cd shopsmart-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory with the following content:**

    ```plaintext
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/shopsmart
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    ```

4. **Run the server:**

    ```bash
    npm start
    ```

   The server will start on `http://localhost:5000`.

### API Endpoints

#### Product Routes

- **GET /api/products**: Get all products with pagination, searching, filtering, and sorting.
- **GET /api/products/:id**: Get a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

### Example Requests

1. **Create a new product:**

    ```javascript
    const axios = require('axios');

    axios.post('http://localhost:5000/api/products', {
      name: 'Wireless Headphones',
      image: 'https://example.com/images/wireless-headphones.jpg',
      description: 'High-quality wireless headphones with noise-cancellation.',
      price: 150,
      category: 'Electronics',
      brand: 'SoundMagic',
      ratings: 4.5,
      createdAt: '2024-08-01T10:00:00Z'
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    ```

2. **Get all products:**

    ```javascript
    const axios = require('axios');

    axios.get('http://localhost:5000/api/products')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    ```

3. **Get a product by ID:**

    ```javascript
    const axios = require('axios');

    const productId = '<product_id>';

    axios.get(`http://localhost:5000/api/products/${productId}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    ```

### Project Structure

```plaintext
shopsmart-backend/
│
├── controllers/        # Controller functions for handling requests
│   └── productController.js
│
├── models/             # Mongoose models for MongoDB collections
│   └── productModel.js
│
├── routes/             # Express routes for API endpoints
│   └── productRoutes.js
│
├── .env                # Environment variables
├── .gitignore          # Files to be ignored by Git
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
└── server.js           # Entry point for the application
```

## Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions, feel free to contact me at ashrafulsifat26@gmail.com.
