import * as express from 'express';
import { Logger } from '../common'
import { esencialController } from '../controllers'

const app = express();
const log = new Logger();

/*app.post("/getfilteredclients", (req, res,next) => {
    esencialController.getInstance().getFilteredClients(req.body.filter)
    .then((data:any)=>{
        res.json(data);
    })
    .catch((err:any)=>{
        log.error(err);
        return "{msg: \"error\"}";
    });

});*/

export { app as esencialrouter };