const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { initialiseDatabaseConnection } = require("./db/init");
const { logger } = require("./logs/logger_config");

const app = express();
const port = process.env.PORT || 2000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(logger.defaultLogger);
if (process.env.NODE_ENV !== "production") app.use(logger.devLogger);

app.disable("x-powered-by");

app.use(logger.errorLogger);

async function main() {
  await initialiseDatabaseConnection();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`NODE_ENV is: ${process.env.NODE_ENV}`);
  });
}

main();
