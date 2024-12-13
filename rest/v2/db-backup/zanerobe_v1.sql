-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 08:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zanerobe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `zanerobe_banner`
--

CREATE TABLE `zanerobe_banner` (
  `banner_aid` int(11) NOT NULL,
  `banner_is_active` int(11) NOT NULL,
  `banner_title` varchar(30) NOT NULL,
  `banner_image` varchar(30) NOT NULL,
  `banner_excerpt` varchar(20) NOT NULL,
  `banner_datetime` varchar(20) NOT NULL,
  `banner_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `zanerobe_category`
--

CREATE TABLE `zanerobe_category` (
  `category_aid` int(1) NOT NULL,
  `category_is_active` int(11) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zanerobe_category`
--

INSERT INTO `zanerobe_category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(1, 1, 'Tees & Back', '', 0),
(3, 1, 'Pants', '2024-12-13 12:27:17', 2024),
(4, 1, 'Hoodie', '2024-12-13 12:27:42', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `zanerobe_clothes`
--

CREATE TABLE `zanerobe_clothes` (
  `clothes_aid` int(11) NOT NULL,
  `clothes_is_active` tinyint(1) NOT NULL,
  `clothes_image` varchar(20) NOT NULL,
  `clothes_title` varchar(30) NOT NULL,
  `clothes_price` int(20) NOT NULL,
  `clothes_category_id` int(11) NOT NULL,
  `clothes_datetime` int(30) NOT NULL,
  `clothes_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zanerobe_clothes`
--

INSERT INTO `zanerobe_clothes` (`clothes_aid`, `clothes_is_active`, `clothes_image`, `clothes_title`, `clothes_price`, `clothes_category_id`, `clothes_datetime`, `clothes_created`) VALUES
(1, 1, 'shirt.jpg', 'Box Tee Oat', 800, 1, 2024, 0),
(3, 1, 'Pants1.jpg', 'adsa', 5678, 0, 2024, 2024),
(4, 1, 'Pants1.jpg', 'adsa', 5678, 0, 2024, 2024),
(5, 1, 'Pants1.jpg', 'adsa', 5678, 0, 2024, 2024),
(6, 1, 'pants.jpg', 'asdas', 34455, 0, 2024, 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zanerobe_banner`
--
ALTER TABLE `zanerobe_banner`
  ADD PRIMARY KEY (`banner_aid`);

--
-- Indexes for table `zanerobe_category`
--
ALTER TABLE `zanerobe_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `zanerobe_clothes`
--
ALTER TABLE `zanerobe_clothes`
  ADD PRIMARY KEY (`clothes_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zanerobe_banner`
--
ALTER TABLE `zanerobe_banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `zanerobe_category`
--
ALTER TABLE `zanerobe_category`
  MODIFY `category_aid` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `zanerobe_clothes`
--
ALTER TABLE `zanerobe_clothes`
  MODIFY `clothes_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
