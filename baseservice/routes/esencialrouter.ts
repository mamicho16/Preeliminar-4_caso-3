import * as express from 'express';
import { Logger } from '../common'
import { EsencialControllerP } from '../controllers'
import { EsencialControllerNP } from '../controllers'

const app = express();
const log = new Logger();

app.post("/getVentasP", (req, res) => {
    EsencialControllerP.getInstance().getVentas(req.body.filter)
    .then((data:any)=>{
        console.log(data);
        res.json(data);
    })
    .catch((err:any)=>{
        log.error(err);
        return "{msg: \"error\"}";
    });

});

app.post("/getVentasNP", (req, res) => {
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