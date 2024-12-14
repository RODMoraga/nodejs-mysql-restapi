DROP DATABASE IF EXISTS `companydb`;
CREATE DATABASE IF NOT EXISTS `companydb`;
DROP TABLE IF EXISTS `companydb`.`employees`;
CREATE TABLE IF NOT EXISTS `companydb`.`employees`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(35) NOT NULL,
    `last_name` VARCHAR(35) NOT NULL,
    `city_name` VARCHAR(45),
    `street` VARCHAR(45),
    `salary` INT,
    `create_at` DATE
);
DESCRIBE `companydb`.`employees`;
INSERT INTO `companydb`.`employees` VALUES
(1, 'Rodrigo Antonio', 'Moraga Garrido', 'Santiago', 'Miguel León Prado # 524', 2000000, CURDATE()),
(2, 'Solange Patricia', 'Walker Alarcon', 'Santiago', 'Miguel León Prado # 524', 1000000, CURDATE()),
(3, 'Renata Graciela', 'Moraga Walker', 'Santiago', 'Miguel León Prado # 524', 0, CURDATE()),
(4, 'Florencia Amelia', 'Moraga Walker', 'Santiago', 'Miguel León Prado # 524', 0, CURDATE()),
(5, 'Manuel Raúl', 'Moraga Martínez', 'Curico', 'Av. El Trebol # 652', 650000, CURDATE()),
(6, 'Bernarda Del Carmen', 'Garrido Soto', 'Curico', 'El Trebol # 652', 230000, CURDATE()),
(7, 'Lorena Bernardita', 'Garrido Garrido', 'Curico', 'Av. Porvenir # 002', 355000, CURDATE()),
(8, 'Juan Manuel', 'Morales Campos', 'Curico', 'Rio Claro # 986', 1200000, CURDATE()),
(9, 'Omar Belarmino', 'Rebolledo', 'Santiago', 'Av. Santa Rosa', 1100000, CURDATE()),
(10, 'XXXXXXXXXXXXXX', 'XXXXXXX', 'Santiago', 'XXXXXXXXXXXXXXXXXX', 1000000, CURDATE());
SELECT * FROM `companydb`.`employees`;

