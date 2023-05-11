import { Logger } from '../common'
import { data_esencialP } from '../repositories/data_esencialP'


export class EsencialControllerP {
    private static instance: EsencialControllerP;
    private log: Logger;

    private constructor()
    {
        this.log = new Logger();
        try
        {
        } catch (e)
        {
            this.log.error(e);
        }
    }

    public static getInstance() : EsencialControllerP
    {
        if (!this.instance)
        {
            this.instance = new EsencialControllerP();
        }
        return this.instance;
    }

    public getVentas(filter: number) : Promise<any> 
    {
        const esencialdata = new data_esencialP();
        return esencialdata.getVentas(filter);
    }
}