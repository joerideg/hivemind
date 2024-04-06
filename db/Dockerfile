# Use the official PostgreSQL image as the base
FROM postgres:16

# Copy custom initialization scripts (if any)
COPY init/ /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432

# Start the PostgreSQL server
CMD ["postgres"]

