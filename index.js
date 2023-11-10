//IMPORTS
import express from "express";
import { readFileSync } from "fs";
import { createServer } from "https";
import { router as movieRouter } from "./movie/index.js";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";
import spdy from "spdy";

const app = express();

//LOGGING INCOMING REQUESTS
const accessLogStream = createWriteStream("access.log", { flags: "a" });
app.use(
  morgan("common", {
    immediate: true,
    stream: accessLogStream,
  })
);

//OPTIONS FOR HTTPS SERVER
const options = {
  key: readFileSync("Path"),
  cert: readFileSync("Path"),
};
//FOR SENDING STATIC FILE
app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));

//FOR LOGGING REQUESTS
app.use(morgan("common", { immediate: true }));

//FOR HANDLING HTML FORM INPUT
app.use(express.urlencoded({ extended: false }));

//ROUTER SETUP
app.use("/movie", movieRouter);

//REDIRECTING TO BASE URL
app.get("/", (request, response) => {
  response.redirect("/movie");
});

//FOR HTTPS
// createServer(options, app).listen(8080, () => {
//   console.log(`listening on https://localhost:8080`);
// });

//FOR HTTP2
spdy.createServer(options, app).listen(8080, () => {
  console.log(`listening on https://localhost:8080`);
});
