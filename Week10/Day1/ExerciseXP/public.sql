-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR (50) NOT NULL,
-- 	price INTEGER NOT NULL
-- )

-- CREATE TABLE customers (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (100) NOT NULL
-- )

-- INSERT INTO items (item_name, price)
-- VALUES('Small Desk', 100);
-- VALUES('Large desk', 300);
-- VALUES('Fan', 80);   => didnt work for me, maybe because I had to write VALUE only one time

-- INSERT INTO items (item_name, price)
-- VALUES('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80);

-- SELECT * FROM items => I've added small desk 2 times((( 

-- DELETE FROM items WHERE item_id=1

-- SELECT * FROM items => now its okey and shows only 3 items

-- ALTER TABLE cutomers RENAME TO customers;

-- INSERT INTO customers (first_name, last_name)
-- VALUES('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- SELECT * FROM customers

-- SELECT * FROM items

-- SELECT * FROM items WHERE price > 80

-- SELECT * FROM items WHERE price <= 300

-- SELECT * FROM customers WHERE last_name = 'Smith'
-- why i received smth strange as an outcome?
-- id [PK] integer / first_nme character varying etc.
--  is it because there is no customer whose last name is Smith?

-- SELECT * FROM customers WHERE last_name = 'Jones'

-- SELECT * FROM customers WHERE first_name != 'Scott'

