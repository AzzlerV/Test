// server.js (relevant parts)
require('dotenv').config(); // Make sure you have dotenv installed and this line at the top

const app = express();
const PORT = process.env.PORT || 3000; // Render will set process.env.PORT to 10000

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI; // Render will set this environment variable
if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined!');
    process.exit(1);
}

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// ... rest of your Express app logic ...

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
