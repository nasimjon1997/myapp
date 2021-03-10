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
(1,'Department 1','Apple department','a','2016-10-31 10:34:19','2020-12-25 00:27:04',1),
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
('046b90bd5c1cd865ab28a27f336926393d179f38d87f00266e8a9aad9b8933e090c6a542aa509e78',5,4,NULL,'[]',1,'2020-12-25 22:31:57','2020-12-25 22:31:57','2021-12-25 22:31:57'),
('06da397c551cedb7a34096d3462ab79dc0f392c4931f69b6ed9b4943927345161cff5b2fef25a380',1,4,NULL,'[]',1,'2020-12-25 21:55:32','2020-12-25 21:55:32','2021-12-25 21:55:31'),
('08b0184dd92f4762d512cce7e213c562db1eba854f9e120b24df847613e3938f59cdcea1a2830868',1,4,NULL,'[]',1,'2020-12-25 21:15:55','2020-12-25 21:15:55','2021-12-25 21:15:55'),
('0d65fd22c0a0f5b362750933e706f3f226947c44b091935d91e5fa87354a8d0694fc1beee0f53453',1,4,NULL,'[]',0,'2020-12-21 14:47:39','2020-12-21 14:47:39','2020-12-22 14:47:38'),
('0ea7d8e1c9ef5f5e9c686fd9d1ad27e3176800d1304c0c2a558052c8fd423cb30af331661324e0ac',1,4,NULL,'[]',0,'2020-12-26 00:29:10','2020-12-26 00:29:10','2021-12-26 00:29:08'),
('13c745bf29e162c20a33dd83605108ea08c4573e3f0c69973cd860f14c46664d195af2e9d4b202ed',1,4,NULL,'[]',0,'2021-01-02 17:58:46','2021-01-02 17:58:46','2022-01-02 17:58:44'),
('13e6ca931079447cee028822d1bc2a2f73b324bdc3a9b2a8ac87766e667967ae849a1fd40fa1be2a',1,4,NULL,'[]',0,'2020-12-25 22:31:16','2020-12-25 22:31:16','2021-12-25 22:31:16'),
('16cc0c9e3e7ee5687e07adaf41b193e9f10b797e726cf40abb8df362c0fc9ce78177e60335cbe537',4,4,NULL,'[]',0,'2020-12-25 22:48:29','2020-12-25 22:48:29','2021-12-25 22:48:29'),
('1c470aaccb1c50dd6be259eb929c0f93deb0043075df21ae4f39f86855060affd5cf241b94198714',1,4,NULL,'[]',0,'2020-12-30 09:48:16','2020-12-30 09:48:16','2021-12-30 09:48:15'),
('1ec38c4c93d87f3a671a06a34b90662a2a76d35297fc0aac9aa3b5ef5b1543d53f293fcbffdd6bfe',1,4,NULL,'[]',0,'2020-12-31 09:27:46','2020-12-31 09:27:46','2021-12-31 09:27:45'),
('2184af6d221a703857e6f98e739c97363b0b156d81f26cd85f7ab82fe22bd51c366bfe897b5fcd4c',1,4,NULL,'[]',0,'2020-12-09 23:18:40','2020-12-09 23:18:40','2020-12-10 23:18:37'),
('2352fb181df04130a32cd3ed88603529a7ef50964d46845dbcaa1e5057c27b38f68cbe52df2c4f91',5,4,NULL,'[]',1,'2020-12-25 22:51:16','2020-12-25 22:51:16','2021-12-25 22:51:16'),
('2df8612d772d079771f19b795843000b25b1a167f5bf101d2547c1ee17cdeac511c94964ea960744',1,4,NULL,'[]',1,'2020-12-25 22:58:39','2020-12-25 22:58:39','2021-12-25 22:58:39'),
('2e35868a2d93ec0affb561e7d35e5e1c23ab7149ee2d0f5064396811138169ab624d2c4d859ff443',1,4,NULL,'[]',1,'2020-12-24 14:27:15','2020-12-24 14:27:15','2020-12-25 14:27:13'),
('2f98333da715dfcca70450b9ac1d2a787402d62cf2db67986d54351e83a599cfb15986d0c506dcc0',1,4,NULL,'[]',0,'2020-12-25 21:49:17','2020-12-25 21:49:17','2021-12-25 21:49:17'),
('2feb6ae8cf23d108603bc5cd4c98a85ee8229c3c1ac8fcfe63894d733313d129a1c6a16771d2b06b',1,4,NULL,'[]',0,'2020-12-25 11:44:27','2020-12-25 11:44:27','2021-12-25 11:44:27'),
('340dc25e85624345a053f22457b5d75e19d726e6369c80b53247a90693111df2b41c5a7a9f09482e',2,4,NULL,'[]',1,'2020-12-29 12:20:37','2020-12-29 12:20:37','2021-12-29 12:20:37'),
('3b200de7d8197ae5e56138d3b192e8fda21c110d64d8504e956d913851331773685579cbcaeb83bd',1,4,NULL,'[]',0,'2020-12-30 11:01:15','2020-12-30 11:01:15','2021-12-30 11:01:15'),
('3b29cab13d72ffde1e1cb2448976ab210b7ff50d45c60026a489b7a911792a992d069a3cc8ea9185',4,4,NULL,'[]',1,'2020-12-25 22:48:47','2020-12-25 22:48:47','2021-12-25 22:48:47'),
('4561a91c8bc2da481f4524ae4a265bb56f7b0020e33fcba1645ac1956027065b3b37e23d58bcad85',1,4,NULL,'[]',0,'2020-12-29 12:26:42','2020-12-29 12:26:42','2021-12-29 12:26:41'),
('4ae662214569a63e5f09c929242aae48c2641346a127c62b3d452900ff174f1ff96585867eae0c8e',1,4,NULL,'[]',1,'2020-12-24 12:11:27','2020-12-24 12:11:27','2020-12-25 12:11:27'),
('4c62906cff8f4f2d65e1586ef641953dab2544fbbdbab23333d3b6da3d7ab0e6310b65423d9c457a',2,4,NULL,'[]',0,'2020-12-26 00:57:00','2020-12-26 00:57:00','2021-12-26 00:57:00'),
('4f7b634363ed75991b55a54df4828b14d83a81e0a05806fdd99ee51365ee178489aa8f642a95cf66',1,4,NULL,'[]',1,'2020-12-25 22:53:34','2020-12-25 22:53:34','2021-12-25 22:53:34'),
('4fea7de31fc29262761a292e298ae2cc798bb3524c6c9eec63206c93e4edd6708cab7b49a20a9af3',1,4,NULL,'[]',1,'2020-12-26 01:05:51','2020-12-26 01:05:51','2021-12-26 01:05:51'),
('50f5dcb957c3e88d69d36dc25d2c7efaaf5d37afd8969523e184510033b1b93a14b6a898cda84bcb',1,4,NULL,'[]',1,'2020-12-29 10:37:20','2020-12-29 10:37:20','2021-12-29 10:37:20'),
('52c3672a1c212b208217670b0690c2971f414304a18e7bdd24e6ac6fee59b64f69327f970243d223',1,4,NULL,'[]',0,'2020-12-22 15:02:48','2020-12-22 15:02:48','2020-12-23 15:02:47'),
('5412df9233854c977ed3225cb6f074444f5f0ac6ba90a738b066bed957b1b2cb9afde64d822013aa',1,4,NULL,'[]',0,'2020-12-26 00:36:51','2020-12-26 00:36:51','2021-12-26 00:36:51'),
('6190f0c28323c871696bcb531d3a41b081969079156638969db89c77c8f2afef1284b2a7fb2da57b',1,4,NULL,'[]',0,'2020-12-25 14:05:16','2020-12-25 14:05:16','2021-12-25 14:05:12'),
('6a5ed98b199b416e6a4b3c3b108b982425b5a9883b572beeb47ce990bd51bc2a2b777e991b4da010',2,4,NULL,'[]',0,'2020-12-26 00:58:44','2020-12-26 00:58:44','2021-12-26 00:58:43'),
('6cf1d3e3589483433db9734b2ef8a18b412cdf08b197927afa9affabd313b0be61fd2abd784c3169',1,4,NULL,'[]',0,'2020-12-11 13:53:40','2020-12-11 13:53:40','2020-12-12 13:53:40'),
('707e8972c8d0bcf02c54ff3647383f53186961f03d430a1638a7919b7d1d23ff1178f6c3d44722ed',5,4,NULL,'[]',0,'2020-12-25 22:30:54','2020-12-25 22:30:54','2021-12-25 22:30:54'),
('716546c1e63a78aa997b404af88144ea6d91e138ff38b3f804b9afada593e9f5a14b7b02a0e6af23',1,4,NULL,'[]',0,'2020-12-09 14:12:35','2020-12-09 14:12:35','2020-12-10 14:12:35'),
('730b2ffd7d58eb31d4abcae53cf543aa68ec3ef8cfeb9208e87914609e746510f9acd63d26de39af',1,4,NULL,'[]',0,'2020-12-25 21:47:16','2020-12-25 21:47:16','2021-12-25 21:47:15'),
('7a131ea823c4feaf101a29b9c5237cdab01d7468bff18a07812570512198a1ce5694e62c711b2e80',1,4,NULL,'[]',0,'2020-12-29 12:22:23','2020-12-29 12:22:23','2021-12-29 12:22:23'),
('7b8dc789bb91533b55dc07d8aafb87375cc87d6829d29a3757169527c232bda0998fe076980df11b',1,4,NULL,'[]',1,'2020-12-26 08:20:32','2020-12-26 08:20:32','2021-12-26 08:20:31'),
('801b3b453d27cfafc3defd88fe9df35a04ada99d58b44c249b9151750719d33aed9dc45fd6c2fb10',1,4,NULL,'[]',0,'2020-12-24 14:28:24','2020-12-24 14:28:24','2020-12-25 14:28:24'),
('808f2677cfa0991f5bdc44e57bfa875cc03acfed81fb612c81a3eb9138c7871789627e62cc2197e2',1,4,NULL,'[]',1,'2020-12-26 08:19:25','2020-12-26 08:19:25','2021-12-26 08:19:24'),
('8306d42ed9453d2a5bb7b33ef322d35be2cba06fd405f83dcb397ac19e521c89104fdfe2bd1b88a9',2,4,NULL,'[]',1,'2020-12-25 22:24:44','2020-12-25 22:24:44','2021-12-25 22:24:43'),
('839dad97a90bd09ed8da7ee335932f11a46a73bc65cad53512df8fb80922c377ad9548c5c88bb20b',4,4,NULL,'[]',1,'2020-12-25 22:52:36','2020-12-25 22:52:36','2021-12-25 22:52:35'),
('96319838ee32b07cfea4d8bfe723000814c84d045b2560b0c8cc6554b6cf80565e3aecfbe5ac2b22',1,4,NULL,'[]',0,'2020-12-13 20:54:25','2020-12-13 20:54:25','2020-12-14 20:54:23'),
('9f0832614c2f95354ad0156807023feaf25bf31cf156a79cc6e2a9dcdbc3699c2317cef5fae91eeb',1,4,NULL,'[]',0,'2020-12-16 09:05:15','2020-12-16 09:05:15','2020-12-17 09:05:09'),
('9f34fe3d482264551b555c89251b203f7f9c9126b67d26f9b258f54d008dae4d1f35c9f4ea38ec9d',1,4,NULL,'[]',1,'2020-12-25 17:55:12','2020-12-25 17:55:12','2021-12-25 17:55:10'),
('a7805609271ea1f7d11d4c66875778ff4b2ef41ec49300a4bfa7689016d281c5c47f348b1e4449ef',1,4,NULL,'[]',0,'2020-12-25 23:54:30','2020-12-25 23:54:30','2021-12-25 23:54:30'),
('a7d5fe594da709b8ea82c9359fa0b3256dddcd947b28e135030299e479bcb2590c019105862be1d4',1,4,NULL,'[]',0,'2020-12-11 13:21:12','2020-12-11 13:21:12','2020-12-12 13:21:12'),
('a9658c6e2b6e69ccbcd3e269abe07db4c5c0ff56151a775d572b6c2a49992f5f22e844c3a173dc70',1,4,NULL,'[]',0,'2020-12-11 13:53:22','2020-12-11 13:53:22','2020-12-12 13:53:22'),
('ae14a36172fd8e810a33d71406aa3015abde00f2a1b3786008fb92a9b8ad241f2ebfdfac7a5e7b6e',1,4,NULL,'[]',0,'2020-12-29 20:54:35','2020-12-29 20:54:35','2021-12-29 20:54:35'),
('b4ec6fbca337dc956cc2c02cc0486dc5257516e20366a7fd20e92ed3f2e2e7cf3bfafec54a69282a',1,4,NULL,'[]',0,'2020-12-26 00:30:06','2020-12-26 00:30:06','2021-12-26 00:30:06'),
('bac7287e34a8cad2b27ecf8cdd65aee4846752cc566bdaa99b05d245f68d71d15007f87b2ea2a364',5,4,NULL,'[]',0,'2020-12-25 22:59:20','2020-12-25 22:59:20','2021-12-25 22:59:20'),
('bb0ff7f2cf45cfead6a59d8ccafe8abce02ccfef390ce9dc770818e2e65feae72b6b6f6019ba382d',1,4,NULL,'[]',0,'2020-12-25 23:54:28','2020-12-25 23:54:28','2021-12-25 23:54:26'),
('bb1e8735ce63ca2c8355fa87787f66acbb4904fb10d33e3876fdf671f45ad397c82619e9d974d285',5,4,NULL,'[]',1,'2020-12-25 22:49:50','2020-12-25 22:49:50','2021-12-25 22:49:50'),
('bdbf6c1f6fc3f2f06837b2b39730ff96f837d0498eddba7c196f09a9a57273c5e0e1aba7665f5d98',1,4,NULL,'[]',1,'2020-12-25 22:31:23','2020-12-25 22:31:23','2021-12-25 22:31:22'),
('bfc687d821683a61dc5db74b8f1a698929672eb1d635feee4ae512b5e31e8b926f21afbbcbf3d765',1,4,NULL,'[]',0,'2020-12-17 10:29:36','2020-12-17 10:29:36','2020-12-18 10:29:36'),
('c18e64b1ebfd385d8a82459fd486456e57c8f4ec55f57d379ef8be68fdc73437ec22c41d87019343',2,4,NULL,'[]',0,'2020-12-29 10:24:27','2020-12-29 10:24:27','2021-12-29 10:24:27'),
('c288aa7cabf316ce66b88dc4fef03bb5dfb542b10e9c796aa101d988bb826df386e53eead1b5bc42',1,4,NULL,'[]',0,'2020-12-18 13:11:54','2020-12-18 13:11:54','2020-12-19 13:11:54'),
('c8beb35ebf249ac5070bee0ce0abdf30bcf862add50715a7660aac3bdf025fd543cd28f9b185a9b9',5,4,NULL,'[]',0,'2020-12-25 22:31:08','2020-12-25 22:31:08','2021-12-25 22:31:08'),
('ca361345b1a2c7c4436a4df8f540de78d22eb9db931f0372043c1db177970a48f13f62d5f8b90494',4,4,NULL,'[]',1,'2020-12-25 22:30:16','2020-12-25 22:30:16','2021-12-25 22:30:16'),
('cab118021e15f8d22f9425b2169804a703adeae5e1eac3e2b8674f60f715a98f763fa33ba66b0a5b',1,4,NULL,'[]',0,'2020-12-21 08:46:55','2020-12-21 08:46:55','2020-12-22 08:46:52'),
('cd632f3bfe376185a188edb83d5fae0955832680d0d349c7ee2b56e97ccf5ba10c46016dc13541c8',1,4,NULL,'[]',1,'2020-12-26 01:27:10','2020-12-26 01:27:10','2021-12-26 01:27:10'),
('d2b9a7a7ae21394957f1aae373bd61a83e605488a9e246c16baf0cfd745b615c780378124bcb5417',1,4,NULL,'[]',1,'2020-12-26 08:26:51','2020-12-26 08:26:51','2021-12-26 08:26:51'),
('d311cd89e28ca09955d981afaedfed3715b5b6a0a9037c43b652e919f316b8b3c25a8a77419ef741',2,4,NULL,'[]',1,'2020-12-25 22:58:55','2020-12-25 22:58:55','2021-12-25 22:58:55'),
('dbe5703639679167a36e8207232ab33408458f321704326bf82a92f7b802e0d243b01526c887279f',1,4,NULL,'[]',0,'2020-12-25 22:57:34','2020-12-25 22:57:34','2021-12-25 22:57:33'),
('defb473548e4d68d8a926505500ac72aac72bfaee35daf0ec0075d971d771bdc5e2c97cd4833eacf',1,4,NULL,'[]',0,'2020-12-23 19:49:38','2020-12-23 19:49:38','2020-12-24 19:49:38'),
('e00058d6fa66a76792cfddb81888f2e4d523426adec732e2f8c21c1f3c48d9853ee64ea877ff3313',4,4,NULL,'[]',1,'2020-12-25 22:53:12','2020-12-25 22:53:12','2021-12-25 22:53:11'),
('e02e3562237904f6ad8e82f8482c5ebcd83e52982dfbb3d615826aa375043d074281b6639dc1b7e9',1,4,NULL,'[]',0,'2020-12-18 10:50:22','2020-12-18 10:50:22','2020-12-19 10:50:21'),
('e631db34b3276299a067ed99106ba9daba1877fac1e44270490eb727349868216e7e5c57d9cfc7e9',4,4,NULL,'[]',0,'2020-12-25 22:53:02','2020-12-25 22:53:02','2021-12-25 22:53:02'),
('e96c92eb02c034c6677d940ee07ab3e42c0da202fc53e638cb0a5b85bc44ceda4e97860dec46e40f',1,4,NULL,'[]',0,'2020-12-25 21:47:36','2020-12-25 21:47:36','2021-12-25 21:47:35'),
('ea30defb7215b700bdbd068f2f36d1d7a849a029520ce6e77991be0ddc439efe8eeba41443e33320',1,4,NULL,'[]',0,'2020-12-25 11:21:46','2020-12-25 11:21:46','2020-12-26 11:21:45'),
('ee22bdedaf5dc20da4b3d826ca798ab178068871d55515e72bc8537580d5b10607283a40d13a3123',5,4,NULL,'[]',0,'2020-12-25 22:51:03','2020-12-25 22:51:03','2021-12-25 22:51:03'),
('eeb9a2ae270c03c94fb7f80d8433d6a107e197dc28e679c19f6e37e3066be07390f87c140c25b615',1,4,NULL,'[]',0,'2020-12-14 16:53:53','2020-12-14 16:53:53','2020-12-15 16:53:49'),
('f84278bef34b3b69eb81c6091e9a48f2312130dc99d4e9e5bebfc25fa4f90984f635fbe928b4dfec',2,4,NULL,'[]',0,'2020-12-25 22:21:26','2020-12-25 22:21:26','2021-12-25 22:21:25'),
('f9ef7b57238da9cc7e8f4e57f6eeb831a30ecfba4e53d6b5fa6abf99ff797b3afa8ea88c291a7798',5,4,NULL,'[]',0,'2020-12-25 22:30:45','2020-12-25 22:30:45','2021-12-25 22:30:45'),
('fbff2ba817ae93059e2be1c507ef0ca698226dba461a1287c80cc4e1057a93f24ab1d016cd862333',4,4,NULL,'[]',1,'2020-12-25 22:59:08','2020-12-25 22:59:08','2021-12-25 22:59:08'),
('fcabfc254d645c8409738fe90b1b45b9929bc5ab0a50e5efc67246babc8e15d6015f72355d3310bf',1,4,NULL,'[]',0,'2020-12-25 23:22:13','2020-12-25 23:22:13','2021-12-25 23:22:10');

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
('0315850790bd95a88f63863afbcb3f115277282a30b12efd78ec1ed5901c6ea32a111457311aef80','e96c92eb02c034c6677d940ee07ab3e42c0da202fc53e638cb0a5b85bc44ceda4e97860dec46e40f',0,'2022-12-25 21:47:35'),
('03ddc295e86e12a4a444d4cfb1a6f153f89d8420aa8e16f54ad9253d41a5626e4d941e24c1f0e8c7','3b200de7d8197ae5e56138d3b192e8fda21c110d64d8504e956d913851331773685579cbcaeb83bd',0,'2022-12-30 11:01:15'),
('083a7380e46b5b9d388074d3330234c30f66705e1634d93856bb0a1cdb8f4979baa8fa37ca08d7fe','50f5dcb957c3e88d69d36dc25d2c7efaaf5d37afd8969523e184510033b1b93a14b6a898cda84bcb',1,'2022-12-29 10:37:20'),
('0c679f08e3046c6e9046b9b54afeefc50af0e872c58747c99edc6e4220b69bec1e9b8c98e483f85a','13e6ca931079447cee028822d1bc2a2f73b324bdc3a9b2a8ac87766e667967ae849a1fd40fa1be2a',0,'2022-12-25 22:31:16'),
('0e7fd08bc3aaf13d009e867dbe9b24c5f42cf032f676903362e3108a99baff2e436e8a9b14a82a33','eeb9a2ae270c03c94fb7f80d8433d6a107e197dc28e679c19f6e37e3066be07390f87c140c25b615',0,'2020-12-24 16:53:49'),
('0f6cda2f1c6b148233043c48b7b348bd219711191f028ad1d6c0d65a9660252099ec32d71e95e819','a9658c6e2b6e69ccbcd3e269abe07db4c5c0ff56151a775d572b6c2a49992f5f22e844c3a173dc70',0,'2020-12-21 13:53:22'),
('174681714aa736a85b39c8afd12c6b9e56393fc475cd12572b3adcaacbe249a066da10bebcbc6190','3b29cab13d72ffde1e1cb2448976ab210b7ff50d45c60026a489b7a911792a992d069a3cc8ea9185',1,'2022-12-25 22:48:47'),
('17c8e155086cc0c8b2a4aa7b5b0532aa3b9eaf8614e7ca385817fedefd84de800d8f23386f606899','6cf1d3e3589483433db9734b2ef8a18b412cdf08b197927afa9affabd313b0be61fd2abd784c3169',0,'2020-12-21 13:53:40'),
('18b4c33a4e160a488b8d23dfb2622a455ee14facc9a7f16c9308cddcf374c86f270d171ff9cbcc94','ca361345b1a2c7c4436a4df8f540de78d22eb9db931f0372043c1db177970a48f13f62d5f8b90494',1,'2022-12-25 22:30:16'),
('18ed52645e9af5fd523db7734a95162a47e8dfdbee674e1b2c2bf0e590d4d69a9e4e7b916ab71513','716546c1e63a78aa997b404af88144ea6d91e138ff38b3f804b9afada593e9f5a14b7b02a0e6af23',0,'2020-12-19 14:12:35'),
('19970d37b6396d4f52313ede54da6b79045cbe5c5d9f4477407b4793b5523cbdd0482ea9a2d180ed','9f0832614c2f95354ad0156807023feaf25bf31cf156a79cc6e2a9dcdbc3699c2317cef5fae91eeb',0,'2020-12-26 09:05:10'),
('26e5cdcf12cf5a32e2084d98495cc5952e3b4a4faad6e94c34c2fa83cdf2a03cb60103ffd89e540c','6190f0c28323c871696bcb531d3a41b081969079156638969db89c77c8f2afef1284b2a7fb2da57b',0,'2022-12-25 14:05:12'),
('27bc7322c4fff966b06c28d6fc6e28b9a8b764fea05c51ced4093a4d71e47bf5e9bb850af7a55b17','1ec38c4c93d87f3a671a06a34b90662a2a76d35297fc0aac9aa3b5ef5b1543d53f293fcbffdd6bfe',0,'2022-12-31 09:27:45'),
('30fcb31878f43ba675831f9aa1a86a10274d8c9daf3948e71290e041773aadb01dabafa2657df5a3','1c470aaccb1c50dd6be259eb929c0f93deb0043075df21ae4f39f86855060affd5cf241b94198714',0,'2022-12-30 09:48:15'),
('34bb1306f6c82e8dff50b23ce08452f72bdfd15c4053308f5379eb5e2222e6181dbac237e95455c0','a7805609271ea1f7d11d4c66875778ff4b2ef41ec49300a4bfa7689016d281c5c47f348b1e4449ef',0,'2022-12-25 23:54:30'),
('350e76f421877c0cdff86dc04dceaa3186470bfafb7795698da2d0eb08992d2d2b76d7a25f231c65','d2b9a7a7ae21394957f1aae373bd61a83e605488a9e246c16baf0cfd745b615c780378124bcb5417',1,'2022-12-26 08:26:51'),
('354b3ed6e6072f6300800cc8643ac0e9c5c9993f7b70ca95b3f33dcdcbdfa00cc8094c776d2691fe','4f7b634363ed75991b55a54df4828b14d83a81e0a05806fdd99ee51365ee178489aa8f642a95cf66',1,'2022-12-25 22:53:34'),
('35dd78382557c9d745f20306e47aa6ec839ba408f44b7469f6d113191593049350257baf0b0ae99c','ea30defb7215b700bdbd068f2f36d1d7a849a029520ce6e77991be0ddc439efe8eeba41443e33320',0,'2021-01-04 11:21:45'),
('36607a616715e6ed7a0079e141e47ce570facec0975102e8548ea2b123cbb385f2d4ecfb2db3ba29','cab118021e15f8d22f9425b2169804a703adeae5e1eac3e2b8674f60f715a98f763fa33ba66b0a5b',0,'2020-12-31 08:46:53'),
('3a7398450430c88e77346f2bbfb8edd1ad27a938a3ff4cc3f02738fbc652c6b6d613a6817f5645d3','08b0184dd92f4762d512cce7e213c562db1eba854f9e120b24df847613e3938f59cdcea1a2830868',1,'2022-12-25 21:15:55'),
('3d0b921d36c1be2f529e8da9855d4ab112e0afbb4cf5f20bc43c7a6df41cadf9f4f74285764e0cfe','0ea7d8e1c9ef5f5e9c686fd9d1ad27e3176800d1304c0c2a558052c8fd423cb30af331661324e0ac',0,'2022-12-26 00:29:08'),
('3fe2e8f37a8f38e34f20381e730b2c07e3e6cd47801260081a9c26273ec396cd406b3e0ecb886a70','bb0ff7f2cf45cfead6a59d8ccafe8abce02ccfef390ce9dc770818e2e65feae72b6b6f6019ba382d',0,'2022-12-25 23:54:27'),
('401c63eb0761f1116960c464e672f7f1c87487f50d18ebfd816fd3a177d42792967b4e2605efcdad','340dc25e85624345a053f22457b5d75e19d726e6369c80b53247a90693111df2b41c5a7a9f09482e',1,'2022-12-29 12:20:37'),
('4301df4b2e6a8dbd62b8fef8facaf3727e1bd8611520b53b4e557bc5c14bb656e6269d99617e8c9c','d311cd89e28ca09955d981afaedfed3715b5b6a0a9037c43b652e919f316b8b3c25a8a77419ef741',1,'2022-12-25 22:58:55'),
('4704d93b5f82bd440fdab90fb362e5f2ce472f47eb5742cbb13e3800b767c880ecd7d8d7a0650a5b','06da397c551cedb7a34096d3462ab79dc0f392c4931f69b6ed9b4943927345161cff5b2fef25a380',1,'2022-12-25 21:55:31'),
('4b68b86d3d7a14da8abd2e73f5565c3c0443ffa51837fdad13e958f59e411d6eb1260efabeb5a18c','707e8972c8d0bcf02c54ff3647383f53186961f03d430a1638a7919b7d1d23ff1178f6c3d44722ed',0,'2022-12-25 22:30:54'),
('4c1526540674132681c44725bf8a9fad38e2599a1a6c9de9fbe372d04370ef605dca077dcfbcf52e','2feb6ae8cf23d108603bc5cd4c98a85ee8229c3c1ac8fcfe63894d733313d129a1c6a16771d2b06b',0,'2022-12-25 11:44:27'),
('4ea96a7d14f296a29cda2b8743ef66273012a189b02687515aea3bf2972989d41df940ba361dc4af','839dad97a90bd09ed8da7ee335932f11a46a73bc65cad53512df8fb80922c377ad9548c5c88bb20b',1,'2022-12-25 22:52:35'),
('523b592ae48f363061aa00953054133df546c6f667f3b7f2c6b9f61f0a286a4c5626b8292d409209','b4ec6fbca337dc956cc2c02cc0486dc5257516e20366a7fd20e92ed3f2e2e7cf3bfafec54a69282a',0,'2022-12-26 00:30:06'),
('56769ef2430746b5a11bb72cae623eadd17e9fb1852e7e69f89e6ff5347dde3c0dc48227d94a81a8','4fea7de31fc29262761a292e298ae2cc798bb3524c6c9eec63206c93e4edd6708cab7b49a20a9af3',1,'2022-12-26 01:05:51'),
('579c69b3c9c0e488a614ce4a1685220e1b8adfcffeb54206381dc3e61cad6ba04acf9557e910025c','cd632f3bfe376185a188edb83d5fae0955832680d0d349c7ee2b56e97ccf5ba10c46016dc13541c8',1,'2022-12-26 01:27:10'),
('581b8fdbfcae904550587742910e110fcc98976ef481665f7c58b9560f4f71ca5a4e8ea6e43a3b8f','16cc0c9e3e7ee5687e07adaf41b193e9f10b797e726cf40abb8df362c0fc9ce78177e60335cbe537',0,'2022-12-25 22:48:29'),
('5a75585addd7f0a26f0b3e3ab95e46e1693a5a116902718317c2e97b5ec103cbb176463b3af006b9','e631db34b3276299a067ed99106ba9daba1877fac1e44270490eb727349868216e7e5c57d9cfc7e9',0,'2022-12-25 22:53:02'),
('5ced9f8ba8439368097da003a545209831b22286378c2d0e38a8daaf46d1dbfccfc5aa6b2801528f','a7d5fe594da709b8ea82c9359fa0b3256dddcd947b28e135030299e479bcb2590c019105862be1d4',0,'2020-12-21 13:21:13'),
('5de06aad241473a78a9c8608f8813378ecdf4f0e31f01c339a47402269e89cdddd07b2d9e0a61032','bdbf6c1f6fc3f2f06837b2b39730ff96f837d0498eddba7c196f09a9a57273c5e0e1aba7665f5d98',1,'2022-12-25 22:31:22'),
('6088657ac279a594432479234220299336493c542a1eba3ae80795b27ed9e8178f98884108a0b8a7','bac7287e34a8cad2b27ecf8cdd65aee4846752cc566bdaa99b05d245f68d71d15007f87b2ea2a364',0,'2022-12-25 22:59:20'),
('644c04df835b5dff1b70682467de8ef374d16403c468bf53738333f60ba366824c025f3a0e695395','fbff2ba817ae93059e2be1c507ef0ca698226dba461a1287c80cc4e1057a93f24ab1d016cd862333',1,'2022-12-25 22:59:08'),
('6ba28f2d85f50eb81799bd560cadb4a1cb9943a1d2fae1928b14f399e2c173f3fa6330ab58dcc47e','13c745bf29e162c20a33dd83605108ea08c4573e3f0c69973cd860f14c46664d195af2e9d4b202ed',0,'2023-01-02 17:58:44'),
('6f2662464077a2bfe3abcbe34dea21175117d8f1c60eb660169ac1ec07a2fa5f40997ab177f57c26','4ae662214569a63e5f09c929242aae48c2641346a127c62b3d452900ff174f1ff96585867eae0c8e',1,'2021-01-03 12:11:27'),
('77b600aa2f1f236609a894c6289c5652f8968c3dd31e3609e7ab0d7fa28f382cb741a67d78655e83','2184af6d221a703857e6f98e739c97363b0b156d81f26cd85f7ab82fe22bd51c366bfe897b5fcd4c',0,'2020-12-19 23:18:37'),
('82f67f664d4fa71d20e6216e02716cb549bd011d08e8a0d930559085b36e3ed9d1964b0005558a10','9f34fe3d482264551b555c89251b203f7f9c9126b67d26f9b258f54d008dae4d1f35c9f4ea38ec9d',1,'2022-12-25 17:55:11'),
('8b9e25d02a579d0899a95eaa073ad7606f9cd6d4e745323f7adb50a7f84f13657749672a82bcef4e','bb1e8735ce63ca2c8355fa87787f66acbb4904fb10d33e3876fdf671f45ad397c82619e9d974d285',1,'2022-12-25 22:49:50'),
('9079df6a5f7260d1c1aec3987f25954e15ff3d02d9e263d3fafe6f1d100a3f70463d30b15c07cae5','808f2677cfa0991f5bdc44e57bfa875cc03acfed81fb612c81a3eb9138c7871789627e62cc2197e2',1,'2022-12-26 08:19:24'),
('90ab780175b976324aa0877bc4d1d53598e60fc6a14cc108e723b28924c365808f8f9b903c175985','6a5ed98b199b416e6a4b3c3b108b982425b5a9883b572beeb47ce990bd51bc2a2b777e991b4da010',0,'2022-12-26 00:58:43'),
('91f7f161d0ba4002f158960e75919986f0f64eebcd90e977d74522c91587bc9f68a702682353db1b','e02e3562237904f6ad8e82f8482c5ebcd83e52982dfbb3d615826aa375043d074281b6639dc1b7e9',0,'2020-12-28 10:50:21'),
('92214d57d6ab5f7c6a35521f5c0dc93ee82124ede11edaf6bda927927d770609d93f78299520508b','046b90bd5c1cd865ab28a27f336926393d179f38d87f00266e8a9aad9b8933e090c6a542aa509e78',1,'2022-12-25 22:31:57'),
('95462061eb10b1d1b5dc6dcc554c31dd0f9419b1ff7e9410daf5f41fe82707d6f0b0e2b6b2b89324','ee22bdedaf5dc20da4b3d826ca798ab178068871d55515e72bc8537580d5b10607283a40d13a3123',0,'2022-12-25 22:51:03'),
('959d70b3ba5c8359a98e6c3de988707cc207f1facf7e2d080876f7eb03c9e0c3d307270e49e4f326','ae14a36172fd8e810a33d71406aa3015abde00f2a1b3786008fb92a9b8ad241f2ebfdfac7a5e7b6e',0,'2022-12-29 20:54:35'),
('95ea04d0db91a5ad9eb9fdcc26d3a6b09ca62bf671c221041c647e0f4591f6f2d5b806a90d1c2973','2352fb181df04130a32cd3ed88603529a7ef50964d46845dbcaa1e5057c27b38f68cbe52df2c4f91',1,'2022-12-25 22:51:16'),
('9d717205d8c9a2d4e6c818edd1796ca76dc6ada0e78e9ff6613ae199dc031d4d44aca99820478631','4c62906cff8f4f2d65e1586ef641953dab2544fbbdbab23333d3b6da3d7ab0e6310b65423d9c457a',0,'2022-12-26 00:57:00'),
('9e1b31985eca0252806a458e8057c66bb5ce433717996d0c3286615d705a867be7cf93a1bd165228','5412df9233854c977ed3225cb6f074444f5f0ac6ba90a738b066bed957b1b2cb9afde64d822013aa',0,'2022-12-26 00:36:51'),
('a25b31e9f19737b682dfeaab5d66656a371310fa1a832fd4cd678bd1b2e7d608b3a954c763aa79b9','4561a91c8bc2da481f4524ae4a265bb56f7b0020e33fcba1645ac1956027065b3b37e23d58bcad85',0,'2022-12-29 12:26:42'),
('ad824c8a05e59c1e2cae7ae432c40cd8838afd8523a536e382d44b5b2a5b035657b93309791eaedf','bfc687d821683a61dc5db74b8f1a698929672eb1d635feee4ae512b5e31e8b926f21afbbcbf3d765',0,'2020-12-27 10:29:36'),
('af647bca8478f7fbde3ef81969e606c35c63025656d810095587bb83b658733af5c1bad03ca68ee2','c8beb35ebf249ac5070bee0ce0abdf30bcf862add50715a7660aac3bdf025fd543cd28f9b185a9b9',0,'2022-12-25 22:31:08'),
('ba6e0c9e921c841413815b567df9542f236e7079f384d3b845213cc9d8ce2c844f53c44ac7cdeeae','7a131ea823c4feaf101a29b9c5237cdab01d7468bff18a07812570512198a1ce5694e62c711b2e80',0,'2022-12-29 12:22:23'),
('baa2307ca07871dcde828178576ac7c6f158d538b833d8552d7e87587407706ee4216fffd7d4389a','7b8dc789bb91533b55dc07d8aafb87375cc87d6829d29a3757169527c232bda0998fe076980df11b',1,'2022-12-26 08:20:31'),
('bb1bb175e43b17101f6d9c7d3c41f441b00b2d446509250ab32e9ce211bdbad410a47f4cb9efda33','8306d42ed9453d2a5bb7b33ef322d35be2cba06fd405f83dcb397ac19e521c89104fdfe2bd1b88a9',1,'2022-12-25 22:24:43'),
('be9b5bae2a29bffc3e55411a1a8e54d46d1e8f1c9402edb8aa9859bbe9502be64b2fdc9149557ef9','2df8612d772d079771f19b795843000b25b1a167f5bf101d2547c1ee17cdeac511c94964ea960744',1,'2022-12-25 22:58:39'),
('c0c6d6a3c8e3f17b518e76d69d0b5858a28ea65a119a4f0a588647799434bc20a006121127ca40ce','fcabfc254d645c8409738fe90b1b45b9929bc5ab0a50e5efc67246babc8e15d6015f72355d3310bf',0,'2022-12-25 23:22:10'),
('c22be36a17fe86e842f8b1d0e0658bee00b7f1352d38f8adac9635b868d03864ae72db24f3a8bdef','801b3b453d27cfafc3defd88fe9df35a04ada99d58b44c249b9151750719d33aed9dc45fd6c2fb10',0,'2021-01-03 14:28:24'),
('c35416cad80d2f21f6e74cade012d8c06042a0754a51759f8368e3e46edeb4826eb37d1358a31f01','c288aa7cabf316ce66b88dc4fef03bb5dfb542b10e9c796aa101d988bb826df386e53eead1b5bc42',0,'2020-12-28 13:11:54'),
('c4c51e75d445c429db6f935e5620d4d4c272542ad216d169eb649374fc9925459d71231d26e177cb','dbe5703639679167a36e8207232ab33408458f321704326bf82a92f7b802e0d243b01526c887279f',0,'2022-12-25 22:57:33'),
('d0044a7a6db824578c246b73a29fde0ae4f16a850a99cdd717d98cddf2b9f083641daa06ed06a58b','52c3672a1c212b208217670b0690c2971f414304a18e7bdd24e6ac6fee59b64f69327f970243d223',0,'2021-01-01 15:02:49'),
('d0926354254e7b3375c7a2bc0e5532fa118d41549a506fac14359418179a30a515112beabe979627','730b2ffd7d58eb31d4abcae53cf543aa68ec3ef8cfeb9208e87914609e746510f9acd63d26de39af',0,'2022-12-25 21:47:15'),
('d1714b6ebe9c0bb5e1e11b1aae37d4ce5ecd9cf8f18d55a24f99c83ad228d5360573e276604f8ec0','defb473548e4d68d8a926505500ac72aac72bfaee35daf0ec0075d971d771bdc5e2c97cd4833eacf',0,'2021-01-02 19:49:38'),
('d49d8c1d816f0f898b77aec52787f63fe244cfe352fa8ffbead9cde25791b4b505579959fa43c248','0d65fd22c0a0f5b362750933e706f3f226947c44b091935d91e5fa87354a8d0694fc1beee0f53453',0,'2020-12-31 14:47:38'),
('d88e2302e878584c80018d953621107293ef4179601661e97277714e59c41cb8784ca0a748c7f468','f84278bef34b3b69eb81c6091e9a48f2312130dc99d4e9e5bebfc25fa4f90984f635fbe928b4dfec',0,'2022-12-25 22:21:25'),
('dec238142fcce2b3353fff431fd65377106a39dda1e0d2b7edfefce5d768c3f4a4237b1ccfe4d56a','f9ef7b57238da9cc7e8f4e57f6eeb831a30ecfba4e53d6b5fa6abf99ff797b3afa8ea88c291a7798',0,'2022-12-25 22:30:45'),
('e11c4f0289398daa792ac912fa4ef3aa76e89d8eae80a90aa626bed91ab26b1ad450002e1d88c085','2f98333da715dfcca70450b9ac1d2a787402d62cf2db67986d54351e83a599cfb15986d0c506dcc0',0,'2022-12-25 21:49:17'),
('ec35dcc659dfb39d9fd1aba7114340731056bfbce64324db86f1b32c16bee53406ef819ba150ceda','c18e64b1ebfd385d8a82459fd486456e57c8f4ec55f57d379ef8be68fdc73437ec22c41d87019343',0,'2022-12-29 10:24:27'),
('f0ace5091d49fa2acf0b889ea8559cbc2a7afeec69169067fd6118470d8d3e0418952f4cd56dfd66','96319838ee32b07cfea4d8bfe723000814c84d045b2560b0c8cc6554b6cf80565e3aecfbe5ac2b22',0,'2020-12-23 20:54:23'),
('f570f2be1682b2c7781784c07f78cf51355fc03c32d17b7ef6a4b686921988f4314b5ca41b851af2','2e35868a2d93ec0affb561e7d35e5e1c23ab7149ee2d0f5064396811138169ab624d2c4d859ff443',1,'2021-01-03 14:27:13'),
('fdc858abedcfbdb45b0165222cb38b3e71ea0dd9ed4bd6ae9216a994f568f6718d36f01b5fe807af','e00058d6fa66a76792cfddb81888f2e4d523426adec732e2f8c21c1f3c48d9853ee64ea877ff3313',1,'2022-12-25 22:53:12');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`display_name`,`guard_name`,`created_at`,`updated_at`) values 
(1,'admin','Администратор','web','2020-12-17 09:43:03','2020-12-17 09:43:08'),
(2,'cashier','Касcир','web','2020-12-17 09:43:36','2020-12-17 09:43:41'),
(3,'receiver','Доктор','web','2020-12-17 09:43:36','2020-12-17 09:43:36'),
(4,'display','Экран','web','2020-12-17 09:43:36','2020-12-17 09:43:36');

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

