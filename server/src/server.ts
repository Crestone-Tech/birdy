import express, { Request, Response } from "express";
import sequelize from "./config/connection";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

sequelize.sync({ force: true }).then(() =>
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
);
