DROP TABLE IF EXISTS users CASCADE;

-- Create Users table

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age SMALLINT NOT NULL,
  gender VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  city VARCHAR(255) NOT NULL, 
  occupation VARCHAR(255) NOT NULL,
  bio TEXT,
  chat_id VARCHAR(255)
);
