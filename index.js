import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.set("puerto", process.env.PORT || 4000);

app.listen(app.get("puerto"), () => {
  console.log("puerto", app.get("puerto"));
});

app.use(cors());

app.use(morgan('dev'))

app.use(express.json())

app.use(express.urlencoded())

app.get("/", (req,res)=>{
    console.log("solic. get")
    res.send("respuesta del backend")
})
