import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routesMdw from "./middlewares/routes.mdw";

// rest of the code remains same
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Key
const connect_URL =
  "mongodb+srv://admin:EJYjPiYpyybiNN7F@cluster0.rhvvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connect_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => {
  console.log("connected");
});

app.get("/", (req, res) => res.send("Typescript"));

routesMdw(app);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
