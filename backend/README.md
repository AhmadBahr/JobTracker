# Job Tracker Backend

Java Spring Boot API with PostgreSQL and Hibernate.

## Prerequisites

- Java 17+
- Maven 3.8+
- PostgreSQL 14+

## Database Setup

1. Create a PostgreSQL database:

```sql
CREATE DATABASE jobtracker;
```

2. Update `src/main/resources/application.properties` if your PostgreSQL credentials differ:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/jobtracker
spring.datasource.username=postgres
spring.datasource.password=postgres
```

## Run

```bash
cd backend
mvn spring-boot:run
```

API runs at http://localhost:8080

- `GET    /api/applications`     – List all applications
- `GET    /api/applications/:id` – Get by ID
- `POST   /api/applications`     – Create
- `PUT    /api/applications/:id` – Update
- `DELETE /api/applications/:id` – Delete