/*Data for the table `token` */

insert  into `token`(`id`,`token_no`,`client_mobile`,`department_id`,`counter_id`,`user_id`,`note`,`created_by`,`created_at`,`updated_at`,`is_vip`,`status`,`sms_status`,`call_status`) values 
(1,'A1',NULL,1,1,4,NULL,1,'2020-12-25 14:47:13','2020-12-25 17:57:02',NULL,1,0,0),
(2,'A2',NULL,1,1,8,NULL,1,'2020-12-25 18:00:08','2020-12-25 18:05:12',NULL,1,0,0),
(3,'A3',NULL,1,1,9,NULL,1,'2020-12-25 19:50:51','2020-12-25 19:51:10',NULL,1,0,0),
(4,'A4',NULL,1,1,10,NULL,5,'2020-12-25 22:37:55','2020-12-25 22:53:45',NULL,1,0,0),
(5,'A5','егноеноен',1,1,11,NULL,5,'2020-12-25 22:40:06','2020-12-25 22:53:49',0,1,0,0),
(6,'B1','егноеноен',2,2,4,NULL,5,'2020-12-25 22:40:33','2020-12-25 22:40:33',0,0,0,0),
(7,'A1',NULL,1,1,8,NULL,1,'2020-12-26 00:53:05','2020-12-26 00:54:29',NULL,1,0,0),
(8,'A2',NULL,1,1,9,NULL,1,'2020-12-26 00:53:34','2020-12-26 00:54:18',NULL,1,0,0),
(9,'C1',NULL,3,3,10,NULL,1,'2020-12-26 00:53:35','2020-12-26 00:53:54',NULL,0,0,0),
(10,'F1',NULL,6,6,11,NULL,1,'2020-12-26 00:53:36','2020-12-26 00:54:03',NULL,0,0,0),
(11,'A3',NULL,1,1,4,NULL,1,'2020-12-26 00:54:42','2020-12-26 00:54:55',NULL,4,0,0),
(12,'A4',NULL,1,1,8,NULL,1,'2020-12-26 01:23:56','2020-12-26 01:24:07',NULL,1,0,0),
(13,'A5',NULL,1,1,9,NULL,1,'2020-12-26 01:24:19','2020-12-26 01:24:31',NULL,0,0,0),
(14,'A1',NULL,1,1,10,NULL,1,'2020-12-29 12:19:52','2020-12-29 12:22:40',NULL,1,0,1),
(15,'C1',NULL,3,0,11,NULL,1,'2020-12-29 12:19:54','2020-12-29 12:19:54',NULL,0,0,1);

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

