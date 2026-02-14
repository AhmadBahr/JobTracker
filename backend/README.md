# Job Tracker Backend

Spring Boot REST API with PostgreSQL and Hibernate.

## Prerequisites

- Java 21+
- PostgreSQL 14+
- Maven

## Database Setup

Create the database:

```sql
CREATE DATABASE jobtracker;
```

Update `src/main/resources/application.properties` (or create `application-local.properties`) with your PostgreSQL credentials:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/jobtracker
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Run

```bash
mvn spring-boot:run
```

API runs at http://localhost:8080. Endpoints:

- `GET /api/applications` - List all
- `GET /api/applications/{id}` - Get by ID
- `POST /api/applications` - Create
- `PUT /api/applications/{id}` - Update
- `DELETE /api/applications/{id}` - Delete
