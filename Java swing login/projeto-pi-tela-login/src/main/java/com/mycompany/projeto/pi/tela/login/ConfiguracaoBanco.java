package com.mycompany.projeto.pi.tela.login;

import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author gutyc
 */
public class ConfiguracaoBanco {
    public static void main(String[] args) {
        Conexao con = new Conexao();
        JdbcTemplate banco = con.getConnection();
        
        // Se as tabelas existirem serão excluidas
        banco.execute("DROP TABLE endereco_posto IF EXISTS;");
        banco.execute("DROP TABLE posto IF EXISTS;");
        banco.execute("DROP TABLE cadastro_funcionario IF EXISTS;");
        banco.execute("DROP TABLE totem IF EXISTS;");
        banco.execute("DROP TABLE dado_cpu IF EXISTS;");
        banco.execute("DROP TABLE dado_disco IF EXISTS;");
        banco.execute("DROP TABLE dado_ram IF EXISTS;");
        

        //Criando as tabelas da nossa reagra de negócio
        banco.execute("CREATE TABLE endereco_posto (\n" +
                        "idEndereco_posto INT PRIMARY KEY auto_increment,\n" +
                        "rua VARCHAR(80),\n" +
                        "numero INT,\n" +
                        "localidade VARCHAR(80)\n" +
                        ");");
        
        banco.execute("CREATE TABLE posto (\n" +
                        "idPosto INT PRIMARY KEY auto_increment,\n" +
                        "responsavelTI VARCHAR(80),\n" +
                        "fk_Endereco_posto INT, foreign key (fk_Endereco_posto) references endereco_posto(idEndereco_posto)\n" +
                        ");");
        
        banco.execute("CREATE TABLE cadastro_funcionario (\n" +
                        "idFuncionario INT PRIMARY KEY AUTO_INCREMENT,\n" +
                        "nomeFuncionario VARCHAR(80),\n" +
                        "email VARCHAR(80),\n" +
                        "cpf CHAR(11),\n" +
                        "statusFuncionario VARCHAR(45),\n" +
                        "senha VARCHAR(45),\n" +
                        "cargo VARCHAR(45),\n" +
                        "fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto));");
        
        banco.execute("CREATE TABLE totem (\n" +
                        "idTotem INT PRIMARY KEY AUTO_INCREMENT,\n" +
                        "fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto),\n" +
                        "serie VARCHAR(45),\n" +
                        "estado VARCHAR(45),\n" +
                        "sistema_operacional VARCHAR(45)\n" +
                        ");");
        
        banco.execute("CREATE TABLE dado_cpu(\n" +
                        "id_dado_cpu INT PRIMARY KEY AUTO_INCREMENT,\n" +
                        "uso_cpu DOUBLE,\n" +
                        "data_hora_captura DATETIME,\n" +
                        "status_coleta TINYINT,\n" +
                        "fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),\n" +
                        "fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)\n" +
                        ");");
        
        banco.execute("CREATE TABLE dado_disco (\n" +
                        "id_dado_disco INT PRIMARY KEY AUTO_INCREMENT,\n" +
                        "uso_disco DOUBLE,\n" +
                        "data_hora_captura DATETIME,\n" +
                        "status_coleta TINYINT,\n" +
                        "fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),\n" +
                        "fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)\n" +
                        ");");
        
        banco.execute("CREATE TABLE dado_ram (\n" +
                        "id_dado_ram INT PRIMARY KEY AUTO_INCREMENT,\n" +
                        "uso_ram DOUBLE,\n" +
                        "data_hora_captura DATETIME,\n" +
                        "status_coleta TINYINT,\n" +
                        "fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),\n" +
                        "fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)\n" +
                        ");");

        //Inserindo dados no banco de forma chapada no código
        banco.update("INSERT INTO endereco_posto VALUES\n" +
                       "(null, 'Rua Haddock Lobo', 595, 'São Paulo');");
         
        banco.update("INSERT INTO posto VALUES\n" +
                       "(null, 'Gustavo', 1);");
//         
        banco.update("INSERT INTO cadastro_funcionario VALUES\n" +
                       "(null, 'Gustavo', 'gustavo.carriel@sptech.school', "
                       + "'12345678900', 'ATIVO', '@Gustavo08', "
                       + "'Responsavel de TI', 1);");
    }
}
