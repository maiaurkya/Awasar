CREATE TABLE `enquiries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `mother_name` varchar(255) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `family_income` varchar(255) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `board_name` varchar(255) NOT NULL,
  `cast_category` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `pin_code` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `news_letter` varchar(255) NOT NULL DEFAULT 'yes',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci