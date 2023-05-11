import { Logger } from '../common'

const sql = require('mssql')

const sqlConfig = {
    user: "sa",
    password: "12345",
    database: "EsencialVerde",
    server: "localhost",
    options: {
      encrypt: true, 
      trustServerCertificate: true 
    }
}

export class data_esencialNP {
    private log: Logger;

    public constructor()
    {
        this.log = new Logger();
        
        // via singleton, accediendo a un solo pool tengo una conexiona la base de datos
    }


    public getVentas(filter: number) : Promise<any>
    {
        return sql.connect(sqlConfig).then((pool:any) => {
            return pool.request()
                .input("MontoVenta", sql.decimal(18,3), filter)
                .execute("getVentas")
        });
    }

}