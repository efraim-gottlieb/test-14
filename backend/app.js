import express from "express";
import terrorRoutes from "./routes/terrorRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/terrorists", terrorRoutes);
app.use("/test", testRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});