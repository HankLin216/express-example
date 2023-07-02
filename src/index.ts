import app from "./app";

const server = app.listen(5050, () => {
  console.log("Server start listening at 5050 port...");
});

// const exitHandler = () => {
//   if (server) {
//     server.close(() => {
//       console.log("Server closed");
//       process.exit(1);
//     });
//   } else {
//     process.exit(1);
//   }
// };

// const unexpectedErrorHandler = (error: any) => {
//   console.log(error);
//   exitHandler();
// };

// process.on("uncaughtException", unexpectedErrorHandler);
// process.on("unhandledRejection", unexpectedErrorHandler);

// process.on("SIGTERM", () => {
//   console.log("SIGTERM received");
//   if (server) {
//     server.close();
//   }
// });
