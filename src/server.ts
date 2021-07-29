import "./setup";
import app, { init } from "./app";

const port:number = Number(process.env.PORT)


init().then(() => {
  app.listen(port, () => {
    console.log('Server is listening on port 4000');
  });
});