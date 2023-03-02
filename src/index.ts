import app from "./app";

(() => {
  app.listen(app.get("port"));
  console.log(`On port ${app.get("port")}`);
})();
