CREATE TYPE books_type_enum AS ENUM (
    'fiction',
    'romance',
    'children',
    'fantasy',
    'mystery',
    'business',
    'personal',
    'all'
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255),
    icon VARCHAR(255)
);

CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    images TEXT[],
    pages INTEGER NOT NULL,
    description TEXT NOT NULL,
    edition VARCHAR(255),
    price NUMERIC(10, 2) NOT NULL,
    discount NUMERIC(5, 2) DEFAULT 0,
    year VARCHAR(4) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id INTEGER NOT NULL,
    num_reviews INTEGER DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES category(id)
);

ALTER TABLE category ADD COLUMN name_enum books_type_enum;

UPDATE category SET name_enum = name::books_type_enum WHERE name IN ('fiction', 'romance', 'children', 'fantasy', 'mystery', 'business', 'personal', 'all');

ALTER TABLE category DROP COLUMN name;
ALTER TABLE category RENAME COLUMN name_enum TO name;

INSERT INTO category (name, color, icon) VALUES
('fiction', '#0063ff', NULL),
('romance', '#00c986', NULL),
('children', '#922aee', NULL),
('fantasy', '#ea7516', NULL),
('mystery', '#d9e00b', NULL),
('business', '#986d1d', NULL),
('personal', '#b93838', NULL),
('all', '#464646', NULL);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    house_number VARCHAR(10) NOT NULL,
    apartment VARCHAR(10),
    postal_code VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL
)

ALTER TABLE users ADD COLUMN role VARCHAR(20) DEFAULT 'USER';
