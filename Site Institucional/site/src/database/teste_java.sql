DROP DATABASE dyoung;

Create database dyoung;
use dyoung;
CREATE TABLE endereco_posto (
idEndereco_posto INT PRIMARY KEY auto_increment,
rua VARCHAR(80),
numero INT,
localidade VARCHAR(80)
);

CREATE TABLE posto (
idPosto INT PRIMARY KEY auto_increment,
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
fk_posto INT, foreign key (fk_posto) REFERENCES posto(idPosto)
);

CREATE TABLE totem (
idTotem INT PRIMARY KEY AUTO_INCREMENT,
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto),
serie VARCHAR(45),
estado VARCHAR(45),
sistema_operacional VARCHAR(45)
);

CREATE TABLE dado_cpu(
id_dado_cpu INT PRIMARY KEY AUTO_INCREMENT,
uso_cpu DOUBLE,
data_hora_captura DATETIME,
status_coleta TINYINT,
fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

CREATE TABLE dado_disco (
id_dado_disco INT PRIMARY KEY AUTO_INCREMENT,
uso_disco DOUBLE,
data_hora_captura DATETIME,
status_coleta TINYINT,
fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

CREATE TABLE dado_ram (
id_dado_ram INT PRIMARY KEY AUTO_INCREMENT,
uso_ram DOUBLE,
data_hora_captura DATETIME,
status_coleta TINYINT,
fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);
CREATE TABLE temperatura_maquina (
idTemperatura INT PRIMARY KEY AUTO_INCREMENT,
uso_temperatura DOUBLE,
data_hora_captura DATETIME,
status_coleta TINYINT,
fk_totem INT, FOREIGN KEY (fk_totem) REFERENCES totem(idTotem),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

INSERT INTO endereco_posto VALUES
(null, 'Rua Haddock Lobo', 595, 'São Paulo');

INSERT INTO posto VALUES
(null, 'Gustavo', 1);

INSERT INTO cadastro_funcionario VALUES
(null, 'Gustavo', 'gustavo.carriel@sptech.school', '12345678900', 'ATIVO', '@Gustavo08', 'Responsavel de TI', 1);

SELECT * FROM cadastro_funcionario WHERE email = 'gustavo.carriel@sptech.school' AND senha = '@Gustavo08';
select * from endereco_posto;