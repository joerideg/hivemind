# Collaborative Notes App

This monorepo contains all the components for a collaborative, multiplayer note taking web application. It is composed of multiple components that work together:

- A Database for storing notes and user data
- CLI for managing the notes and data directly
- Backend servers providing APIs 
- Frontend UIs for interacting with notes
- Docker Compose to run all the services together
- Dockerfiles to build images for each component

## Packages

- `database/` - Database schema and migrations 
- `cli/` - Command line interface tool
- `server/` - Backend web servers (REST API, WebSocket, etc)
- `web/` - Frontend web UIs (React, Vue, etc)

## Architecture

The high-level architecture is:

- CLI manages the database schema migrations
- Backends load/save data in the database
- Frontends communicate with backend APIs

## Setup

1. Clone this repo.
2. Install Docker and Docker Compose.
3. Run `docker compose up` to start all the services.
4. Access the web UI at `http://localhost:3000`

## Deployment 

This app is deployed using the Docker images on Railway.app:

- Push the Docker images to the Railway container registry
- Railway runs the appropriate services based on the image
- Database is provisioned by Railway PostgreSQL service

See the `railway.yml` file for more details.

## License

This project is licensed under the MIT License. See `LICENSE` file for details.

