import { Logger } from '../common'

const sql = require('mssql')

const sqlConfig = {
    user: "sa",
    password: "12345",
    database: "EsencialVerde",
    server: "localhost",
    pool: {
      max: 20,
      min: 5,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, 
      trustServerCertificate: true,
      requestTimeout: 180000 
    }
}

export class data_esencialNP {
    private log: Logger;

    public constructor()
    {
        this.log = new Logger();
    }


    public async getVentas(filter: Date) : Promise<any>
    {   
        const connection = await sql.connect(sqlConfig);
        try {
            const request = new sql.Request(connection);
            request.input('fecha', sql.Date, filter);
            const result = await request.execute('getVentas');
            return result.recordset;
        } catch (error) {
            console.log(error);
            throw error;
        }
        finally {
            await connection.close();
        }
    }

}