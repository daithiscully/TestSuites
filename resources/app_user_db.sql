-- MySQL dump 10.13  Distrib 5.6.26, for Win64 (x86_64)
--
-- Host: localhost    Database: app_user_db
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `browsers`
--

DROP TABLE IF EXISTS `browsers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `browsers` (
  `id` int(2) NOT NULL,
  `name` varchar(15) NOT NULL,
  `version` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `browsers`
--

LOCK TABLES `browsers` WRITE;
/*!40000 ALTER TABLE `browsers` DISABLE KEYS */;
INSERT INTO `browsers` VALUES (1,'Chrome','v41'),(2,'IE','v11'),(3,'Firefox','v44'),(4,'Opera','v3');
/*!40000 ALTER TABLE `browsers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_on` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Project 1','2016:03:29:20:54:00'),(2,'Project 2','2016/03/29 20:58:06');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `steps`
--

DROP TABLE IF EXISTS `steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `steps` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `test` bigint(100) NOT NULL,
  `action` varchar(100) NOT NULL,
  `action_data_1` varchar(100) NOT NULL,
  `action_data_2` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Steps_fk0` (`test`),
  CONSTRAINT `Steps_fk0` FOREIGN KEY (`test`) REFERENCES `tests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `steps`
--

LOCK TABLES `steps` WRITE;
/*!40000 ALTER TABLE `steps` DISABLE KEYS */;
/*!40000 ALTER TABLE `steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suites`
--

DROP TABLE IF EXISTS `suites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suites` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `project` bigint(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(240) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Suites_fk0` (`project`),
  CONSTRAINT `Suites_fk0` FOREIGN KEY (`project`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suites`
--

LOCK TABLES `suites` WRITE;
/*!40000 ALTER TABLE `suites` DISABLE KEYS */;
INSERT INTO `suites` VALUES (1,1,'Test 1','Test description is for suckkas'),(2,1,'David Rocks','God I am lame...');
/*!40000 ALTER TABLE `suites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tests` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `suite` bigint(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `browser` int(2) NOT NULL DEFAULT '1',
  `description` varchar(240) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Tests_fk0` (`suite`),
  KEY `Tests_fk1` (`browser`),
  CONSTRAINT `Tests_fk0` FOREIGN KEY (`suite`) REFERENCES `suites` (`id`),
  CONSTRAINT `Tests_fk1` FOREIGN KEY (`browser`) REFERENCES `browsers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,1,'test',1,'test'),(2,2,'My first lame test',1,'...description'),(3,1,'ASda',1,'asdasd');
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-29 21:23:17
