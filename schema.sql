DROP DATABASE IF EXISTS ext_fam; 

CREATE DATABASE ext_fam; 

USE ext_fam; 

CREATE TABLE Fowose (
    id int AUTO_INCREMENT NOT NULL, 
    name varchar(255) NOT NULL, 
    dob DATE NOT NULL, 
    PRIMARY KEY (id)
); 

INSERT INTO Fowose (name, dob) VALUES ("Olakunle Fowose", '1956/06/15'); 
INSERT INTO Fowose (name, dob) VALUES ("Jumoke Fowose", '1964/03/28'); 
INSERT INTO Fowose (name, dob) VALUES ("Simeon Fowose", '1986/08/04'); 
INSERT INTO Fowose (name, dob) VALUES ("Folajimi Fowose", '1991/05/26'); 
INSERT INTO Fowose (name, dob) VALUES ("Mobolaji Fowose", '1992/10/15'); 
INSERT INTO Fowose (name, dob) VALUES ("Olufikayo Fowose", '1994/12/10'); 
INSERT INTO Fowose (name, dob) VALUES ("Andrew Fowose", '1997/03/17'); 





