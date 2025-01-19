create TABLE book(
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
)

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255),
    icon VARCHAR(255),
);

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

ALTER TABLE category 
ALTER COLUMN name TYPE books_type_enum 
USING name::books_type_enum;
