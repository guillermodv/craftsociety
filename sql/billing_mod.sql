ALTER TABLE `subscription`.`customer_subscriptions`
ADD COLUMN `current_billing` DATE NOT NULL DEFAULT '0000-00-00' AFTER `updated_at`,
ADD COLUMN `next_billing` DATE NOT NULL DEFAULT '0000-00-00' AFTER `current_billing`,
ADD COLUMN `billing_attempts` TINYINT(1) NOT NULL DEFAULT 0 AFTER `next_billing`,
ADD INDEX `current_billing` (`current_billing` ASC),
ADD INDEX `next_billing` (`next_billing` ASC);
