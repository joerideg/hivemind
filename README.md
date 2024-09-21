# Chat App

This repository contains all the components for a realtime chat application. The
application is composed of multiple components that work together:

- Databases for storing chats, users and other data
- Services providing access to the data
- Clients to interact with the services such as web-based UIs
- Containers and tooling to deploy and run all the services together

## Packages

- `servers/` - Backend web servers (REST API, WebSocket, etc)
- `clients/` - Frontend web UIs (React, Vue, etc)

## Setup

1. Clone this repo.
2. Install Docker and Docker Compose.
3. Run `docker compose up` to start all the services.
4. Access the web UI at `http://localhost:3000`

## License

This project is licensed under the MIT License. See `LICENSE` file for details.

## Disclaimer

This project exists for my own learning purposes. I'm using it to learn about
many aspects of software engineering in my personal time. This is open source
just because someone might find it usefull somewhere along the way just by
looking at the code, git log or other aspects of this repository. **Be aware:
any code or component can be broken or insecure at any point in time and might
never get fixed. I offer no support in any form, nor can I be held accountable
for your use of any of this code.** I do welcome any feedback to contents in
this repository purely for my learning process.


# Phases
- Setup web server with integrated database
- Split server and database instance
- Set up a database failover strategy for single database, cold vs warm vs hot standby
- Add frontend client
- Build load balancer and deploy it to work between the client and server so servers can scale horizontally
- Build a Client-Side-Cache layer in the client
- Build a Server-Side-Cache layer in the server 
- Build a sharding layer to scale the database horizontally (use available frameworks / libs)
