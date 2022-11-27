package com.mycompany.dyoung.project;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author gutyc
 */
public class Conexao {
    private JdbcTemplate connection;

    public Conexao() {
        BasicDataSource dataSource = new BasicDataSource();

//        dataSource​.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

        dataSource​.setDriverClassName("com.mysql.cj.jdbc.Driver");

        dataSource​.setUrl("jdbc:mysql://localhost:3306/dyoung");

//        dataSource​.setUrl("jdbc:sqlserver://dyoung-bd.database.windows.net:1433;database=dyoung-bd;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;");

//        dataSource​.setUsername("admin-dyoung");
//
//        dataSource​.setPassword("#Gfgrupo6");
        
        dataSource​.setUsername("root");

        dataSource​.setPassword("@Gustavo08");






        
//        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");;
//
//        dataSource.setUrl("jdbc:sqlserver://dyoung-project.database.windows.net:1433;database=dyoung-project;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;");
//
//        dataSource.setUsername("admin-dyoung");
//
//        dataSource.setPassword("#Gfgrupo6");

//dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//
//        dataSource.setUrl("jdbc:sqlserver://animix.database.windows.net:1433;database=animix;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;");
//
//        dataSource.setUsername("admin-1adsb-grupo07");
//
//        dataSource.setPassword("#Gfgrupo7");

        this.connection = new JdbcTemplate(dataSource);

    }

    public JdbcTemplate getConnection() {
        return connection;
    }
}
