CREATE TABLE `Projects` (
	`id` bigint(100) NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`created_on` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Suites` (
	`id` bigint(100) NOT NULL AUTO_INCREMENT,
	`project` bigint(100) NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` varchar(240) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Tests` (
	`id` bigint(100) NOT NULL AUTO_INCREMENT,
	`suite` bigint(100) NOT NULL,
	`name` varchar(100) NOT NULL,
	`browser` int(2) NOT NULL DEFAULT '1',
	`description` varchar(240) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Steps` (
	`id` bigint(100) NOT NULL AUTO_INCREMENT,
	`test` bigint(100) NOT NULL,
	`action` varchar(100) NOT NULL,
	`action_data_1` varchar(100) NOT NULL,
	`action_data_2` varchar(100),
	PRIMARY KEY (`id`)
);

CREATE TABLE `Browsers` (
	`id` int(2) NOT NULL,
	`name` varchar(15) NOT NULL,
	`version` varchar(15) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Suites` ADD CONSTRAINT `Suites_fk0` FOREIGN KEY (`project`) REFERENCES `Projects`(`id`);

ALTER TABLE `Tests` ADD CONSTRAINT `Tests_fk0` FOREIGN KEY (`suite`) REFERENCES `Suites`(`id`);

ALTER TABLE `Tests` ADD CONSTRAINT `Tests_fk1` FOREIGN KEY (`browser`) REFERENCES `Browsers`(`id`);

ALTER TABLE `Steps` ADD CONSTRAINT `Steps_fk0` FOREIGN KEY (`test`) REFERENCES `Tests`(`id`);

