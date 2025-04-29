# E-Commerce Website - MERN Stack with TailwindCSS & TypeScript

## Project Overview
This is a self-learning project to build a full-stack e-commerce website using the MERN stack (MongoDB, Express.js, React, Node.js) with TailwindCSS for styling and TypeScript for type safety.

## Features

### Frontend (React + TypeScript + TailwindCSS)
- User authentication (login/register)
- Product listing with filters and pagination
- Product details page
- Shopping cart functionality
- Checkout process
- Order history
- Responsive design for all devices
- Admin dashboard for product management

### Backend (Node.js + Express + TypeScript)
- RESTful API endpoints
- JWT authentication
- MongoDB data models
- Order processing logic
- Payment integration (Stripe/PayPal)
- Image upload functionality

## Technologies Used

### Frontend
- React 18
- TypeScript
- TailwindCSS 3
- React Router 6
- Redux Toolkit (for state management)
- React Hook Form (for forms)
- Axios (for API calls)
- React Icons (for icons)

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt (for password hashing)
- Multer (for file uploads)
- Dotenv (for environment variables)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-mern.git
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd ecommerce-mern
   npm install
   cd frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string and JWT secret:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. Run the application:
   - For development (frontend and backend with hot-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm run build
     npm start
     ```

## Project Structure

```
ecommerce-mern/
├── backend/               # Backend source code
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # MongoDB models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   ├── utils/        # Utility functions
│   │   └── app.ts        # Express app setup
├── frontend/             # Frontend source code
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux store
│   │   ├── types/        # TypeScript types
│   │   ├── utils/        # Utility functions
│   │   └── App.tsx       # Main App component
├── .env.example          # Environment variables example
├── package.json          # Backend dependencies
└── README.md             # Project documentation
```

## Available Scripts

### Backend
- `npm run dev`: Start backend server with nodemon (development)
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Start production server

### Frontend
- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run lint`: Run ESLint

## Learning Resources
- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Contributing
This is a personal learning project, but feedback and suggestions are welcome!

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For any questions, please reach out to [at4563323@gmail.com](mailtoat4563323@gmail.com)