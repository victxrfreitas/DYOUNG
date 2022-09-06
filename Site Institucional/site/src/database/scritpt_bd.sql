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













