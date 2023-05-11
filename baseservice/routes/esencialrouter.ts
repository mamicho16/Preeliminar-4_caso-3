import * as express from 'express';
import { Logger } from '../common'
import { EsencialControllerP } from '../controllers'
import { EsencialControllerNP } from '../controllers'

const app = express();
const log = new Logger();

app.get("/getVentas", (req, res,next) => {
    EsencialControllerP.getInstance().getVentas(req.body.filter)
    .then((data:any)=>{
        res.json(data);
    })
    .catch((err:any)=>{
        log.error(err);
        return "{msg: \"error\"}";
    });

});

app.get("/getVentas", (req, res,next) => {
    EsencialControllerNP.getInstance().getVentas(req.body.filter)
    .then((data:any)=>{
        res.json(data);
    })
    .catch((err:any)=>{
        log.error(err);
        return "{msg: \"error\"}";
    });

});

export { app as esencialrouter };