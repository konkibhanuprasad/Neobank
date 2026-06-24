# NeoBank 360

A full-stack digital banking platform that provides secure account management, transaction tracking, financial budgeting, bill management, EMI calculations, rewards, analytics, and administrative controls.

## Features

- User Authentication and Authorization using JWT
- Secure Account and Transaction Management
- Financial Budget Tracking and Spend Analytics
- Bills and Rewards Management
- EMI Calculation Engine
- User Portfolio Analytics Dashboard
- Admin Dashboard and Monitoring
- RESTful APIs with Spring Boot
- Containerized Deployment using Docker

## Technology Stack

### Frontend
- Angular 15+
- TypeScript
- HTML5
- CSS3
- Bootstrap

### Backend
- Java 17
- Spring Boot 3
- Spring Security
- JWT Authentication
- Hibernate/JPA
- Maven

### Database
- MySQL 8

### DevOps
- Docker
- Git
- GitHub

## System Architecture

UI Layer (Angular)
↓
JWT Authentication
↓
Spring Boot Service Layer
↓
JPA Repository Layer
↓
MySQL Database

## Project Structure

```
Neobank/
├── Frontend/
├── Backend/
├── Database/
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/konkibhanuprasad/Neobank.git
cd Neobank
```

### Backend Setup

```bash
cd Backend
mvn clean install
mvn spring-boot:run
```

### Frontend Setup

```bash
cd Frontend
npm install
ng serve
```

Application URL:

```
http://localhost:4200
```

Backend API:

```
http://localhost:8765
```

## Modules

- Authentication Module
- Account Management
- Transaction Management
- Budget Tracking
- Bills and Rewards Engine
- EMI Calculator
- Analytics Dashboard
- Admin Controls

## Future Enhancements

- UPI Integration
- Email and SMS Notifications
- AI-based Spending Insights
- Investment Tracking
- Mobile Application Support

## Author

**Bhanu Prasad Konki**
- GitHub: https://github.com/konkibhanuprasad
