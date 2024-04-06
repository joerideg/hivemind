CREATE TABLE IF NOT EXISTS Notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content VARCHAR(100) UNIQUE NOT NULL
);

insert into Notes (title content)
  values ("My Note", "This is joeri's note")
