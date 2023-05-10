import { Logger } from '../common'
import { data_esencial } from '../repositories/data_esencial'


export class FeriaController {
    private static instance: FeriaController;
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

    public static getInstance() : FeriaController
    {
        if (!this.instance)
        {
            this.instance = new FeriaController();
        }
        return this.instance;
    }

    /*public getFilteredClients(filter: string) : Promise<any> 
    {
        const feriadata = new data_esencial();
        return feriadata.getClientsByFilter(filter);
    }*/
}