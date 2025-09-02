import path from "path";
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.js";

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/food-deliver", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("API working ");
});

app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
