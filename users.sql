-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3308
-- Generation Time: Nov 15, 2019 at 10:36 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bde`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `iduser` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `campus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`iduser`, `firstname`, `lastname`, `email`, `campus`, `password`, `role`) VALUES
(1, 'Alix', 'Pouchain', 'apouchain@cesi.fr', 'Lille', '$argon2id$v=19$m=65536,t=4,p=1$dmErzGQ18RcCzDJeW0Mn6A$gHlRhjMuI7Ryy6wuM8ax/vkdZGmOWDQpsce9j3sMvX8', 'CESI'),
(2, 'Erwan', 'Serrure', 'erwan.serrure@viacesi.fr', 'Lille', '$argon2id$v=19$m=65536,t=4,p=1$hxm0y5WE9IJpiosaTvTH7g$rWqsZJvkvcWCVJ8hYb2n1H7dEFD24AjWGC2yRKGCNNw', 'BDE'),
(3, 'Achille', 'Garin', 'achille.garin@viacesi.fr', 'Arras', '$argon2id$v=19$m=65536,t=4,p=1$zGHyIsCPx+e/MFbHtfwpOQ$Y7xaRILoTgeAPC92+ZT/H5/nWczn5r72ZRJL9DUbKhg', 'USER');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
