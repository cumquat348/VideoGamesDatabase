const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cookieParser = require("cookie-parser")
const db = require('./db/database')
const route = require('./routes/routes')
db.connect()
app.use(express.json())
app.use(cookieParser())

// app.get("/", route.default1);
app.put("/addGame", route.verify, route.addGame);
app.put("/modifyGame", route.verify, route.modifyGame);
app.delete("/deleteGame", route.verify, route.deleteGame);

app.put("/modifyUser", route.verify, route.modifyUser);
app.delete("/deleteUser", route.verify, route.deleteUser);

app.post("/library", route.verify, route.library);

app.get("/search", route.search);

app.get("/game", route.game);
app.put("/addReview", route.verify, route.addReview);
app.put("/modifyReview", route.verify, route.modifyReview);
app.delete("/deleteReview", route.verify, route.deleteReview);

app.post("/signin", route.signin);
app.post("/signup", route.signup);
app.post("/signout", route.signout );

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

