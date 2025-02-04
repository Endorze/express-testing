import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const PORT = process.env.PORT || 8000;

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Rouets;
app.use("/api/posts", posts);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))