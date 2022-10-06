package com.mycompany.projeto.pi.tela.login;

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
        dataSource​.setDriverClassName("org.h2.Driver");
        dataSource​.setUrl("jdbc:h2:file:./banco_teste");
        dataSource​.setUsername("sa");
        dataSource​.setPassword("");  

        this.connection = new JdbcTemplate(dataSource);
    }

    public JdbcTemplate getConnection() {
        return connection;
    }
    
}
