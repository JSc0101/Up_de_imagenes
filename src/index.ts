import app from "./app";
import startConnection from "./database";

(() => {
  startConnection();
  app.listen(app.get("port"));
  console.log(`On port ${app.get("port")}`);
})();
