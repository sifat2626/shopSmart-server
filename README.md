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
- **Firebase**: For authentication using Google and Email/Password.

## Project Setup

### Prerequisites

Before you start, ensure you have the following installed on your local development environment: **Node.js** (version 14.x or later), **npm** (Node Package Manager) or **Yarn**, **MongoDB** (either installed locally or using a cloud service like MongoDB Atlas)

### Installation

1. **Clone the Repository** Clone the ShopSmart backend repository to your local machine: `git clone <repository-url>` and `cd shopsmart-backend`

2. **Install Dependencies** Install the necessary dependencies using npm or yarn: `npm install` or `yarn install`

3. **Environment Variables** Create a `.env` file in the root directory of the project and add the following environment variables: `PORT=5000`, `MONGODB_URI=<your-mongodb-connection-string>`, `FIREBASE_API_KEY=<your-firebase-api-key>`, `FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>`, `FIREBASE_PROJECT_ID=<your-firebase-project-id>`, `FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>`, `FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>`, `FIREBASE_APP_ID=<your-firebase-app-id>`

4. **Run the Server** Start the server in development mode using the following command: `npm run dev`. The server will start on `http://localhost:5000` by default.
