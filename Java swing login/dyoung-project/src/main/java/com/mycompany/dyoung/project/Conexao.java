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

        dataSource​.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

        dataSource​.setUrl("jdbc:sqlserver://dyoung-bd.database.windows.net/dyoung-bd");

        dataSource​.setUsername("admin-dyoung");

        dataSource​.setPassword("#Gfgrupo6");

        this.connection = new JdbcTemplate(dataSource);

    }

    public JdbcTemplate getConnection() {
        return connection;
    }
}
