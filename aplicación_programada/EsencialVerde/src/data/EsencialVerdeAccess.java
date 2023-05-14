/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package data;

import java.util.ArrayList;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import common.Cliente;
/**
 *
 * @author Mauricio Fernández
 */
public class EsencialVerdeAccess {
    private static EsencialVerdeAccess instance;
    private Connection conexion; 

    private EsencialVerdeAccess() {

    }
    
    public synchronized static EsencialVerdeAccess getInstance() {
        if (instance==null) {
                instance = new EsencialVerdeAccess();
        }
        return instance;
    }
    
    public ArrayList<Cliente> getFilteredClients(String pFilter){
        ArrayList<Cliente> result = new ArrayList<Cliente>();
        
        return result;
    }
}