/*Data for the table `token_setting` */

insert  into `token_setting`(`id`,`department_id`,`counter_id`,`user_id`,`created_at`,`updated_at`,`status`,`is_deleted`) values 
(11,5,4,2,'2020-05-15 14:54:00',NULL,1,0),
(17,2,1,10,'2020-12-16 14:12:10','2020-12-29 15:37:04',1,0),
(19,1,2,8,'2020-12-23 20:47:10','2020-12-29 15:37:20',1,0),
(20,3,3,9,'2020-12-23 20:47:18','2020-12-29 15:37:28',1,0),
(21,4,4,11,'2020-12-24 00:48:01','2020-12-29 15:38:05',1,0),
(22,6,6,4,'2020-12-24 00:48:30','2020-12-24 00:48:30',1,0);

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`email_verified_at`,`status`,`role_id`,`avatar`,`password`,`remember_token`,`created_at`,`updated_at`,`is_deleted`) values 
(1,'Admin','admin@queue-system.tj',NULL,1,1,'/images/user_avatars/5355178713.jpeg','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-07-18 16:18:04','2020-12-17 15:05:29',0),
(2,'Насим Юсупов 1','nasimjon078@gmail.com',NULL,1,2,'/images/user_avatars/9568580466.jpeg','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-15 14:59:25','2020-12-17 15:18:03',0),
(4,'От отказа бронирование','nasimjon078@gmail.ru',NULL,1,3,'/images/user_avatars/1952076180.png','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-17 11:45:31','2020-12-17 15:20:30',0),
(5,'Насим Юсупов','nasimjon07@gmail.com',NULL,1,4,'/images/user_avatars/9090198734.png','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-17 15:21:03','2020-12-17 15:21:03',0),
(6,'Насим Юсупов 3','nasimjon@gmail.com',NULL,1,2,'/images/user_avatars/2151045094.png','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-17 16:19:15','2020-12-17 16:19:15',0),
(8,'От отказа бронирование 1','nasimjon079@gmail.ru',NULL,1,3,'/images/user_avatars/1952076180.png','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-17 11:45:31','2020-12-17 15:20:30',0),
(9,'От отказа бронирование 2','nasimjon071@gmail.ru',NULL,1,3,'/images/user_avatars/1952076180.png','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-17 11:45:31','2020-12-17 15:20:30',0),
(10,'Насим Юсупов 2','nasimjon08@gmail.com',NULL,1,3,'/images/user_avatars/9090198734.png','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-17 15:21:03','2020-12-17 15:21:03',0),
(11,'Насим Юсупов 4','nasimjon09@gmail.com',NULL,1,3,'/images/user_avatars/9090198734.png','$2y$10$gK2yLs2zKggEEbx5HUM5EeTiWVcdXOI7hgzoUvYHpvRrn48C43fYy',NULL,'2020-12-17 15:21:03','2020-12-17 15:21:03',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
