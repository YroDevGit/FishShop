
CREATE DATABASE IF NOT EXISTS `sellfish` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `sellfish`;

-- Dumping structure for table sellfish.cart
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fish_code` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `purchase_code` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stat` int(11) DEFAULT NULL,
  `purchase_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.cart: ~2 rows (approximately)
INSERT INTO `cart` (`cart_id`, `user_id`, `fish_code`, `price`, `quantity`, `total`, `purchase_code`, `stat`, `purchase_date`, `created_at`, `updated_at`) VALUES
	(1, '5', 'CD2024Mar06120336FGE80USDL69', 677, 4, 677, 'CD2024Mar12130358UHA3T5172ZC', 0, '2024-03-12 13:58:51', NULL, NULL),
	(2, '5', 'CD2024Mar06120336FGE80USDL69', 677, 4, 677, 'CD2024Mar12140303F9N3I1R0YPC', 0, '2024-03-12 14:03:44', NULL, NULL),
	(3, '5', 'CD2024Mar15110330A7FKN80G24E', 300, 2, 300, 'CD2024Mar16120300KSYG0HU53M2', 0, '2024-03-16 12:00:06', NULL, NULL);

-- Dumping structure for table sellfish.data_table
CREATE TABLE IF NOT EXISTS `data_table` (
  `data_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `data_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data_text` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `data_section` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.data_table: ~4 rows (approximately)
INSERT INTO `data_table` (`data_id`, `data_name`, `data_text`, `data_section`, `created_at`, `updated_at`) VALUES
	(1, 'title', '$ell Fish', 'all', NULL, NULL),
	(2, 'phone', '09182772', 'all', NULL, NULL),
	(3, 'address', 'Himamaylan negros occidental', 'all', NULL, NULL),
	(4, 'email', 'tyronemalocon@gmail.com', 'all', NULL, NULL);

-- Dumping structure for table sellfish.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.failed_jobs: ~0 rows (approximately)

-- Dumping structure for table sellfish.fish
CREATE TABLE IF NOT EXISTS `fish` (
  `fish_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fish_code` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fish_name` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fish_color` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `stat` int(11) DEFAULT NULL,
  `fish_image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `shop_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`fish_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.fish: ~3 rows (approximately)
INSERT INTO `fish` (`fish_id`, `fish_code`, `fish_name`, `fish_color`, `price`, `quantity`, `description`, `date_added`, `stat`, `fish_image`, `created_at`, `updated_at`, `shop_id`) VALUES
	(8, 'CD2024Mar15110330A7FKN80G24E', 'fish', 'red', 300, '4', 'descv', '2024-03-15 11:30:26', 0, 'img2024Mar15110330.jpg', NULL, NULL, 5),
	(9, 'CD2024Mar1606030038UA2OTH094', 'fname', 'red', 34, '5', 'desc', '2024-03-16 06:00:00', 0, 'img2024Mar16050359.webp', NULL, NULL, 5),
	(10, 'CD2024Mar1606034813DNTLUR0YO', 'fish13', 'black', 55, '5', 'desc', '2024-03-16 06:48:53', 0, 'img2024Mar16060348.jpg', NULL, NULL, 5);

-- Dumping structure for table sellfish.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.migrations: ~5 rows (approximately)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(5, '2024_03_14_234410_database', 1);

-- Dumping structure for table sellfish.password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.password_reset_tokens: ~0 rows (approximately)

-- Dumping structure for table sellfish.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.personal_access_tokens: ~0 rows (approximately)

-- Dumping structure for table sellfish.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table sellfish.users: ~0 rows (approximately)

-- Dumping structure for table sellfish.user_table
CREATE TABLE IF NOT EXISTS `user_table` (
  `user_id` int(11) DEFAULT NULL,
  `user_name` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table sellfish.user_table: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
