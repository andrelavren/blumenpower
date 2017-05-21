-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Апр 18 2017 г., 16:01
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `db_blumen`
--

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'N',
  `name` varchar(250) NOT NULL COMMENT 'Имя',
  `phone` varchar(16) NOT NULL COMMENT 'Телефон',
  `addr` varchar(250) NOT NULL COMMENT 'Адрес',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'NЗаказа',
  `date` date NOT NULL COMMENT 'Дата',
  `time` time NOT NULL COMMENT 'Время',
  `id_client` int(11) NOT NULL COMMENT 'IDКлиента',
  `comment` text NOT NULL COMMENT 'Комментарий',
  `method` tinyint(1) NOT NULL COMMENT 'СпособДоставки',
  `condition` tinyint(1) NOT NULL COMMENT 'Состояние',
  `status` tinyint(1) NOT NULL COMMENT 'Оплата',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблицы `ord_details`
--

CREATE TABLE IF NOT EXISTS `ord_details` (
  `id_ord` int(11) NOT NULL COMMENT 'NЗаказа',
  `id_prod` int(11) NOT NULL COMMENT 'NТовара',
  `count` int(3) NOT NULL COMMENT 'Кол-во',
  `price` int(10) NOT NULL COMMENT 'Цена',
  `delivery` tinyint(1) NOT NULL COMMENT 'Доставлено'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `price_prod`
--

CREATE TABLE IF NOT EXISTS `price_prod` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
