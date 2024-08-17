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
