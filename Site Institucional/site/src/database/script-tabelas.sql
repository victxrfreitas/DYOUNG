-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE dyoung;

USE dyoung;

CREATE TABLE posto (
	idPosto INT PRIMARY KEY AUTO_INCREMENT,
    responsavelTi VARCHAR(80),
    qtdTotem INT
);


CREATE TABLE cadastro_funcionario (
	idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf CHAR(11),
    cargo VARCHAR(50),
    email VARCHAR(80),
    senha VARCHAR(50),
    statusCadastro CHAR(10),
    fk_posto INT,
    FOREIGN KEY (fk_posto) REFERENCES posto (idposto)
);


CREATE TABLE endereco_posto (
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(90),
    numero INT,
    localidade VARCHAR(90),
    fk_posto INT,
    FOREIGN KEY (fk_posto) REFERENCES posto (idposto)
);

CREATE TABLE totem (
	idTotem INT AUTO_INCREMENT,
    fk_posto INT,
    FOREIGN KEY (fk_posto) REFERENCES posto (idposto),
    PRIMARY KEY (idtotem, fk_posto),
    numSerie INT,
    estado VARCHAR(40),
    sistema_operacional VARCHAR(40)    
);

CREATE TABLE dados_totem (
	idDado INT,
    fk_totem INT,
    fk_posto INT,
    FOREIGN KEY (fk_totem) REFERENCES totem (idTotem),
    FOREIGN KEY (fk_posto) REFERENCES posto (idposto),
    PRIMARY KEY (iddado, fk_totem, fk_posto),
    cpu DOUBLE,
    ram DOUBLE,
    disco DOUBLE,
    dtHora DATETIME
);


/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
