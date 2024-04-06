CREATE TABLE IF NOT EXISTS Notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO Notes (title, content) VALUES ('My Note', 'This is a note from Joeri');
