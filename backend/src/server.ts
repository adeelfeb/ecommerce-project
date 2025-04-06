import { app, connectDB } from './app.js';
import productRoutes from './routes/productRoutes.js';

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/products', productRoutes);


// Start server
const startServer = async () => {
//   await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();