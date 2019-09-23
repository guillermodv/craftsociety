INSERT INTO `regions` (`id`, `name`, `data_code`)
VALUES
(1, 'Buenos Aires', 'B'),
(2, 'Catamarca', 'K'),
(3, 'Chaco', 'H'),
(4, 'Chubut', 'U'),
(5, 'Ciudad Autónoma de Buenos Aires', 'C'),
(6, 'Córdoba', 'X'),
(7, 'Corrientes', 'W'),
(8, 'Ente Ríos', 'E'),
(9, 'Formosa', 'P'),
(10, 'Jujuy', 'Y'),
(11, 'La Pampa', 'L'),
(12, 'La Rioja', 'F'),
(13, 'Mendoza', 'M'),
(14, 'Misiones', 'N'),
(15, 'Neuquén', 'Q'),
(16, 'Río Negro', 'R'),
(17, 'Salta', 'A'),
(18, 'San Juan', 'J'),
(19, 'San Luis', 'D'),
(20, 'Santa Cruz', 'Z'),
(21, 'Santa Fe', 'S'),
(22, 'Santiago Del Estero', 'G'),
(23, 'Tierra Del Fuego', 'V'),
(24, 'Tucumán', 'T');

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `email`, `mercadopago_customer_id`, `dni`, `password`, `fb_id`, `remember_token`, `created_at`, `updated_at`)
VALUES
(1, '', '', 'testing@gmail.com', '68911140-buMWgPLP7TQaNR', NULL, '$2y$10$j.KG.TYdMThQBNWVG9om3.t3mJ901AvyAGaXOJGhvB/X7Kg1EHbpa', NULL, '', '2017-04-06 16:42:16', '2017-04-06 16:42:16');

INSERT INTO `customers_addresses` (`id`, `customer_id`, `region_id`, `first_name`, `last_name`, `city`, `postcode`, `street1`, `street2`, `floor`, `apartment`, `street_nr`, `poi`, `formated`, `fullname`, `identification_number`, `phone_number`, `created_at`, `updated_at`)
VALUES
	(1, 1, 1, 'test', 'test', 'Castelar', 1714, 'fake', 'fake', '1', 'B', '1234', NULL, NULL, 'test test', '30000000', '1168206820', NULL, NULL);

INSERT INTO `customer_cards` (`id`, `customer_id`, `mercadopago_card_id`, `public_key`, `card_id`, `luhn_validation`, `status`, `date_used`, `card_number_length`, `date_created`, `first_six_digits`, `last_four_digits`, `security_code_length`, `expiration_month`, `expiration_year`, `created_at`, `updated_at`)
VALUES
(1, 1, 'c974705eb1852bd7b8b65ecdbff4e3c4', 'TEST-ac4dcb05-4037-4d53-a9da-ccbd488e9054', '1234', '1', 'active', '2015-04-16 13:06:25', '16', '2015-04-16 13:06:25', 450995, 3704, '3', '6', 2017, '2019-06-24 22:04:48', '2019-06-24 22:04:48');

INSERT INTO `subscriptions` (`id`, `title`, `image`, `price`, `description`, `status`, `frequency`, `frequency_type`, `created_at`, `updated_at`, `plan_id`)
VALUES
(1, 'CraftSociety suscripcion cerveza mensual', '', 1, 'CraftSociety suscripcion cerveza mensual', 'active', 1, NULL, '2017-04-05 16:42:16', '2017-04-05 16:42:16', '1160508ea1b5420fb69ac79d9d15e1bf');

INSERT INTO `customer_subscriptions` (`id`, `customer_id`, `customer_address_id`, `subscription_id`, `mercadopago_subscription_id`, `expired_at`, `status`, `created_at`, `updated_at`)
VALUES
	(4, 1, 1, 1, '1', '2020-12-12', 'authorized', NULL, NULL);

INSERT INTO `subscription_products` (`id`, `subscription_id`, `external_product_id`, `url`, `image`, `title`, `description`, `price`)
VALUES
(1, 1, '1', 'https:://www.craftsociety.com', '', 'Las mejores cervezas de Europa', 'Esta es una coleccion con las mejores cervezas de Europa', 600);

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`)
VALUES
(1, 'Admin', 'admin@craftsociety.com.ar', '$2y$10$a.bVdE08ZebG3Q7tbAYPSO0fVGTPmewbNZotdSuXvHZNiGCOF0Mbi', NULL, '2019-06-24 22:04:47', '2019-06-24 22:04:47');
