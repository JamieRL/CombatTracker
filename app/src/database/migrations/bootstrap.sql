INSERT INTO user (id, username, password, created_at, updated_at) VALUES
	(1, 'admin', 'admin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO encounter (name, user_id, created_at, updated_at) VALUES
	('Encounter 1', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	('Encounter 2', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	('Encounter 3', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	('Encounter 4', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
	('Encounter 5', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
