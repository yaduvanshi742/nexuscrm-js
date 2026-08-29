# API Overview

Base URL:

```text
/api
```

## Authentication

```text
POST /api/auth/login
GET  /api/auth/me
```

## CRM Resources

```text
GET    /api/dashboard
GET    /api/contacts
POST   /api/contacts
PUT    /api/contacts/:id
DELETE /api/contacts/:id

GET    /api/companies
POST   /api/companies
PUT    /api/companies/:id
DELETE /api/companies/:id

GET    /api/deals
POST   /api/deals
PUT    /api/deals/:id
DELETE /api/deals/:id

GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id

GET    /api/notes
POST   /api/notes
DELETE /api/notes/:id
```
