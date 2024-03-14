-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.24-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for sellfish
CREATE DATABASE IF NOT EXISTS `sellfish` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `sellfish`;

-- Dumping structure for table sellfish.cart
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(500) DEFAULT NULL,
  `fish_code` varchar(500) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `purchase_code` varchar(500) DEFAULT NULL,
  `stat` int(11) DEFAULT NULL,
  `purchase_date` datetime DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=249 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table sellfish.cart: ~22 rows (approximately)
INSERT INTO `cart` (`cart_id`, `user_id`, `fish_code`, `price`, `quantity`, `total`, `purchase_code`, `stat`, `purchase_date`) VALUES
	(226, '5', 'CD2024Mar06120336FGE80USDL69', 677, 4, 677, 'CD2024Mar12130358UHA3T5172ZC', 0, '2024-03-12 13:58:51'),
	(227, '5', 'CD2024Mar06120336FGE80USDL69', 677, 4, 677, 'CD2024Mar12140303F9N3I1R0YPC', 0, '2024-03-12 14:03:44'),
	(228, '5', 'CD2024Mar051303585Z6OST2YCMH', 300, 4, 300, 'CD2024Mar12140303862TG3YESNM', 0, '2024-03-12 14:03:52'),
	(229, '5', 'CD2024Mar05140300KS02CYHON8M', 80, 4, 80, 'CD2024Mar121403043O9E7N15TIZ', 0, '2024-03-12 14:04:00'),
	(230, '5', 'CD2024Mar051303585Z6OST2YCMH', 300, 2, 300, 'CD2024Mar12140312E30PFGY92LO', 0, '2024-03-12 14:12:32'),
	(231, '5', 'CD2024Mar05130354RGOILP8MCND', 600, 5, 600, 'CD2024Mar121403123T2YDO5U8AG', 0, '2024-03-12 14:12:45'),
	(232, '5', 'CD2024Mar05130354RGOILP8MCND', 600, 5, 600, 'CD2024Mar12140314C274F39ERND', 0, '2024-03-12 14:14:20'),
	(233, '5', 'CD2024Mar051303585Z6OST2YCMH', 300, 3, 300, 'CD2024Mar121403218HY45KCMN3R', 0, '2024-03-12 14:21:18'),
	(234, '5', 'CD2024Mar05140300KS02CYHON8M', 80, 0, 80, 'CD2024Mar13020354N5TDZ9MF4C0', 0, '2024-03-13 02:54:09'),
	(235, '5', 'CD2024Mar05140300KS02CYHON8M', 80, 1, 80, 'CD2024Mar13030302MRUFL2NYG7Z', 0, '2024-03-13 03:02:06'),
	(236, '5', 'CD2024Mar05140300KS02CYHON8M', 80, 1, 80, 'CD2024Mar13030304952O8YLHAFE', 0, '2024-03-13 03:04:42'),
	(237, '5', 'CD2024Mar05010334ANCRI7G48UL', 500, 3, 500, 'CD2024Mar13040347RMH6EF9GC07', 0, '2024-03-13 04:47:07'),
	(238, '5', 'CD2024Mar05140300KS02CYHON8M', 80, 1, 80, 'CD2024Mar130403500HDL7958KYF', 0, '2024-03-13 04:50:28'),
	(239, '5', 'CD2024Mar06010313M8FU7SN9GRO', 3000, 1, 3000, 'CD2024Mar1314035738ZRT59FSGC', 0, '2024-03-13 14:57:07'),
	(240, '5', 'CD2024Mar05140300KS02CYHON8M', 80, 7, 80, 'CD2024Mar14120311MOG4R3078HL', 0, '2024-03-14 12:11:48'),
	(241, '5', 'CD2024Mar05140300KS02CYHON8M', 80, 7, 80, 'CD2024Mar14120311NCKO4MZT52H', 0, '2024-03-14 12:11:58'),
	(242, '5', 'CD2024Mar05130354RGOILP8MCND', 600, 1, 600, 'CD2024Mar14120316YU7IOR68S4F', 0, '2024-03-14 12:16:38'),
	(243, '5', 'CD2024Mar06120336FGE80USDL69', 677, 1, 677, 'CD2024Mar14120324CY5E4U9FZ0G', 0, '2024-03-14 12:24:54'),
	(244, '5', 'CD2024Mar06120336FGE80USDL69', 677, 2, 677, 'CD2024Mar14120326K0TPC14F6U5', 0, '2024-03-14 12:26:08'),
	(245, '5', 'CD2024Mar06120336FGE80USDL69', 677, 2, 677, 'CD2024Mar14120326MTRE97108ZK', 0, '2024-03-14 12:26:39'),
	(246, '5', 'CD2024Mar06120336FGE80USDL69', 677, 1, 677, 'CD2024Mar141203271EGLC7KM3SI', 0, '2024-03-14 12:27:43'),
	(247, '5', 'CD2024Mar06120336FGE80USDL69', 677, 1, 677, 'CD2024Mar141203324M98IOSC2PF', 0, '2024-03-14 12:32:58'),
	(248, '5', 'CD2024Mar05010334ANCRI7G48UL', 500, 2, 500, 'CD2024Mar142303378CGO4ETRKML', 0, '2024-03-14 23:37:02');

