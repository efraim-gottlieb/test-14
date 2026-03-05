import express from "express";
import moviesRoutes from "./routes/moviesRoutes.js";

import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});