import express from "express";
import diaryRouter from "./routes/diaries";
const app = express();
app.use(express.json()); // Middleware que trasforma req.body a json

const PORT = 3000;

app.get("/ping", (req, res) => {
  console.log(
    "Something went wrong , the date is" + new Date().toLocaleDateString()
  );
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(
    "Server listening on port " +
      PORT +
      " fecha: " +
      new Date().toLocaleDateString()
  );
});

app.use("/api/diaries", diaryRouter);