-- Dumping structure for table sellfish.data_table
CREATE TABLE IF NOT EXISTS `data_table` (
  `data_id` int(11) NOT NULL AUTO_INCREMENT,
  `data_name` varchar(50) DEFAULT NULL,
  `data_text` varchar(1000) DEFAULT NULL,
  `data_section` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`data_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table sellfish.data_table: ~3 rows (approximately)
INSERT INTO `data_table` (`data_id`, `data_name`, `data_text`, `data_section`) VALUES
	(1, 'title', '$ell Fish', 'all'),
	(2, 'phone', '09182772', 'all'),
	(3, 'address', 'Himamaylan negros occidental', 'all'),
	(4, 'email', 'tyronemalocon@gmail.com', 'all');

-- Dumping structure for table sellfish.fish
CREATE TABLE IF NOT EXISTS `fish` (
  `fish_id` int(11) NOT NULL AUTO_INCREMENT,
  `fish_code` varchar(200) DEFAULT NULL,
  `fish_name` varchar(1000) DEFAULT NULL,
  `fish_color` varchar(1000) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` varchar(50) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `stat` int(11) DEFAULT NULL,
  `fish_image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`fish_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table sellfish.fish: ~6 rows (approximately)
INSERT INTO `fish` (`fish_id`, `fish_code`, `fish_name`, `fish_color`, `price`, `quantity`, `description`, `date_added`, `stat`, `fish_image`) VALUES
	(5, 'CD2024Mar05010334ANCRI7G48UL', 'test fish', 'blue red yellow', 500, '16', 'desc', '2024-03-05 01:34:25', 0, 'img2024Mar05010334.jpg'),
	(6, 'CD2024Mar05130354RGOILP8MCND', 'Fish2', 'blue yellow orange', 600, '19', 'big', '2024-03-05 13:54:58', 0, 'img2024Mar05130354.jpg'),
	(7, 'CD2024Mar051303585Z6OST2YCMH', 'Long nose', 'gray', 300, '29', 'desc', '2024-03-05 13:58:28', 0, 'img2024Mar05130358.jpg'),
	(8, 'CD2024Mar05140300KS02CYHON8M', 'cute fiesh', 'orange', 80, '21', 'this is a sampple description 4 this is a sampple description 4 this is a sampple description 4 this is a sampple description 4this is a sampple description 4 this is a sampple description 4 this is a sampple description 4', '2024-03-05 14:00:20', 0, 'img2024Mar05140300.jpg'),
	(9, 'CD2024Mar06010313M8FU7SN9GRO', 'Brown fish', 'brown', 3000, '4', 'this is a sample brown fish', '2024-03-06 01:13:50', 0, 'img2024Mar06010313.webp'),
	(10, 'CD2024Mar06120336FGE80USDL69', 'Fish u', 'blue yellow orange', 677, '20', 'dea', '2024-03-06 12:36:28', 0, 'img2024Mar06120336.jpg');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
