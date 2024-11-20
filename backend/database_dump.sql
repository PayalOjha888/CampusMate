-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: campus_mate
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `date` date NOT NULL,
  `status` enum('present','absent') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(100) NOT NULL,
  `event_date` date NOT NULL,
  `event_details` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `unit_test_1` int DEFAULT NULL,
  `unit_test_2` int DEFAULT NULL,
  `unit_test_3` int DEFAULT NULL,
  `unit_test_4` int DEFAULT NULL,
  `unit_test_5` int DEFAULT NULL,
  `mst_1` int DEFAULT NULL,
  `mst_2` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `marks_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `subject_code` varchar(20) NOT NULL,
  `uploader` enum('University','College') NOT NULL,
  `file_content` longblob NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `roll_number` varchar(20) NOT NULL,
  `course` varchar(50) NOT NULL,
  `section` varchar(10) NOT NULL,
  `specialization` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `semester` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roll_number` (`roll_number`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Muskan Dadhich','0829CS221116','B.TECH','B','CSE','0829CS221116','muskan22109cst@sdbc.ac.in',5),(2,'Priya Tiwari','0829CS221148','B.Tech','B','CSE','0829CS221148','priya22141cst@sdbc.ac.in',5),(3,'Khushi Ghidode','0829CS221088','B.Tech','A','CSE','0829CS221088','khushi22220cst@sdbc.ac.in',5);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_exam_timetables`
--

DROP TABLE IF EXISTS `test_exam_timetables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_exam_timetables` (
  `id` int NOT NULL AUTO_INCREMENT,
  `semester` int DEFAULT NULL,
  `specialization` varchar(50) DEFAULT NULL,
  `course` varchar(50) DEFAULT NULL,
  `type` enum('unit_test','mid_sem','final_exam') DEFAULT NULL,
  `date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `subject` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_exam_timetables`
--

LOCK TABLES `test_exam_timetables` WRITE;
/*!40000 ALTER TABLE `test_exam_timetables` DISABLE KEYS */;
INSERT INTO `test_exam_timetables` VALUES (1,5,'CSE','B.Tech','unit_test','2025-11-24','10:00:00','10:50:00','CS-501'),(2,5,'CSE','B.Tech','unit_test','2025-11-24','11:40:00','12:30:00','CS-502'),(3,5,'CSE','B.Tech','unit_test','2026-11-24','10:00:00','10:50:00','CS-503'),(4,5,'CSE','B.Tech','unit_test','2026-11-24','11:40:00','12:30:00','CS-504');
/*!40000 ALTER TABLE `test_exam_timetables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable_regular`
--

DROP TABLE IF EXISTS `timetable_regular`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable_regular` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course` varchar(20) NOT NULL,
  `specialization` varchar(50) NOT NULL,
  `section` varchar(10) NOT NULL,
  `day_of_week` enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday') NOT NULL,
  `lecture_number` int NOT NULL,
  `subject_code` varchar(20) NOT NULL,
  `subject_name` varchar(100) DEFAULT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `semester` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable_regular`
--

LOCK TABLES `timetable_regular` WRITE;
/*!40000 ALTER TABLE `timetable_regular` DISABLE KEYS */;
INSERT INTO `timetable_regular` VALUES (1,'B.Tech','CSE','B','Monday',1,'CS-504','IWT','09:10:00','10:00:00',5),(2,'B.Tech','CSE','B','Monday',2,'CS-504','DA','10:00:00','10:50:00',5),(3,'B.Tech','CSE','B','Monday',3,'CS-506','Technical Training','10:50:00','11:40:00',5),(4,'B.Tech','CSE','B','Monday',4,'CS-506','Technical Training','11:40:00','12:30:00',5),(5,'B.Tech','CSE','B','Monday',5,'CS','Communication Skills','13:05:00','13:55:00',5),(6,'B.Tech','CSE','B','Monday',6,'CS','Communication Skills','13:55:00','14:50:00',5),(7,'B.Tech','CSE','B','Monday',7,'CS-502','DBMS','14:50:00','15:40:00',5),(8,'B.Tech','CSE','B','Tuesday',1,'CS-506','Technical Training','09:10:00','10:00:00',5),(9,'B.Tech','CSE','B','Tuesday',2,'CS-506','Technical Training','10:00:00','10:50:00',5),(10,'B.Tech','CSE','B','Tuesday',3,'QA','Quantitative Aptitude','10:50:00','11:40:00',5),(11,'B.Tech','CSE','B','Tuesday',4,'QA','Quantitative Aptitude','11:40:00','12:30:00',5),(12,'B.Tech','CSE','B','Tuesday',5,'VA','Verbal Ability','13:05:00','13:55:00',5),(13,'B.Tech','CSE','B','Tuesday',6,'CS-502','DBMS','13:55:00','14:50:00',5),(14,'B.Tech','CSE','B','Tuesday',7,'CS-504','IWT','14:50:00','15:40:00',5),(15,'B.Tech','CSE','B','Wednesday',1,'CS-501','TOC','09:10:00','10:00:00',5),(16,'B.Tech','CSE','B','Wednesday',2,'CS-503','DA','10:00:00','10:50:00',5),(17,'B.Tech','CSE','B','Wednesday',3,'CS-506','Technical Training','10:50:00','11:40:00',5),(18,'B.Tech','CSE','B','Wednesday',4,'CS-506','Technical Training','11:40:00','12:30:00',5),(19,'B.Tech','CSE','B','Wednesday',5,'QA','QA','13:05:00','13:55:00',5),(20,'B.Tech','CSE','B','Wednesday',6,'CS-504','IWT','13:55:00','14:50:00',5),(21,'B.Tech','CSE','B','Wednesday',7,'CS-504','IWT','14:50:00','15:40:00',5),(22,'B.Tech','CSE','B','Thursday',1,'CS-501','TOC','09:10:00','10:00:00',5),(23,'B.Tech','CSE','B','Thursday',2,'CS-501','TOC','10:00:00','10:50:00',5),(24,'B.Tech','CSE','B','Thursday',3,'CS','Technical Training','10:50:00','11:40:00',5),(25,'B.Tech','CSE','B','Thursday',4,'CS-506','Technical Training','11:40:00','12:30:00',5),(26,'B.Tech','CSE','B','Thursday',5,'CS','Communication Skills','13:05:00','13:55:00',5),(27,'B.Tech','CSE','B','Thursday',6,'CS-501','TOC','13:55:00','14:50:00',5),(28,'B.Tech','CSE','B','Thursday',7,'CS-502','DBMS','14:50:00','15:40:00',5),(29,'B.Tech','CSE','B','Friday',1,'CS-506','Technical Training','09:10:00','10:00:00',5),(30,'B.Tech','CSE','B','Friday',2,'CS-506','Technical Training','10:00:00','10:50:00',5),(31,'B.Tech','CSE','B','Friday',3,'CS-501','TOC','10:50:00','11:40:00',5),(32,'B.Tech','CSE','B','Friday',4,'CS-501','TOC','11:40:00','12:30:00',5),(33,'B.Tech','CSE','B','Friday',5,'CS-506','Minor Project','13:05:00','13:55:00',5),(34,'B.Tech','CSE','B','Friday',6,'CS-506','Minor Project','13:55:00','14:50:00',5),(35,'B.Tech','CSE','B','Friday',7,'CS-503','DA','14:50:00','15:40:00',5),(36,'B.Tech','CSE','A','Monday',1,'CS-506','Technical Training','09:10:00','10:00:00',5),(37,'B.Tech','CSE','A','Monday',2,'CS-506','Technical Training','10:00:00','10:50:00',5),(38,'B.Tech','CSE','A','Monday',3,'CS-501','TOC','10:50:00','11:40:00',5),(39,'B.Tech','CSE','A','Monday',4,'QA','Quantitative Aptitude','11:40:00','12:30:00',5),(40,'B.Tech','CSE','A','Monday',5,'CS-503','DA','13:05:00','13:55:00',5),(41,'B.Tech','CSE','A','Monday',6,'CS','Communication Skills','13:55:00','14:50:00',5),(42,'B.Tech','CSE','A','Monday',7,'CS-502','DBMS','14:50:00','15:40:00',5),(43,'B.Tech','CSE','A','Tuesday',1,'CS-506','Technical Training','09:10:00','10:00:00',5),(44,'B.Tech','CSE','A','Tuesday',2,'CS-506','Technical Training','10:00:00','10:50:00',5),(45,'B.Tech','CSE','A','Tuesday',3,'CS-501','TOC','10:50:00','11:40:00',5),(46,'B.Tech','CSE','A','Tuesday',4,'CS-502','DBMS','11:40:00','12:30:00',5),(47,'B.Tech','CSE','A','Tuesday',5,'CS-503','DA','13:05:00','13:55:00',5),(48,'B.Tech','CSE','A','Tuesday',6,'QA','Quantitative Aptitude','13:55:00','14:50:00',5),(49,'B.Tech','CSE','A','Tuesday',7,'CS-504','IWT','14:50:00','15:40:00',5),(50,'B.Tech','CSE','A','Wednesday',1,'CS-506','Technical Training','09:10:00','10:00:00',5),(51,'B.Tech','CSE','A','Wednesday',2,'CS-506','Technical Training','10:00:00','10:50:00',5),(52,'B.Tech','CSE','A','Wednesday',3,'CS-501','TOC','10:50:00','11:40:00',5),(53,'B.Tech','CSE','A','Wednesday',4,'CS-502','DBMS','11:40:00','12:30:00',5),(54,'B.Tech','CSE','A','Wednesday',5,'CS-503','DA','13:05:00','13:55:00',5),(55,'B.Tech','CSE','A','Wednesday',6,'CS-504','IWT','13:55:00','14:50:00',5),(56,'B.Tech','CSE','A','Wednesday',7,'CS','Communication Skills','14:50:00','15:40:00',5),(57,'B.Tech','CSE','A','Thursday',1,'CS-501','TOC','09:10:00','10:00:00',5),(58,'B.Tech','CSE','A','Thursday',2,'CS-501','TOC','10:00:00','10:50:00',5),(59,'B.Tech','CSE','A','Thursday',3,'CS-504','IWT','10:50:00','11:40:00',5),(60,'B.Tech','CSE','A','Thursday',4,'CS-502','DBMS','11:40:00','12:30:00',5),(61,'B.Tech','CSE','A','Thursday',5,'CS-503','DA','13:05:00','13:55:00',5),(62,'B.Tech','CSE','A','Thursday',6,'QA','Quantitative Aptitude','13:55:00','14:50:00',5),(63,'B.Tech','CSE','A','Thursday',7,'CS','Communication Skills','14:50:00','15:40:00',5),(64,'B.Tech','CSE','A','Friday',1,'CS-506','Technical Training','09:10:00','10:00:00',5),(65,'B.Tech','CSE','A','Friday',2,'CS-506','Technical Training','10:00:00','10:50:00',5),(66,'B.Tech','CSE','A','Friday',3,'CS-501','TOC','10:50:00','11:40:00',5),(67,'B.Tech','CSE','A','Friday',4,'CS-502','DBMS','11:40:00','12:30:00',5),(68,'B.Tech','CSE','A','Friday',5,'CS-503','DA','13:05:00','13:55:00',5),(69,'B.Tech','CSE','A','Friday',6,'CS-504','IWT','13:55:00','14:50:00',5),(70,'B.Tech','CSE','A','Friday',7,'VA','Verbal Ability','14:50:00','15:40:00',5);
/*!40000 ALTER TABLE `timetable_regular` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:39:47
