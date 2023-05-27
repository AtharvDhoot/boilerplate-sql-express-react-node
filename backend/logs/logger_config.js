const fs = require("fs");

const morgan = require("morgan");

const logger = morgan("combined", {
  stream: fs.createWriteStream(`${__dirname}/default.log`, { flags: "a" }),
});

const devLogger = morgan("dev");

function errorLogger(err, req, res, next) {
  fs.appendFile(
    `${__dirname}/errors.log`,
    `[${new Date().toISOString()}]: ${err.stack} \n\n`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  res.status(500).send("Server Error");
}

exports.logger = {
  defaultLogger: logger,
  errorLogger: errorLogger,
  devLogger: devLogger,
};