CREATE TABLE `payment_logs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL DEFAULT 0,
  `subscription_id` INT NOT NULL DEFAULT 0,
  `time` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
  `response` VARCHAR(45) NOT NULL DEFAULT '',
  `response_log` JSON NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `customer_id` (`customer_id` ASC),
  INDEX `subscription_id` (`subscription_id` ASC),
  INDEX `time` (`time` ASC))
DEFAULT CHARACTER SET = utf8;