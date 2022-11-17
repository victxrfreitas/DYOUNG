DROP DATABASE dyoung;
CREATE DATABASE dyoung;
USE dyoung;

CREATE TABLE endereco_posto (
idEndereco_posto INT PRIMARY KEY auto_increment,
rua VARCHAR(80),
numero INT,
localidade VARCHAR(80)
);

CREATE TABLE posto (
idPosto INT PRIMARY KEY auto_increment,
nomePosto VARCHAR(80),
responsavelTI VARCHAR(80),
fk_Endereco_posto INT, foreign key (fk_Endereco_posto) references endereco_posto(idEndereco_posto)
);

CREATE TABLE cadastro_funcionario (
idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
nomeFuncionario VARCHAR(80),
email VARCHAR(80),
cpf CHAR(11),
statusFuncionario VARCHAR(45),
senha VARCHAR(45),
cargo VARCHAR(45),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto));

CREATE TABLE totem (
idTotem INT PRIMARY KEY AUTO_INCREMENT,
serie VARCHAR(45),
dtInstalacao DATETIME DEFAULT CURRENT_TIMESTAMP,
statusTotem BOOLEAN,
sistema_operacional VARCHAR(45),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

CREATE TABLE dado_cpu(
id_dado_cpu INT PRIMARY KEY AUTO_INCREMENT,
uso_cpu DOUBLE,
temp_cpu DOUBLE,
data_hora_captura DATETIME DEFAULT CURRENT_TIMESTAMP,
status_coleta TINYINT,
fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

CREATE TABLE dado_disco (
id_dado_disco INT PRIMARY KEY AUTO_INCREMENT,
uso_disco DOUBLE,
data_hora_captura DATETIME DEFAULT CURRENT_TIMESTAMP,
status_coleta TINYINT,
fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

CREATE TABLE dado_ram (
id_dado_ram INT PRIMARY KEY AUTO_INCREMENT,
uso_ram DOUBLE,
data_hora_captura DATETIME DEFAULT CURRENT_TIMESTAMP,
status_coleta TINYINT,
fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

/*
INSERT INTO endereco_posto  VALUES
(null, 'Rua Santo André', 379, 'São Paulo'),
(null, 'Rua Haddock Lobo', 595, 'São Paulo'),
(null, 'Rua Jose', 555, 'São Paulo');
*/
/*
INSERT INTO posto VALUES
(null, 'Poupa Tempo São Caetano do Sul','Gustavo Carriel', 1),
(null, 'Poupa Tempo Santo André','Maciel Victor', 2),
(null, 'Poupa Tempo Lapa','Henrique Yuzo', 3);
*/

-- insert into cadastro_funcionario values(10, 'Yuzo', 'yuzo@email.com', null, 'ativo', 123, null, null);
