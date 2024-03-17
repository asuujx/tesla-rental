# Tesla Renting Service

- [Tesla Renting Service](#tesla-renting-service)
  - [Description](#description)
  - [Goal of the project](#goal-of-the-project)
  - [Decisions](#decisions)
  - [Technologies](#technologies)
    - [Frontend](#frontend)
      - [NPM modules:](#npm-modules)
    - [Backend](#backend)
  - [Installation and Setup Instructions](#installation-and-setup-instructions)
## Description
This project is a fullstack application built for Happy Team as a recruitment task.  

## Goal of the project
Your client has asked you to create a web app for **renting Tesla cars in Mallorca**. They have a few locations (Palma Airport, Palma City Center, Alcudia and Manacor) and people can rent and return the cars at any one of them. They rent all available passenger Tesla models (except the Semi). They will give you exact pricing later; for now, you should use amounts of your choosing. The website should allow you to create a reservation for a Tesla for a specified date range. It should also calculate the total cost of the reservation and store the reservation details in some database.

## Decisions


## Technologies
### Frontend
Frontend part of this application is built using **React.js**, **TypeScript** and **Tailwind CSS**. It is bundled and served using **Vite**.
#### NPM modules:
- **rect-router-dom**: Used for routing within the application
- **react-hook-form**: Used for managing form state and validation
- **validator**: Used for string validation
- **zod**: Used for schema validation
### Backend
- **ASP\.NET Web API**: Used to create RESTful API for the frontend to interact with
- **Entity framework**: Used for data access and interactions with the database
- **MySQL**: Used as the primary database for storing and managing application data.

## Installation and Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/asuujx/tesla-rental.git
   ```
2. **Install frontend dependencies**
   ```bash
   cd tesla-rental/frontend
   npm install
   ```
3. **Setup the database**
4. **Start the servers**
   ```bash
   npm run dev
   dotnet run
   ```