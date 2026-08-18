import express from 'express';

const app = express();
app.use(express.json());

const PORT = 8888;

app.listen(() => {
  console.log(`Server is running on port ${PORT}`);
});
