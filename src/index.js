import dotenv from "dotenv";
import {app} from "./app.js";

import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env"
});

const Port =process.env.PORT|| 3000;

connectDB().then().catch((error) => {
    console.error("Error connecting to database");
    console.error(error);
    process.exit(1);
});

app.listen(Port, () => {
    console.log(`Server started on http://localhost:${Port}`);
});

