CREATE TABLE `tbl_empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `cedula` varchar(20) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `tbl_empleados` (`id`, `nombre`, `edad`, `cedula`, `sexo`, `telefono`, `cargo`, `avatar`)
VALUES
	(3,'Any somosa',23,'412421','Femenino','432432432','Asistente','a26b9df685.png'),
	(4,'Urian',31,'323232','Masculino','432432432','Asistente','f752ce2c9b.png'),
	(6,'Abelado P',39,'331232','Masculino','23213213','Desarrollador','b70032d832.png'),
	(7,'Camilo',30,'444433','Masculino','333434','Contador','daea327347.jpg'),
	(8,'Fabio',49,'434343','Masculino','4444443','Secretario','dd12c93c0a.png'),
	(9,'Brenda Cataleya',18,'111212','Masculino','5565656','Desarrollador Web','6a712f30fc.png');