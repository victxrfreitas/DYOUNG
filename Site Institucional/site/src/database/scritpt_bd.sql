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
statusFuncionario Boolean,
senha VARCHAR(45),
cargo VARCHAR(45),
fk_posto INT, FOREIGN KEY (fk_posto) REFERENCES posto(idPosto)
);

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

select count(dc.uso_cpu) from dado_cpu dc;
select uso_ram from dado_ram;
select * from dado_cpu ORDER BY id_dado_cpu DESC ;
select * from dado_ram ORDER BY id_dado_ram DESC ;

SELECT count(*) FROM dado_cpu dc JOIN totem t on dc.fk_totem = t.idTotem JOIN dado_ram dr ON dr.fk_totem = t.idTotem;
select * from dado_ram;
SELECT uso_cpu 'usoCpu', temp_cpu 'tempCpu' from dado_cpu where fk_totem = 2;

SELECT uso_ram 'dadoRam'
        FROM cadastro_funcionario c 
        JOIN posto p on c.fk_posto = p.idPosto 
        JOIN dado_ram d ON p.idPosto = c.fk_posto;

select * from cadastro_funcionario;
select * from totem;
select * from posto;
select * from dado_cpu;
select * from dado_ram;
select * from dado_disco;
insert into dado_cpu(uso_cpu, temp_cpu, fk_totem) values (51, 20, 5);
insert into dado_ram(uso_ram, fk_totem) values (37, 1);
insert into dado_disco(uso_disco, fk_totem) values (49, 1);
DESC dado_ram;