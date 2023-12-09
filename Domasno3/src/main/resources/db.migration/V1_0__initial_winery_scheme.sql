

CREATE SCHEMA IF NOT EXISTS winary;







CREATE TABLE winary.winary (
                        id BIGSERIAL  PRIMARY KEY,
                        location_name VARCHAR(255) NOT NULL,
                        coordinates VARCHAR(255),
                        latitude DECIMAL(10, 8),
                        longitude DECIMAL(11, 8),
                        registration_number VARCHAR(255) NOT NULL,
                        name VARCHAR(255) NOT NULL

);

