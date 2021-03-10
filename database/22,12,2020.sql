/*
SQLyog Ultimate v12.14 (64 bit)
MySQL - 10.3.22-MariaDB : Database - queue_system
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`queue_system` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `queue_system`;

/*Table structure for table `counter` */

DROP TABLE IF EXISTS `counter`;

CREATE TABLE `counter` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

/*Data for the table `counter` */

insert  into `counter`(`id`,`name`,`description`,`created_at`,`updated_at`,`status`) values 
(1,'1',NULL,'2020-04-15 00:00:00','2020-12-12 00:17:02',0),
(2,'2',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(3,'3',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(4,'4',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(5,'5',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(6,'6',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(7,'7',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(8,'8',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(9,'9',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(10,'10',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(11,'11',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(12,'12',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(13,'13',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(14,'14',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(15,'15',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1),
(16,'16',NULL,'2020-04-15 00:00:00','2018-07-27 00:00:00',1);

/*Table structure for table `department` */

DROP TABLE IF EXISTS `department`;

CREATE TABLE `department` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `key` varchar(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `department` */

insert  into `department`(`id`,`name`,`description`,`key`,`created_at`,`updated_at`,`status`) values 
(1,'Department 1','Apple department','a','2016-10-31 10:34:19','2020-12-15 16:49:41',1),
(2,'Department 2','Banana Department','b','2016-11-09 07:18:01','2020-07-18 17:08:17',1),
(3,'Department 3','Coconut Department','c','2016-11-10 08:02:44','2020-07-18 17:08:32',1),
(4,'Department 4','Orange Department','d','2016-11-10 08:02:44','2020-07-18 17:08:45',1),
(6,'Department 6',NULL,'f','2020-05-15 12:36:25','2020-07-18 17:09:11',1),
(7,'Department 7',NULL,'q','2020-05-15 12:36:39','2020-07-18 19:14:13',1);

/*Table structure for table `display` */

DROP TABLE IF EXISTS `display`;

CREATE TABLE `display` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text DEFAULT NULL,
  `direction` varchar(10) DEFAULT 'left',
  `color` varchar(10) DEFAULT '#ffffff',
  `background_color` varchar(10) NOT NULL DEFAULT '#cdcdcd',
  `border_color` varchar(10) NOT NULL DEFAULT '#ffffff',
  `time_format` varchar(20) DEFAULT 'h:i:s A',
  `date_format` varchar(50) DEFAULT 'd M, Y',
  `updated_at` datetime DEFAULT NULL,
  `display` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1-single, 2/3-counter,4-department,5-hospital',
  `keyboard_mode` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0-inactive,1-active',
  `sms_alert` tinyint(1) NOT NULL DEFAULT 1 COMMENT '0-inactive, 1-active ',
  `show_note` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0-inactive, 1-active ',
  `show_officer` tinyint(1) NOT NULL DEFAULT 1,
  `show_department` tinyint(1) NOT NULL DEFAULT 1,
  `alert_position` int(2) NOT NULL DEFAULT 3,
  `language` varchar(20) DEFAULT 'English',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `display` */

insert  into `display`(`id`,`message`,`direction`,`color`,`background_color`,`border_color`,`time_format`,`date_format`,`updated_at`,`display`,`keyboard_mode`,`sms_alert`,`show_note`,`show_officer`,`show_department`,`alert_position`,`language`) values 
(1,'Token - Queue Management System','left','#ff0404','#000000','#3c8dbc','H:i:s','d M, Y','2020-07-18 13:21:04',2,1,1,0,1,1,2,'English');

/*Table structure for table `failed_jobs` */

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `failed_jobs` */

/*Table structure for table `message` */

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `attachment` varchar(128) DEFAULT NULL,
  `datetime` datetime NOT NULL,
  `sender_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=unseen, 1=seen, 2=delete',
  `receiver_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=unseen, 1=seen, 2=delete',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Data for the table `message` */

insert  into `message`(`id`,`sender_id`,`receiver_id`,`subject`,`message`,`attachment`,`datetime`,`sender_status`,`receiver_status`) values 
(1,1,5,'Tedsf','gffg',NULL,'2019-07-29 05:54:00',0,1),
(2,1,2,'adf','ghdf',NULL,'2018-07-29 05:54:00',0,0),
(3,1,3,'hg','efff',NULL,'2018-07-29 05:54:00',1,1),
(4,1,4,'3fsa','dasf',NULL,'2018-07-29 05:54:00',0,1),
(5,5,1,'33','ewrf',NULL,'2018-07-29 05:54:00',0,1),
(6,2,1,'dc','afsc',NULL,'2018-07-29 05:54:00',0,1),
(7,3,1,'asdf','xcvs',NULL,'2018-07-29 05:54:00',0,1),
(8,4,1,'sx','exf',NULL,'2018-07-29 05:54:00',0,1),
(9,1,6,'AAA1','TAFD',NULL,'2020-07-09 22:25:00',0,0),
(10,2,7,'AAA1','TSFD',NULL,'2020-07-09 10:32:46',0,0),
(11,1,5,'dd','TEST','public/assets/attachments/69865.jpg','2020-07-11 10:38:44',0,1),
(12,1,7,'ef','Test','public/assets/attachments/43195.jpg','2020-07-13 00:11:47',0,0),
(13,1,8,'Test Subject','cy: No \'Access-Control-Allow-Origin\' head','public/assets/attachments/33884.jpg','2020-07-13 15:23:44',0,1);

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(1,'2014_10_12_000000_create_users_table',1),
(2,'2014_10_12_100000_create_password_resets_table',1),
(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),
(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),
(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),
(6,'2016_06_01_000004_create_oauth_clients_table',1),
(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),
(8,'2019_08_19_000000_create_failed_jobs_table',1),
(9,'2020_12_17_092153_create_permission_tables',2);

/*Table structure for table `model_has_permissions` */

DROP TABLE IF EXISTS `model_has_permissions`;

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `model_has_permissions` */

/*Table structure for table `model_has_roles` */

DROP TABLE IF EXISTS `model_has_roles`;

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `model_has_roles` */

/*Table structure for table `oauth_access_tokens` */

DROP TABLE IF EXISTS `oauth_access_tokens`;

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_access_tokens` */

insert  into `oauth_access_tokens`(`id`,`user_id`,`client_id`,`name`,`scopes`,`revoked`,`created_at`,`updated_at`,`expires_at`) values 
('0d65fd22c0a0f5b362750933e706f3f226947c44b091935d91e5fa87354a8d0694fc1beee0f53453',1,4,NULL,'[]',0,'2020-12-21 14:47:39','2020-12-21 14:47:39','2020-12-22 14:47:38'),
('2184af6d221a703857e6f98e739c97363b0b156d81f26cd85f7ab82fe22bd51c366bfe897b5fcd4c',1,4,NULL,'[]',0,'2020-12-09 23:18:40','2020-12-09 23:18:40','2020-12-10 23:18:37'),
('52c3672a1c212b208217670b0690c2971f414304a18e7bdd24e6ac6fee59b64f69327f970243d223',1,4,NULL,'[]',0,'2020-12-22 15:02:48','2020-12-22 15:02:48','2020-12-23 15:02:47'),
('6cf1d3e3589483433db9734b2ef8a18b412cdf08b197927afa9affabd313b0be61fd2abd784c3169',1,4,NULL,'[]',0,'2020-12-11 13:53:40','2020-12-11 13:53:40','2020-12-12 13:53:40'),
('716546c1e63a78aa997b404af88144ea6d91e138ff38b3f804b9afada593e9f5a14b7b02a0e6af23',1,4,NULL,'[]',0,'2020-12-09 14:12:35','2020-12-09 14:12:35','2020-12-10 14:12:35'),
('96319838ee32b07cfea4d8bfe723000814c84d045b2560b0c8cc6554b6cf80565e3aecfbe5ac2b22',1,4,NULL,'[]',0,'2020-12-13 20:54:25','2020-12-13 20:54:25','2020-12-14 20:54:23'),
('9f0832614c2f95354ad0156807023feaf25bf31cf156a79cc6e2a9dcdbc3699c2317cef5fae91eeb',1,4,NULL,'[]',0,'2020-12-16 09:05:15','2020-12-16 09:05:15','2020-12-17 09:05:09'),
('a7d5fe594da709b8ea82c9359fa0b3256dddcd947b28e135030299e479bcb2590c019105862be1d4',1,4,NULL,'[]',0,'2020-12-11 13:21:12','2020-12-11 13:21:12','2020-12-12 13:21:12'),
('a9658c6e2b6e69ccbcd3e269abe07db4c5c0ff56151a775d572b6c2a49992f5f22e844c3a173dc70',1,4,NULL,'[]',0,'2020-12-11 13:53:22','2020-12-11 13:53:22','2020-12-12 13:53:22'),
('bfc687d821683a61dc5db74b8f1a698929672eb1d635feee4ae512b5e31e8b926f21afbbcbf3d765',1,4,NULL,'[]',0,'2020-12-17 10:29:36','2020-12-17 10:29:36','2020-12-18 10:29:36'),
('c288aa7cabf316ce66b88dc4fef03bb5dfb542b10e9c796aa101d988bb826df386e53eead1b5bc42',1,4,NULL,'[]',0,'2020-12-18 13:11:54','2020-12-18 13:11:54','2020-12-19 13:11:54'),
('cab118021e15f8d22f9425b2169804a703adeae5e1eac3e2b8674f60f715a98f763fa33ba66b0a5b',1,4,NULL,'[]',0,'2020-12-21 08:46:55','2020-12-21 08:46:55','2020-12-22 08:46:52'),
('e02e3562237904f6ad8e82f8482c5ebcd83e52982dfbb3d615826aa375043d074281b6639dc1b7e9',1,4,NULL,'[]',0,'2020-12-18 10:50:22','2020-12-18 10:50:22','2020-12-19 10:50:21'),
('eeb9a2ae270c03c94fb7f80d8433d6a107e197dc28e679c19f6e37e3066be07390f87c140c25b615',1,4,NULL,'[]',0,'2020-12-14 16:53:53','2020-12-14 16:53:53','2020-12-15 16:53:49');

/*Table structure for table `oauth_auth_codes` */

DROP TABLE IF EXISTS `oauth_auth_codes`;

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_auth_codes` */

/*Table structure for table `oauth_clients` */

DROP TABLE IF EXISTS `oauth_clients`;

CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_clients` */

insert  into `oauth_clients`(`id`,`user_id`,`name`,`secret`,`redirect`,`personal_access_client`,`password_client`,`revoked`,`created_at`,`updated_at`) values 
(3,NULL,'Laravel Personal Access Client','JDOEuYP1CdVZVZVzUABncy8J0cCIGAP4PA4HDIl4','http://localhost',1,0,0,'2020-12-09 14:02:51','2020-12-09 14:02:51'),
(4,NULL,'Laravel Password Grant Client','fjyyeMqliTaQuUjn0CjVzn8DkNy4GpKTUQRGJ5ba','http://localhost',0,1,0,'2020-12-09 14:02:52','2020-12-09 14:02:52');

/*Table structure for table `oauth_personal_access_clients` */

DROP TABLE IF EXISTS `oauth_personal_access_clients`;

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_personal_access_clients` */

insert  into `oauth_personal_access_clients`(`id`,`client_id`,`created_at`,`updated_at`) values 
(1,3,'2020-12-09 14:02:51','2020-12-09 14:02:51');

/*Table structure for table `oauth_refresh_tokens` */

DROP TABLE IF EXISTS `oauth_refresh_tokens`;

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_refresh_tokens` */

insert  into `oauth_refresh_tokens`(`id`,`access_token_id`,`revoked`,`expires_at`) values 
('0e7fd08bc3aaf13d009e867dbe9b24c5f42cf032f676903362e3108a99baff2e436e8a9b14a82a33','eeb9a2ae270c03c94fb7f80d8433d6a107e197dc28e679c19f6e37e3066be07390f87c140c25b615',0,'2020-12-24 16:53:49'),
('0f6cda2f1c6b148233043c48b7b348bd219711191f028ad1d6c0d65a9660252099ec32d71e95e819','a9658c6e2b6e69ccbcd3e269abe07db4c5c0ff56151a775d572b6c2a49992f5f22e844c3a173dc70',0,'2020-12-21 13:53:22'),
('17c8e155086cc0c8b2a4aa7b5b0532aa3b9eaf8614e7ca385817fedefd84de800d8f23386f606899','6cf1d3e3589483433db9734b2ef8a18b412cdf08b197927afa9affabd313b0be61fd2abd784c3169',0,'2020-12-21 13:53:40'),
('18ed52645e9af5fd523db7734a95162a47e8dfdbee674e1b2c2bf0e590d4d69a9e4e7b916ab71513','716546c1e63a78aa997b404af88144ea6d91e138ff38b3f804b9afada593e9f5a14b7b02a0e6af23',0,'2020-12-19 14:12:35'),
('19970d37b6396d4f52313ede54da6b79045cbe5c5d9f4477407b4793b5523cbdd0482ea9a2d180ed','9f0832614c2f95354ad0156807023feaf25bf31cf156a79cc6e2a9dcdbc3699c2317cef5fae91eeb',0,'2020-12-26 09:05:10'),
('36607a616715e6ed7a0079e141e47ce570facec0975102e8548ea2b123cbb385f2d4ecfb2db3ba29','cab118021e15f8d22f9425b2169804a703adeae5e1eac3e2b8674f60f715a98f763fa33ba66b0a5b',0,'2020-12-31 08:46:53'),
('5ced9f8ba8439368097da003a545209831b22286378c2d0e38a8daaf46d1dbfccfc5aa6b2801528f','a7d5fe594da709b8ea82c9359fa0b3256dddcd947b28e135030299e479bcb2590c019105862be1d4',0,'2020-12-21 13:21:13'),
('77b600aa2f1f236609a894c6289c5652f8968c3dd31e3609e7ab0d7fa28f382cb741a67d78655e83','2184af6d221a703857e6f98e739c97363b0b156d81f26cd85f7ab82fe22bd51c366bfe897b5fcd4c',0,'2020-12-19 23:18:37'),
('91f7f161d0ba4002f158960e75919986f0f64eebcd90e977d74522c91587bc9f68a702682353db1b','e02e3562237904f6ad8e82f8482c5ebcd83e52982dfbb3d615826aa375043d074281b6639dc1b7e9',0,'2020-12-28 10:50:21'),
('ad824c8a05e59c1e2cae7ae432c40cd8838afd8523a536e382d44b5b2a5b035657b93309791eaedf','bfc687d821683a61dc5db74b8f1a698929672eb1d635feee4ae512b5e31e8b926f21afbbcbf3d765',0,'2020-12-27 10:29:36'),
('c35416cad80d2f21f6e74cade012d8c06042a0754a51759f8368e3e46edeb4826eb37d1358a31f01','c288aa7cabf316ce66b88dc4fef03bb5dfb542b10e9c796aa101d988bb826df386e53eead1b5bc42',0,'2020-12-28 13:11:54'),
('d0044a7a6db824578c246b73a29fde0ae4f16a850a99cdd717d98cddf2b9f083641daa06ed06a58b','52c3672a1c212b208217670b0690c2971f414304a18e7bdd24e6ac6fee59b64f69327f970243d223',0,'2021-01-01 15:02:49'),
('d49d8c1d816f0f898b77aec52787f63fe244cfe352fa8ffbead9cde25791b4b505579959fa43c248','0d65fd22c0a0f5b362750933e706f3f226947c44b091935d91e5fa87354a8d0694fc1beee0f53453',0,'2020-12-31 14:47:38'),
('f0ace5091d49fa2acf0b889ea8559cbc2a7afeec69169067fd6118470d8d3e0418952f4cd56dfd66','96319838ee32b07cfea4d8bfe723000814c84d045b2560b0c8cc6554b6cf80565e3aecfbe5ac2b22',0,'2020-12-23 20:54:23');

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `permissions` */

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `permissions` */

/*Table structure for table `role_has_permissions` */

DROP TABLE IF EXISTS `role_has_permissions`;

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `role_has_permissions` */

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guard_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`display_name`,`guard_name`,`created_at`,`updated_at`) values 
(1,'admin','Администратор','web','2020-12-17 09:43:03','2020-12-17 09:43:08'),
(2,'cashier','Касcир','web','2020-12-17 09:43:36','2020-12-17 09:43:41');

/*Table structure for table `setting` */

DROP TABLE IF EXISTS `setting`;

CREATE TABLE `setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `logo` varchar(50) DEFAULT NULL,
  `favicon` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `copyright_text` varchar(255) DEFAULT NULL,
  `direction` varchar(10) DEFAULT NULL,
  `language` varchar(10) DEFAULT NULL,
  `timezone` varchar(32) NOT NULL DEFAULT 'Asia/Dhaka',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `setting` */

insert  into `setting`(`id`,`title`,`description`,`logo`,`favicon`,`email`,`phone`,`address`,`copyright_text`,`direction`,`language`,`timezone`) values 
(1,'Лукмони хаким','Описание','/images/logo/8266809739.png','/images/logo/1561754811.png','admin@gmail.com','+325 252 222','ш.Хучанд','copyright@2020',NULL,'tr','Asia/Tashkent');

/*Table structure for table `sms_history` */

DROP TABLE IF EXISTS `sms_history`;

CREATE TABLE `sms_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` varchar(20) DEFAULT NULL,
  `to` varchar(20) DEFAULT NULL,
  `message` varchar(512) DEFAULT NULL,
  `response` varchar(512) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

/*Data for the table `sms_history` */

insert  into `sms_history`(`id`,`from`,`to`,`message`,`response`,`created_at`) values 
(3,'Queue Management Sys','8801821742285','Test','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"status\\\": \\\"4\\\",\\n        \\\"error-text\\\": \\\"Bad Credentials\\\"\\n    }]\\n}\",\"message\":\"Test\"}','2020-04-28 16:03:09'),
(4,'Queue Management Sys','8801821742285','Test','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"status\\\": \\\"3\\\",\\n        \\\"error-text\\\": \\\"Invalid from param\\\"\\n    }]\\n}\",\"message\":\"Test\"}','2020-04-28 22:05:19'),
(5,'Queue Management Sys','8801821742285','TEST B','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"8801821742285\\\",\\n        \\\"status\\\": \\\"29\\\",\\n        \\\"error-text\\\": \\\"Non White-listed Destination - rejected\\\"\\n    }]\\n}\",\"message\":\"TEST B\"}','2020-04-28 23:25:59'),
(6,'Queue Management Sys','3367019711','TEST B','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"3367019711\\\",\\n        \\\"status\\\": \\\"29\\\",\\n        \\\"error-text\\\": \\\"Non White-listed Destination - rejected\\\"\\n    }]\\n}\",\"message\":\"TEST B\"}','2020-04-28 23:27:20'),
(7,'Queue Management Sys','0123456789','Token No: A106 \\r\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\r\\n Your waiting no is 2. \\r\\n 2020-05-14 23:44:49.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A106 \\\\r\\\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n Your waiting no is 2. \\\\r\\\\n 2020-05-14 23:44:49.\"}','2020-05-14 23:59:49'),
(8,'Queue Management Sys','0123456789','Token No: A204 \\r\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:52:00.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A204 \\\\r\\\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:52:00.\"}','2020-05-14 23:59:50'),
(9,'Queue Management Sys','0123456789','Token No: A304 \\r\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:52:06.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A304 \\\\r\\\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:52:06.\"}','2020-05-14 23:59:51'),
(10,'Queue Management Sys','0123456789','Token No: A107 \\r\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\r\\n Your waiting no is 1. \\r\\n 2020-05-14 23:45:24.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A107 \\\\r\\\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-14 23:45:24.\"}','2020-05-15 00:00:06'),
(11,'Queue Management Sys','0123456789','Token No: A203 \\r\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:51:45.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A203 \\\\r\\\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:51:45.\"}','2020-05-15 00:00:07'),
(12,'Queue Management Sys','0123456789','Token No: A303 \\r\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:51:49.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A303 \\\\r\\\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:51:49.\"}','2020-05-15 00:00:07'),
(13,'Queue Management Sys','0123456789','Token No: A202 \\r\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:51:29.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A202 \\\\r\\\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:51:29.\"}','2020-05-15 00:00:11'),
(14,'Queue Management Sys','0123456789','Token No: A302 \\r\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:51:39.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A302 \\\\r\\\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:51:39.\"}','2020-05-15 00:00:12'),
(15,'Queue Management Sys','0123456789','Token No: A201 \\r\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:51:07.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A201 \\\\r\\\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:51:07.\"}','2020-05-15 00:00:16'),
(16,'Queue Management Sys','0123456789','Token No: A301 \\r\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\r\\n Your waiting no is 3. \\r\\n 2020-05-14 23:51:23.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A301 \\\\r\\\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-14 23:51:23.\"}','2020-05-15 00:00:16'),
(17,'Queue Management Sys','0123456789','Token No: A101 \\r\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\r\\n Your waiting no is 2. \\r\\n 2020-05-15 00:20:34.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A101 \\\\r\\\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n Your waiting no is 2. \\\\r\\\\n 2020-05-15 00:20:34.\"}','2020-05-15 00:48:46'),
(18,'Queue Management Sys','0123456789','Token No: O502 \\r\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\r\\n Your waiting no is 3. \\r\\n 2020-05-15 00:20:39.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: O502 \\\\r\\\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\\\r\\\\n Your waiting no is 3. \\\\r\\\\n 2020-05-15 00:20:39.\"}','2020-05-15 00:48:47'),
(19,'Queue Management Sys','0123456789','Token No: A105 \\r\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 00:54:46.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A105 \\\\r\\\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 00:54:46.\"}','2020-05-15 01:18:43'),
(20,'Queue Management Sys','0123456789','Token No: O504 \\r\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 00:54:52.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: O504 \\\\r\\\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 00:54:52.\"}','2020-05-15 01:18:44'),
(21,'Queue Management Sys','0123456789','Token No: A106 \\r\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 01:09:26.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A106 \\\\r\\\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 01:09:26.\"}','2020-05-15 01:18:54'),
(22,'Queue Management Sys','0123456789','Token No: O505 \\r\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 00:54:57.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: O505 \\\\r\\\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 00:54:57.\"}','2020-05-15 01:18:55'),
(23,'Queue Management Sys','0123456789','Token No: A104 \\r\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 00:54:14.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A104 \\\\r\\\\n Department: Apple, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 00:54:14.\"}','2020-05-15 02:20:50'),
(24,'Queue Management Sys','0123456789','Token No: A205 \\r\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 01:06:30.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A205 \\\\r\\\\n Department: Apple, Counter: 2 and Officer: Jane Doe. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 01:06:30.\"}','2020-05-15 02:20:51'),
(25,'Queue Management Sys','0123456789','Token No: A304 \\r\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 00:54:35.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: A304 \\\\r\\\\n Department: Apple, Counter: 3 and Officer: Annie Smith. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 00:54:35.\"}','2020-05-15 02:20:52'),
(26,'Queue Management Sys','0123456789','Token No: O502 \\r\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\r\\n Your waiting no is 1. \\r\\n 2020-05-15 00:54:26.','{\"status\":true,\"request_url\":\"https:\\/\\/rest.nexmo.com\\/sms\\/json?\",\"success\":\"{\\n    \\\"message-count\\\": \\\"1\\\",\\n    \\\"messages\\\": [{\\n        \\\"to\\\": \\\"0123456789\\\",\\n        \\\"status\\\": \\\"6\\\",\\n        \\\"error-text\\\": \\\"Unroutable message - rejected\\\"\\n    }]\\n}\",\"message\":\"Token No: O502 \\\\r\\\\n Department: Orange, Counter: 5 and Officer: Alex Smith. \\\\r\\\\n Your waiting no is 1. \\\\r\\\\n 2020-05-15 00:54:26.\"}','2020-05-15 02:20:52'),
(32,'01919742285','8801821742285','test','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":607,\\\"error\\\":\\\"Invalid FROM number.\\\",\\\"errorDescription\\\":\\\"User specified FROM number, but integration isn\'t two-way.\\\"}\",\"message\":\"test\"}','2020-05-17 14:12:10'),
(33,'8801919742285','8801821742285','test','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":607,\\\"error\\\":\\\"Invalid FROM number.\\\",\\\"errorDescription\\\":\\\"User specified FROM number, but integration isn\'t two-way.\\\"}\",\"message\":\"test\"}','2020-05-17 14:18:48'),
(34,'8801919742285','8801821742285','TEST','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[{\\\"apiMessageId\\\":\\\"d737eadad6f9476ca91924a8cf31a661\\\",\\\"accepted\\\":true,\\\"to\\\":\\\"8801821742285\\\",\\\"errorCode\\\":null,\\\"error\\\":null,\\\"errorDescription\\\":null}]}\",\"message\":\"TEST\"}','2020-05-17 14:24:49'),
(35,'7082747358','8801821742285','TEST','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":607,\\\"error\\\":\\\"Invalid FROM number.\\\",\\\"errorDescription\\\":\\\"User specified FROM number, but integration isn\'t two-way.\\\"}\",\"message\":\"TEST\"}','2020-05-17 14:30:49'),
(36,'17082747358','8801821742285','TEST','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[{\\\"apiMessageId\\\":\\\"c5d7a69898ef43348e9b3cd7ce7a5096\\\",\\\"accepted\\\":true,\\\"to\\\":\\\"8801821742285\\\",\\\"errorCode\\\":null,\\\"error\\\":null,\\\"errorDescription\\\":null}]}\",\"message\":\"TEST\"}','2020-05-17 14:45:38'),
(37,'11222747358','0123456789','Please contact urgently. Token No: A101 \\r\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\r\\n 2020-10-20 22:45:32.','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":108,\\\"error\\\":\\\"Invalid or missing integration API Key.\\\",\\\"errorDescription\\\":\\\"The integration API key is either incorrect or has not been included in the API call.\\\"}\",\"message\":\"Please contact urgently. Token No: A101 \\\\r\\\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n 2020-10-20 22:45:32.\"}','2020-10-22 23:36:30'),
(38,'11222747358','+992989081065','Please contact urgently. Token No: A1000 \\r\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\r\\n 2020-10-21 09:03:37.','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":108,\\\"error\\\":\\\"Invalid or missing integration API Key.\\\",\\\"errorDescription\\\":\\\"The integration API key is either incorrect or has not been included in the API call.\\\"}\",\"message\":\"Please contact urgently. Token No: A1000 \\\\r\\\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n 2020-10-21 09:03:37.\"}','2020-10-22 23:37:51'),
(39,'11222747358','0123456789','Please contact urgently. Token No: A101 \\r\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\r\\n 2020-10-20 22:45:32.','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":108,\\\"error\\\":\\\"Invalid or missing integration API Key.\\\",\\\"errorDescription\\\":\\\"The integration API key is either incorrect or has not been included in the API call.\\\"}\",\"message\":\"Please contact urgently. Token No: A101 \\\\r\\\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n 2020-10-20 22:45:32.\"}','2020-10-22 23:39:33'),
(40,'11222747358','+992989081065','Please contact urgently. Token No: E4001 \\r\\n Department: Department 5, Counter: 4 and Officer: Bob Banny. \\r\\n 2020-10-23 00:08:04.','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":108,\\\"error\\\":\\\"Invalid or missing integration API Key.\\\",\\\"errorDescription\\\":\\\"The integration API key is either incorrect or has not been included in the API call.\\\"}\",\"message\":\"Please contact urgently. Token No: E4001 \\\\r\\\\n Department: Department 5, Counter: 4 and Officer: Bob Banny. \\\\r\\\\n 2020-10-23 00:08:04.\"}','2020-10-23 00:09:25'),
(41,'11222747358','+992989081065','Please contact urgently. Token No: A1000 \\r\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\r\\n 2020-10-23 00:06:07.','{\"status\":true,\"request_url\":\"https:\\/\\/platform.clickatell.com\\/messages\\/http\\/send?\",\"success\":\"{\\\"messages\\\":[],\\\"errorCode\\\":108,\\\"error\\\":\\\"Invalid or missing integration API Key.\\\",\\\"errorDescription\\\":\\\"The integration API key is either incorrect or has not been included in the API call.\\\"}\",\"message\":\"Please contact urgently. Token No: A1000 \\\\r\\\\n Department: Department 1, Counter: 1 and Officer: Wane Willian. \\\\r\\\\n 2020-10-23 00:06:07.\"}','2020-10-23 00:09:45');

/*Table structure for table `sms_setting` */

DROP TABLE IF EXISTS `sms_setting`;

CREATE TABLE `sms_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider` varchar(20) NOT NULL DEFAULT 'nexmo',
  `api_key` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `from` varchar(50) DEFAULT NULL,
  `sms_template` text DEFAULT NULL,
  `recall_sms_template` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `sms_setting` */

insert  into `sms_setting`(`id`,`provider`,`api_key`,`username`,`password`,`from`,`sms_template`,`recall_sms_template`) values 
(1,'clickatell','-K1xA==','codekernel','05kOeOvm','11222747358','Token No: [TOKEN] \\r\\n Department: [DEPARTMENT], Counter: [COUNTER] and Officer: [OFFICER]. \\r\\n Your waiting no is [WAIT]. \\r\\n [DATE].','Please contact urgently. Token No: [TOKEN] \\r\\n Department: [DEPARTMENT], Counter: [COUNTER] and Officer: [OFFICER]. \\r\\n [DATE].');

/*Table structure for table `token` */

DROP TABLE IF EXISTS `token`;

CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token_no` varchar(10) DEFAULT NULL,
  `client_mobile` varchar(20) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `counter_id` int(11) DEFAULT 0,
  `user_id` int(11) DEFAULT 0,
  `note` varchar(512) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `is_vip` tinyint(1) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0-В ожидание, 1-Завершено',
  `sms_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0-pending, 1-sent, 2-quick-send',
  `call_status` tinyint(1) DEFAULT 0 COMMENT '0-wait,1-call',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;

/*Data for the table `token` */

insert  into `token`(`id`,`token_no`,`client_mobile`,`department_id`,`counter_id`,`user_id`,`note`,`created_by`,`created_at`,`updated_at`,`is_vip`,`status`,`sms_status`,`call_status`) values 
(1,'A101','0123456789',1,1,2,NULL,2,'2020-10-13 22:45:32','2020-10-20 22:45:32',NULL,1,1,0),
(2,'A201','0123456789',1,2,2,NULL,2,'2020-10-13 22:45:32','2020-10-20 22:45:32',NULL,1,1,0),
(3,'A202','0123456789',1,2,4,NULL,NULL,'2020-10-13 22:45:32','2020-10-20 22:45:32',NULL,1,1,0),
(4,'A301','0123456789',1,3,4,NULL,2,'2020-10-14 22:45:32','2020-10-20 22:45:32',NULL,1,1,0),
(5,'VA302','0123456789',3,2,5,NULL,2,'2020-10-15 22:45:32','2020-10-22 23:54:21',1,1,1,0),
(6,'VC501','0123456789',3,5,1,NULL,NULL,'2020-10-15 22:45:32','2020-10-22 23:55:12',1,1,1,0),
(7,'VC502','0123456789',3,5,1,NULL,NULL,'2020-10-16 22:45:32','2020-10-22 23:55:52',1,1,1,0),
(8,'B401','0123456789',2,4,5,NULL,2,'2020-10-16 22:45:32','2020-10-22 23:57:31',NULL,1,1,0),
(9,'O601','0123456789',4,6,4,NULL,1,'2020-10-16 22:45:32','2020-10-22 23:57:56',NULL,1,1,0),
(10,'O602','0123456789',4,6,5,NULL,1,'2020-10-16 22:45:32','2020-10-20 22:45:32',NULL,1,0,0),
(11,'A101','0123456789',1,1,2,NULL,1,'2020-10-16 22:45:32','2020-10-22 23:34:25',NULL,1,0,0),
(12,'A201','0123456789',1,2,2,NULL,1,'2020-10-16 22:45:32','2020-10-22 17:34:51',NULL,2,1,0),
(13,'VA202','0123456789',1,2,1,NULL,1,'2020-10-17 22:45:32','2020-10-20 22:45:32',1,1,0,0),
(14,'A301','0123456789',1,3,4,NULL,1,'2020-10-17 22:45:32','2020-10-22 23:59:32',NULL,1,1,0),
(15,'A302','0123456789',1,3,4,NULL,NULL,'2020-10-18 22:45:32',NULL,NULL,2,1,0),
(16,'C501','0123456789',3,5,1,NULL,NULL,'2020-10-18 22:45:32','2020-10-20 22:45:32',NULL,1,0,0),
(17,'C502','0123456789',3,5,1,NULL,3,'2020-10-18 22:45:32','2020-10-23 00:00:29',NULL,1,1,0),
(18,'B401','0123456789',2,4,5,NULL,4,'2020-10-18 22:45:32','2020-10-23 00:01:41',NULL,1,1,0),
(19,'O601','0123456789',4,6,8,NULL,5,'2020-10-18 22:45:32','2020-10-20 22:45:32',NULL,1,0,0),
(20,'O602','0123456789',4,6,2,NULL,NULL,'2020-10-19 22:45:32','2020-10-22 17:35:23',NULL,2,1,0),
(22,'A101','0123456789',1,1,2,NULL,3,'2020-10-20 22:45:32','2020-10-22 23:41:41',NULL,1,2,0),
(23,'VA201','0123456789',1,2,4,NULL,2,'2020-10-20 22:45:32',NULL,1,1,0,0),
(24,'A202','0123456789',1,2,2,NULL,1,'2020-10-20 22:45:32','2020-10-22 23:35:41',NULL,1,0,0),
(25,'A301','0123456789',1,3,4,NULL,2,'2020-10-20 22:45:32',NULL,NULL,1,0,0),
(26,'A302','0123456789',1,3,4,NULL,4,'2020-10-20 22:45:32','2020-10-23 00:02:38',NULL,1,1,0),
(27,'VC501','0123456789',3,5,1,NULL,5,'2020-10-20 22:45:32',NULL,1,1,0,0),
(28,'C502','0123456789',3,5,1,NULL,3,'2020-10-20 22:45:32',NULL,NULL,2,0,0),
(29,'B401','0123456789',2,4,5,NULL,6,'2020-10-20 22:45:32','2020-10-23 00:02:50',NULL,1,1,0),
(30,'O601','0123456789',4,6,6,NULL,7,'2020-10-20 22:45:32',NULL,NULL,2,0,0),
(31,'O602','0123456789',4,6,7,NULL,8,'2020-10-20 22:45:32',NULL,NULL,2,0,0),
(251,'A1000','+992989081065',1,1,2,NULL,1,'2020-10-21 09:03:37','2020-10-22 23:38:09',NULL,1,2,0),
(252,'A2000','+992989081065',1,2,4,NULL,1,'2020-10-21 09:06:52','2020-10-23 00:02:23',NULL,1,1,0),
(253,'D5000','+992989081065',4,5,6,NULL,3,'2020-10-22 23:46:05','2020-10-23 00:03:14',NULL,1,1,0),
(254,'D5001','+992989081065',4,5,6,NULL,3,'2020-10-22 23:46:27','2020-10-23 00:02:12',NULL,1,1,0),
(255,'D5002','+992989081065',4,5,6,NULL,3,'2020-10-22 23:46:38','2020-10-23 00:01:59',NULL,1,1,0),
(256,'F6000','+992989081065',6,6,9,NULL,3,'2020-10-22 23:46:49','2020-10-23 00:00:59',NULL,1,1,0),
(257,'VA1000','+992989081065',1,1,6,NULL,1,'2020-10-22 23:51:52','2020-10-22 23:56:27',1,1,1,0),
(258,'VB2000','+992989081065',2,2,5,NULL,1,'2020-10-22 23:54:02','2020-10-22 23:57:05',1,1,1,0),
(259,'A1000','+992989081065',1,1,2,NULL,1,'2020-10-23 00:06:07','2020-10-23 00:10:29',NULL,1,1,0),
(260,'E4000','+992989081065',5,4,7,NULL,1,'2020-10-23 00:07:11','2020-10-23 00:08:22',NULL,1,1,0),
(261,'E4001','+992989081065',5,4,7,NULL,1,'2020-10-23 00:08:04','2020-10-23 00:09:25',NULL,0,2,0),
(265,'C1',NULL,3,0,0,NULL,1,'2020-12-17 17:59:38','2020-12-17 17:59:38',NULL,0,0,0),
(266,'C2',NULL,3,0,0,NULL,1,'2020-12-17 17:59:43','2020-12-17 17:59:43',NULL,0,0,0),
(267,'C3',NULL,3,0,0,NULL,1,'2020-12-17 17:59:53','2020-12-17 17:59:53',NULL,0,0,0),
(268,'D1',NULL,4,0,0,NULL,1,'2020-12-17 18:00:04','2020-12-17 18:00:04',NULL,0,0,0),
(269,'Q1',NULL,7,0,0,NULL,1,'2020-12-17 18:00:11','2020-12-17 18:00:11',NULL,0,0,0),
(270,'A1',NULL,1,2,2,NULL,1,'2020-12-18 10:59:03','2020-12-18 10:59:03',1,0,0,0),
(271,'A2',NULL,1,2,2,NULL,1,'2020-12-18 11:03:06','2020-12-18 11:03:06',1,0,0,0),
(272,'A3',NULL,1,2,2,NULL,1,'2020-12-18 11:03:50','2020-12-18 11:03:50',1,0,0,0),
(273,'B1','+992987612951',2,1,1,NULL,1,'2020-12-18 11:04:34','2020-12-18 11:04:34',1,0,0,0),
(274,'A1',NULL,1,1,0,NULL,1,'2020-12-22 09:12:17','2020-12-22 09:12:17',NULL,1,0,0),
(275,'A2',NULL,1,2,0,NULL,1,'2020-12-22 09:12:20','2020-12-22 09:12:20',NULL,0,0,0),
(276,'A3',NULL,1,2,0,NULL,1,'2020-12-22 09:12:22','2020-12-22 16:17:08',NULL,0,0,0),
(277,'A4',NULL,1,1,0,NULL,1,'2020-12-22 09:12:43','2020-12-22 16:37:03',NULL,1,0,0),
(278,'A5',NULL,1,1,0,NULL,1,'2020-12-22 09:12:44','2020-12-22 17:40:32',NULL,1,0,0),
(279,'A6',NULL,1,0,0,NULL,1,'2020-12-22 09:12:45','2020-12-22 16:40:12',NULL,0,0,0),
(280,'A7',NULL,1,1,0,NULL,1,'2020-12-22 09:12:46','2020-12-22 17:40:58',NULL,1,0,0),
(281,'A8',NULL,1,1,0,NULL,1,'2020-12-22 09:12:47','2020-12-22 17:41:06',NULL,1,0,0),
(282,'A9',NULL,1,0,0,NULL,1,'2020-12-22 09:12:59','2020-12-22 16:42:39',NULL,0,0,0),
(283,'A10',NULL,1,1,0,NULL,1,'2020-12-22 09:13:00','2020-12-22 18:25:20',NULL,1,0,0),
(284,'A11',NULL,1,0,0,NULL,1,'2020-12-22 09:23:58','2020-12-22 16:43:29',NULL,0,0,0),
(285,'A12',NULL,1,1,0,NULL,1,'2020-12-22 09:23:59','2020-12-22 16:44:01',NULL,0,0,0),
(286,'A13',NULL,1,0,0,NULL,1,'2020-12-22 09:24:00','2020-12-22 16:44:45',NULL,0,0,0),
(287,'A14',NULL,1,0,0,NULL,1,'2020-12-22 09:24:07','2020-12-22 09:24:07',NULL,0,0,0),
(288,'A15',NULL,1,1,0,NULL,1,'2020-12-22 09:24:08','2020-12-22 09:24:08',NULL,0,0,0),
(289,'A16',NULL,1,0,0,NULL,1,'2020-12-22 09:24:09','2020-12-22 09:24:09',NULL,0,0,0),
(290,'A17',NULL,1,0,0,NULL,1,'2020-12-22 09:24:10','2020-12-22 09:24:10',NULL,0,0,0),
(291,'A18',NULL,1,1,0,NULL,1,'2020-12-22 09:24:11','2020-12-22 09:24:11',NULL,0,0,0),
(292,'A19',NULL,1,0,0,NULL,1,'2020-12-22 09:24:12','2020-12-22 09:24:12',NULL,0,0,0),
(293,'A20',NULL,1,1,0,NULL,1,'2020-12-22 09:24:13','2020-12-22 09:24:13',NULL,0,0,0);

/*Table structure for table `token_setting` */

DROP TABLE IF EXISTS `token_setting`;

CREATE TABLE `token_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `department_id` int(11) NOT NULL,
  `counter_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

/*Data for the table `token_setting` */

insert  into `token_setting`(`id`,`department_id`,`counter_id`,`user_id`,`created_at`,`updated_at`,`status`,`is_deleted`) values 
(7,7,9,2,'2020-05-14 23:43:49','2020-12-16 14:25:03',1,0),
(8,1,2,2,'2020-05-14 23:50:42',NULL,1,0),
(9,1,3,2,'2020-05-14 23:50:55',NULL,1,0),
(10,4,5,2,'2020-05-15 00:19:46',NULL,1,0),
(11,5,4,2,'2020-05-15 14:54:00',NULL,1,0),
(12,6,6,2,'2020-05-15 14:54:15',NULL,1,0),
(13,6,7,2,'2020-05-15 14:54:35',NULL,1,0),
(14,7,8,2,'2020-05-15 14:56:49',NULL,1,0),
(16,2,1,1,'2020-12-16 13:58:54','2020-12-16 13:58:54',1,0),
(17,1,1,1,'2020-12-16 14:12:10','2020-12-16 14:12:10',1,0);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(1) DEFAULT 0,
  `role_id` bigint(20) DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_deleted` int(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`email_verified_at`,`status`,`role_id`,`avatar`,`password`,`remember_token`,`created_at`,`updated_at`,`is_deleted`) values 
(1,'Admin','admin@queue-system.tj',NULL,1,1,'/images/user_avatars/5355178713.jpeg','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-07-18 16:18:04','2020-12-17 15:05:29',0),
(2,'Насим Юсупов 1','nasimjon078@gmail.com',NULL,1,2,'/images/user_avatars/9568580466.jpeg','$2y$10$WEKsGhJvi927yZ4UErE1tef8/DDJR3qrvI0Ud3E6RQ1YyycwF3XA2',NULL,'2020-12-15 14:59:25','2020-12-17 15:18:03',0),
(4,'От отказа бронирование','nasimjon078@gmail.ru',NULL,1,2,'/images/user_avatars/1952076180.png','$2y$10$P.eUDeZhdsufL.SqMCTyauSrvmDrB.bbM2ipL4swv8vGtAPvPC.zG',NULL,'2020-12-17 11:45:31','2020-12-17 15:20:30',0),
(5,'Насим Юсупов','nasimjon07@gmail.com',NULL,1,2,'/images/user_avatars/9090198734.png','$2y$10$XJdUCaVu7OVtERMp2V0CJuA.PwKPwJXNx4mrRvSzVsQvSd4UUL2Oa',NULL,'2020-12-17 15:21:03','2020-12-17 15:21:03',0),
(6,'Насим Юсупов','nasimjon@gmail.com',NULL,1,2,'/images/user_avatars/2151045094.png','$2y$10$uFsz1X4ler0NvFatVSAQgerwLnMSUHJ7Q7PDWAdsEB1oHYoZufit6',NULL,'2020-12-17 16:19:15','2020-12-17 16:19:15',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
