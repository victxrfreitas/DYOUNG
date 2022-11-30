DROP DATABASE dyoung;
CREATE DATABASE dyoung;
USE dyoung;

CREATE TABLE endereco_posto (
idEndereco_posto INT PRIMARY KEY auto_increment,
rua VARCHAR(80),
numero INT
);
INSERT INTO endereco_posto(rua, numero) VALUES
('Rua do Curtume', null),
('Rua Giovanni Battista Pirelli', 155),
('Praça do Carmo', null),
('R. Amador Bueno', 229),
('Av. do Contorno', 60);

CREATE TABLE posto (
idPosto INT PRIMARY KEY auto_increment,
nomePosto VARCHAR(80),
fk_Endereco_posto INT, foreign key (fk_Endereco_posto) references endereco_posto(idEndereco_posto)
);
INSERT INTO posto(nomePosto, fk_Endereco_posto)VALUES
('Lapa', 1),
('Santo André', 2),
('Sé', 3),
('Santo Amaro', 4),
('Itaquera', 5);

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



-- SELECT id_dado_cpu 'Id', uso_cpu 'UsoCpu', temp_cpu 'TempCpu', concat(left(DATE_FORMAT(data_hora_captura, "%d/%m/%Y | %H:%i:%s"),10)," ",right(DATE_FORMAT(data_hora_captura, "%d/%m/%Y | %H:%i:%s"),8)) 'DtHrCaptura' FROM dado_cpu;

-- SELECT concat(left(DATE_FORMAT(data_hora_captura, "%d/%m/%Y | %H:%i:%s"),10)," ",right(DATE_FORMAT(data_hora_captura, "%d/%m/%Y | %H:%i:%s"),8)) 'DtHrCaptura' FROM dado_cpu;
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

-- INSERT INTO posto VALUES
-- (null, 'Poupa Tempo São Caetano do Sul','Gustavo Carriel', 1),
-- (null, 'Poupa Tempo Santo André','Maciel Victor', 2),
-- (null, 'Poupa Tempo Lapa','Henrique Yuzo', 3);


-- insert into cadastro_funcionario values(10, 'Yuzo', 'yuzo@email.com', null, 'ativo', 123, null, null);

SELECT * FROM cadastro_funcionario;
SELECT * FROM posto;
SELECT * FROM totem;
SELECT * FROM dado_cpu;
SELECT * FROM dado_ram;
SELECT * FROM dado_disco;
update dado_disco set fk_totem = 1 where id_dado_disco in (7,8,9,10);
SELECT uso_cpu, temp_cpu FROM cadastro_funcionario c JOIN posto p on c.fk_posto = p.idPosto JOIN dado_cpu d ON p.idPosto = c.fk_posto;
SELECT uso_ram FROM cadastro_funcionario c JOIN posto p on c.fk_posto = p.idPosto JOIN dado_ram d ON p.idPosto = c.fk_posto;
SELECT uso_disco FROM cadastro_funcionario c JOIN posto p on c.fk_posto = p.idPosto JOIN dado_disco d ON p.idPosto = c.fk_posto;

