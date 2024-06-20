# Microservices Call Management System

## Solution Overview

This solution implements a microservices system to manage phone calls via queues and ring groups. It includes the following components:

1. **Call Service**: Logs call details and determines call handling (queue or ring group).
2. **Queue Service**: Manages call distribution based on the call type.

### Call Service

- **Functionality**: Receives call requests, logs them in the database, and determines the handling method based on the call type (queue or ring group).
- **Technology**: Implemented using NestJS and TypeScript.
- **Endpoints**:
  - `POST /call`: Accepts a new call request and logs it in the database.
- **API Documentation**: Integrated with Swagger for easy API exploration and testing, check `Step 3: Access the Services` below to access swagger.

### Queue Service

- **Functionality**: Consumes messages from Kafka and handles call distribution based on the call type.
- **Technology**: Implemented using NestJS and TypeScript.
- **Message Handling**: Listens to Kafka topics for call requests and processes them accordingly.

### Integration with Kafka

- **Message Broker**: Kafka is used for efficient message queuing between services, ensuring reliable and scalable communication.
- **Topics**: 
  - `callRequests`: Used by the Call Service to send call details to the Queue Service.

### Database

- **Type**: PostgreSQL
- **Purpose**: Stores call logs with details such as caller, receiver, language, and call type.

### Docker

- **Usage**: Docker and Docker Compose are used to containerize the services and manage the multi-container setup, ensuring consistency across development and production environments.

This solution demonstrates a scalable and efficient microservices architecture for handling phone calls via queues and ring groups. The use of Kafka is to handle high concurrency gracefully.

## Running the Project

### Prerequisites

- Docker and Docker Compose installed on your machine.

### Steps

### Step 1: Clone the Repository and Checkout to the solution branch

   ```sh
   git clone <repository-url>
   cd call-service
   git checkout ahmed-affan-solution
   ```
### Step 2: Start the Services

```sh
docker-compose up --build
```
This command will build and start the following services:
- Zookeeper
- Kafka
- Kafka UI (for monitoring Kafka)
- PostgreSQL
- Call Service
- Queue Service

### Step 3: Access the Services

- **Swagger UI for Call Service**: `http://localhost:3000/api`
- **Kafka UI**: `http://localhost:8081`
- **PostgreSQL**: `localhost:5432` (user: `user`, password: `password`, database: `calldb`)

## Environment Variables and Secret Management

 For this coding challenge, environment variables are committed in the code for simplicity. However, in a real-world scenario, the following practices should be adopted:

1. **Environment Files**: Use environment files (`.env`) to store configuration values and secrets, but do not commit these files to version control. Instead, provide a sample configuration file (`.env.example`) without the secret values.

2. **Secret Management Services**: Utilize secret management services such as AWS Secrets Manager or Azure Key Vault.

3. **Environment-Specific Configuration**: Use different environment files or configuration management tools to handle different environments (development, staging, production) with appropriate values.
