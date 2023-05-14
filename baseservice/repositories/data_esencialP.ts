import { Logger } from '../common'

const sql = require('mssql')

const sqlConfig = {
    user: "sa",
    password: "12345",
    database: "EsencialVerde",
    server: "localhost",
    pool: {
      max: 5,
      min: 5,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, 
      trustServerCertificate: true 
    }
}

export class data_esencialP {
    private log: Logger;

    public constructor()
    {
        this.log = new Logger();
        
        // via singleton, accediendo a un solo pool tengo una conexiona la base de datos
    }


    public getVentas(filter: number) : Promise<any>
    {
        console.log(filter);
        return sql.connect(sqlConfig).then((pool:any) => {
            return pool.request()
                .input("montoVenta", sql.Decimal(18,3), filter)
                .execute("getVentas")
        });
    }

}