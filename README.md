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
