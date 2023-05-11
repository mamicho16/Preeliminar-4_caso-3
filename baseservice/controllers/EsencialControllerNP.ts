import { Logger } from '../common'
import { data_esencialNP } from '../repositories/data_esencialNP'


export class EsencialControllerNP {
    private static instance: EsencialControllerNP;
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

    public static getInstance() : EsencialControllerNP
    {
        if (!this.instance)
        {
            this.instance = new EsencialControllerNP();
        }
        return this.instance;
    }

    public getVentas(filter: number) : Promise<any> 
    {
        const esencialdata = new data_esencialNP();
        return esencialdata.getVentas(filter);
    }
}