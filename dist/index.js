"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
// rest of the code remains same
const app = express_1.default();
const PORT = process.env.PORT || 8000;
// middlewares
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(body_parser_1.default.json());
// Key
const connect_URL = "mongodb+srv://admin:EJYjPiYpyybiNN7F@cluster0.rhvvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose_1.default.connect(connect_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
mongoose_1.default.connection.once("open", () => {
    console.log("connected");
});
app.get("/", (req, res) => res.send("Typescript"));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map