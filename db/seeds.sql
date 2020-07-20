USE organeyez_db;

SELECT * FROM events;
SELECT * FROM articles;
SELECT * FROM links;
SELECT * FROM feedbacks;
SELECT * FROM users;
INSERT INTO events (title, start, groupId, location, type, createdAt, updatedAt) VALUES ("title", "2020-07-18","organization", "location", "type", "2020-01-01", "2020-01-01");
INSERT INTO events (title, start, groupId, location, type, createdAt, updatedAt) VALUES ("title2", "2020-07-20","organization2", "location2", "type2", "2020-01-01", "2020-01-01");
INSERT INTO articles (article_title, createdAt, updatedAt) VALUES ("sdfasfd", "2020-01-01", "2020-01-01");
INSERT INTO links (link_title, createdAt, updatedAt) VALUES ("sdfasfd", "2020-01-01", "2020-01-01");
INSERT INTO users (email, password, createdAt, updatedAt) VALUES ("email1@email.com", "$2a$10$44L3TaeZ5exRdzHNf3Ho0.ZBptXbqntx5knPXDuSZb1bdcJE/edky", "2020-01-01", "2020-01-01");