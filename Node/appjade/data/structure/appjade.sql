# Host: 127.0.0.1  (Version: 5.6.17)
# Date: 2014-09-20 18:28:45
# Generator: MySQL-Front 5.3  (Build 4.156)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "hotel_caracteristica"
#

DROP TABLE IF EXISTS `hotel_caracteristica`;
CREATE TABLE `hotel_caracteristica` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "hotel_ranking"
#

DROP TABLE IF EXISTS `hotel_ranking`;
CREATE TABLE `hotel_ranking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `peso` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "hotel"
#

DROP TABLE IF EXISTS `hotel`;
CREATE TABLE `hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `direccion` text,
  `ciudad` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  `hotel_ranking_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_hotel_hotel_ranking_idx` (`hotel_ranking_id`),
  CONSTRAINT `fk_hotel_hotel_ranking` FOREIGN KEY (`hotel_ranking_id`) REFERENCES `hotel_ranking` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "hotel_has_hotel_caracteristica"
#

DROP TABLE IF EXISTS `hotel_has_hotel_caracteristica`;
CREATE TABLE `hotel_has_hotel_caracteristica` (
  `hotel_id` int(11) NOT NULL,
  `hotel_caracteristica_id` int(11) NOT NULL,
  PRIMARY KEY (`hotel_id`,`hotel_caracteristica_id`),
  KEY `fk_hotel_has_hotel_caracteristica_hotel_caracteristica1_idx` (`hotel_caracteristica_id`),
  KEY `fk_hotel_has_hotel_caracteristica_hotel1_idx` (`hotel_id`),
  CONSTRAINT `fk_hotel_has_hotel_caracteristica_hotel1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_hotel_has_hotel_caracteristica_hotel_caracteristica1` FOREIGN KEY (`hotel_caracteristica_id`) REFERENCES `hotel_caracteristica` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
