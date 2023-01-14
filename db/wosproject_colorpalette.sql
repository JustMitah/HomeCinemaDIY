-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: wosproject
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `colorpalette`
--

DROP TABLE IF EXISTS `colorpalette`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colorpalette` (
  `Palette_id` int NOT NULL AUTO_INCREMENT,
  `Palette_name` varchar(255) NOT NULL,
  `Palette1` char(255) NOT NULL,
  `Palette2` char(255) NOT NULL,
  `Palette3` char(255) NOT NULL,
  PRIMARY KEY (`Palette_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colorpalette`
--

LOCK TABLES `colorpalette` WRITE;
/*!40000 ALTER TABLE `colorpalette` DISABLE KEYS */;
INSERT INTO `colorpalette` VALUES (1,'Horror','rgb(199,67,67),rgb(146,50,60),rgb(81,80,118),rgb(57,53,79),rgb(174,169,204)','rgb(154,13,20),rgb(244,132,138),rgb(4,88,99),rgb(86,157,165),rgb(49,84,84)','rgb(13,41,12),rgb(62,14,14),rgb(2,0,0),rgb(221,36,36),rgb(77,0,0)'),(2,'Comedies','rgb(79,64,85),rgb(242,124,124),rgb(255,188,158),rgb(255,234,199),rgb(67,101,91)','rgb(120,38,100),rgb(67,18,84),rgb(108,159,87),rgb(124,22,73),rgb(195,64,93)','rgb(123,167,109),rgb(86,144,133),rgb(247,238,109),rgb(234,184,110),rgb(250,243,234)'),(3,'Dramas','rgb(237,7,7),rgb(238,130,130),rgb(132,4,4),rgb(124,60,60),rgb(36,20,20)','rgb(197,0,0),rgb(170,221,236),rgb(88,89,167),rgb(255,206,0),rgb(219,93,24)','rgb(163,63,64),rgb(172,82,83),rgb(181,101,102),rgb(191,121,121),rgb(200,140,140)'),(4,'Music','rgb(76,101,178),rgb(162,175,215),rgb(12,16,28),rgb(108,140,128),rgb(169,209,188)','rgb(190,91,51),rgb(246,198,111),rgb(104,63,35),rgb(154,123,101),rgb(214,185,166)','rgb(229,87,97),rgb(242,190,164),rgb(168,44,46),rgb(116,108,108),rgb(212,188,188)'),(5,'Sci-fi & Fantasy','rgb(0,36,57),rgb(0,80,102),rgb(78,121,136),rgb(120,204,226),rgb(228,239,240)','rgb(27,162,170),rgb(196,172,131),rgb(11,62,117),rgb(169,110,83),rgb(143,159,175)','rgb(60,229,202),rgb(97,220,197),rgb(39,103,98),rgb(60,140,116),rgb(27,125,107)'),(6,'Anime','rgb(41,138,205),rgb(252,203,244),rgb(19,54,108),rgb(97,173,152),rgb(210,176,155)','rgb(174,67,88),rgb(162,200,236),rgb(12,33,39),rgb(92,131,165),rgb(212,187,163)','rgb(251,170,162),rgb(255,188,179),rgb(251,239,227),rgb(255,221,104),rgb(255,203,59)'),(7,'Action & Adventure','rgb(92,44,221),rgb(159,135,224),rgb(44,18,114),rgb(130,112,173),rgb(172,196,198)','rgb(200,217,235),rgb(152,180,209),rgb(116,123,144),rgb(89,50,51),rgb(43,31,28)','rgb(200,217,235),rgb(152,180,209),rgb(116,123,144),rgb(89,50,51),rgb(43,31,28)'),(8,'Children & Family','rgb(252,195,52),rgb(252,228,106),rgb(4,92,116),rgb(108,158,92),rgb(180,204,176)','rgb(36,55,99),rgb(255,110,49),rgb(255,235,183),rgb(173,142,112),rgb(248,249,136)','rgb(232,243,214),rgb(252,249,190),rgb(255,220,169),rgb(250,171,120),rgb(255,88,88)'),(9,'Classic','rgb(162,65,68),rgb(102,29,30),rgb(4,92,116),rgb(100,140,155),rgb(174,206,216)','rgb(38,38,38),rgb(61,61,61),rgb(79,79,79),rgb(127,127,127),rgb(57,57,57)','rgb(63,164,167),rgb(110,92,87),rgb(215,188,143),rgb(246,233,217),rgb(108,199,186)'),(10,'Documentaries','rgb(81,35,15),rgb(114,40,0),rgb(137,43,26),rgb(126,7,7),rgb(90,18,18)','rgb(204,83,61),rgb(180,220,217),rgb(104,39,27),rgb(108,165,164),rgb(147,204,199)','rgb(12,141,208),rgb(132,204,236),rgb(60,116,148),rgb(101,160,171),rgb(204,180,148)'),(11,'Romantic','rgb(46,190,180),rgb(251,166,59),rgb(240,85,88),rgb(242,117,122),rgb(233,96,108)','rgb(205,163,79),rgb(196,20,108),rgb(255,195,160),rgb(255,251,215),rgb(182,252,213)','rgb(252,189,8),rgb(252,213,95),rgb(214,8,65),rgb(107,107,107),rgb(219,213,213)'),(12,'Sports','rgb(71,88,214),rgb(32,28,28),rgb(234,58,58),rgb(238,237,237),rgb(225,129,31)','rgb(181,255,0),rgb(60,70,79),rgb(117,171,172),rgb(140,244,255),rgb(237,237,237)','rgb(0,0,0),rgb(252,177,49),rgb(244,130,33),rgb(191,46,27),rgb(189,57,8)'),(13,'Thrillers','rgb(212,18,18),rgb(31,62,91),rgb(56,52,52),rgb(97,93,93),rgb(198,193,193)','rgb(173,6,16),rgb(11,1,0),rgb(174,151,106),rgb(108,75,21),rgb(19,19,19)','rgb(175,41,47),rgb(229,147,151),rgb(20,68,84),rgb(99,148,151),rgb(123,29,33)'),(14,'TV Shows','rgb(255,0,0),rgb(0,0,0),rgb(114,244,255),rgb(110,255,97),rgb(253,255,0)','rgb(213,38,51),rgb(181,162,244),rgb(93,18,25),rgb(158,100,76),rgb(183,181,213)','rgb(82,36,52),rgb(195,172,158),rgb(169,114,96),rgb(110,14,11),rgb(195,228,238)');
/*!40000 ALTER TABLE `colorpalette` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-27 20:25:53
