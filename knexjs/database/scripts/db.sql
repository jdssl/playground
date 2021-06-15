-- Create Persons table
CREATE TABLE persons (
	person_id serial PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	age INT NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert persons data
INSERT INTO persons (
	name,
	email,
	age
) VALUES (
	'Balu',
	'balu+1@email.com',
	26
);
