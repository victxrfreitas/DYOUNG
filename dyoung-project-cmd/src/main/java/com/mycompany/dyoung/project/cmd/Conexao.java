package com.mycompany.dyoung.project.cmd;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author GJ541GR
 */
public class Conexao {
    private JdbcTemplate connection;

    public Conexao() {
        BasicDataSource dataSource = new BasicDataSource();


//        dataSource​.setDriverClassName("com.mysql.cj.jdbc.Driver");
//
//        dataSource​.setUrl("jdbc:mysql://localhost:3306/dyoung");
//        
//        dataSource​.setUsername("root");
//
//        dataSource​.setPassword("@Gustavo08");

        
        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//
        dataSource.setUrl("jdbc:sqlserver://dyoung-project.database.windows.net:1433;database=dyoung-project;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;");
//
        dataSource.setUsername("admin-dyoung");
//
        dataSource.setPassword("#Gfgrupo6");

        this.connection = new JdbcTemplate(dataSource);

    }

    public JdbcTemplate getConnection() {
        return connection;
    }
}
