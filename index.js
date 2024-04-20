const express = require("express");

const {connectMongoDb} = require("./connection");
const {logReqRes} = require("./middlewares/index");


const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//conctions
connectMongoDb("mongodb://127.0.0.1:27017/test-app")
.then(()=> console.log("MongoDB Connect")
);

app.use(express.urlencoded({ extended: true }));

app.use(logReqRes("log.txt"));

app.use("/api/user", userRouter);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
