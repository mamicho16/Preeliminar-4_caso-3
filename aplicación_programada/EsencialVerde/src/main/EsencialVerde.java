/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package main;

import common.Cliente;
import java.util.ArrayList;
import data.EsencialVerdeAccess;
import data.IDataConstants;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
/**
 *
 * @author Mauricio Fernández
 */
public class EsencialVerde implements IDataConstants{

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        ArrayList<Cliente> clientesBuscados = EsencialVerdeAccess.getInstance().getFilteredClients("re");

        
        Connection con = DriverManager.getConnection(CONN_STRING);
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("select * from terminos");
        
        if(rs == null){
            System.out.println("null");
        }
        
        while(rs.next()){
            int id = rs.getInt(1);
            String nombre = rs.getString(2);
            String desc = rs.getString(3);
            
            //System.out.println(id + " " + nombre + " " + desc);
                    
        }
        rs = st.executeQuery("select nombre from productor");
        
         while(rs.next()){
            System.out.println(rs.getString(1));
        }
        
        /*for(Cliente client : clientesBuscados) {
                System.out.println(client.getNombre()+" "+client.getApellido1()+" "+client.getApellido2());
        }*/
        
        /*pantallaInicial p = new pantallaInicial();
        p.setVisible(true);*/
        
        System.out.println(CONN_STRING);
    }
    
}
