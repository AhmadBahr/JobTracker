# Job Application Tracker

A portfolio-ready Angular application for tracking job applications through their lifecycle. Angular frontend with a Java Spring Boot backend using PostgreSQL and Hibernate.

## Features

- **Dashboard** – Overview with application counts by status and recent applications
- **Applications list** – View all applications with filters (status) and search (company/position)
- **Add/Edit application** – Form with validation (company, position, status, date, notes, URL, salary)
- **Application detail** – View full details with Edit and Delete
- **Empty state** – Friendly message when no applications exist
- **Status badges** – Visual indicators for Applied, Interview, Offered, Rejected
- **Persistent storage** – PostgreSQL database with Hibernate ORM

## Tech Stack

- **Frontend**: Angular 21 (standalone components), RxJS, Reactive Forms
- **Backend**: Java 17, Spring Boot 3.2, Spring Data JPA, Hibernate
- **Database**: PostgreSQL

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Java 17+
- Maven 3.8+
- PostgreSQL 14+

### 1. Database

Create the database:

```sql
CREATE DATABASE jobtracker;
```

### 2. Backend

```bash
cd backend
mvn spring-boot:run
```

API runs at http://localhost:8080

### 3. Frontend

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Build

```bash
npm run build
```

Output is in `dist/`.

## Project Structure

```
src/app/
├── models/
│   └── application.model.ts    # JobApplication interface
├── services/
│   └── application.service.ts  # HTTP client for backend API
├── components/
│   ├── layout/
│   ├── dashboard-stats/
│   ├── application-list/
│   ├── application-detail/
│   └── application-form/
├── pages/
│   ├── dashboard/
│   ├── application-list-page/
│   ├── application-form-page/
│   └── application-detail-page/
└── app.routes.ts
```

## Backend

The Java backend (`backend/`) provides a REST API. See [backend/README.md](backend/README.md) for setup and configuration.

## License

MIT
