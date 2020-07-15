### Schema
DROP DATABASE IF EXISTS organeyez_db;
CREATE DATABASE organeyez_db;
USE organeyez_db;

CREATE TABLE protests
(
	id INT NOT NULL AUTO_INCREMENT,
	event_title VARCHAR(300) NOT NULL,
	event_date DATETIME NOT NULL,
	event_time DATETIME NOT NULL,
	organization VARCHAR(300) NOT NULL,
	event_loc VARCHAR(300) NOT NULL,
	event_desc VARCHAR(300) NOT NULL,	
	PRIMARY KEY(id)
);

CREATE TABLE events
(
	id INT NOT NULL AUTO_INCREMENT,
	event_title VARCHAR(300) NOT NULL,
	event_date DATETIME NOT NULL,
	event_time DATETIME NOT NULL,
	organization VARCHAR(300) NOT NULL,
	event_loc VARCHAR(300) NOT NULL,
	event_desc VARCHAR(300) NOT NULL,	
	PRIMARY KEY(id)
);

CREATE TABLE dates
(
	id INT NOT NULL AUTO_INCREMENT,
	event_title VARCHAR(300) NOT NULL,
	event_date DATETIME NOT NULL,
	event_time DATETIME NOT NULL,
	organization VARCHAR(300) NOT NULL,
	event_loc VARCHAR(300) NOT NULL,
	event_desc VARCHAR(300) NOT NULL,	
	PRIMARY KEY(id)
);

CREATE TABLE stories
(
	id INT NOT NULL AUTO_INCREMENT,
	article_title VARCHAR(300) NOT NULL,
	article_author VARCHAR(300) NOT NULL,
	article_source VARCHAR(300) NOT NULL,
	article_body VARCHAR(10000) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE vitalInfo
(
	id INT NOT NULL AUTO_INCREMENT,
	article_title VARCHAR(300) NOT NULL,
	article_author VARCHAR(300) NOT NULL,
	article_source VARCHAR(300) NOT NULL,
	article_body VARCHAR(10000) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE localOfficials
(
	id INT NOT NULL AUTO_INCREMENT,
	article_title VARCHAR(300) NOT NULL,
	article_author VARCHAR(300) NOT NULL,
	article_source VARCHAR(300) NOT NULL,
	article_body VARCHAR(10000) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE businesses
(
	id INT NOT NULL AUTO_INCREMENT,
	link_title VARCHAR(300) NOT NULL,
	link_text VARCHAR(500) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE donations
(
	id INT NOT NULL AUTO_INCREMENT,
	link_title VARCHAR(300) NOT NULL,
	link_text VARCHAR(500) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE petitions
(
	id INT NOT NULL AUTO_INCREMENT,
	link_title VARCHAR(300) NOT NULL,
	link_text VARCHAR(500) NOT NULL,
	PRIMARY KEY (id)
);