-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Katharine','Hepburn','04/05/1929', 4);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Frances','McDormand','23/06/1957', 3);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Will','Smith','23/06/1957', 3),
-- ('Matthew','McConaughey','04/11/1969', 1),
-- ('Nicolas','Cage','07/01/1964', 1)

-- SELECT * FROM actors

-- SELECT * FROM actors LIMIT 4

-- SELECT * FROM actors ORDER BY last_name DESC LIMIT 4

-- SELECT * FROM actors WHERE first_name LIKE '%e%'

-- SELECT * FROM actors WHERE number_oscars >= 5

-- UPDATE actors 
-- SET first_name='Maty' 
-- WHERE first_name='Matt' AND last_name='Damon'
-- RETURNING 
--     actor_id,
--     first_name, 
--     last_name,
--     age;

-- UPDATE actors 
-- SET number_oscars=4 
-- WHERE first_name='George' AND last_name='Clooney'
-- RETURNING 
--     actor_id,
--     first_name, 
--     last_name,
--     age,
-- 	number_oscars;

-- ALTER TABLE actors RENAME COLUMN age TO birthdate

-- DELETE FROM actors WHERE actor_id=4
-- RETURNING actor_id, first_name, last_name, number_oscars;

-- SELECT count(*) FROM actors;