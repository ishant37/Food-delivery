import express from "express";
import cors from "cors";

const app = express();
const port=4000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API working ");
});


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
