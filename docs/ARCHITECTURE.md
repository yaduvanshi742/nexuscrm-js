# Architecture

NexusCRM JS is organized like a scalable business application.

The backend uses route-controller-service-repository separation:

- Routes receive HTTP requests.
- Controllers validate request intent and shape responses.
- Services handle business logic.
- Repositories read and write data.
- Middleware handles authentication, errors, and request safety.

The frontend is split into app, features, services, UI, utils, and styles.

This keeps the code easier to maintain as the CRM grows with more modules such as reports, teams, workspace billing, reminders, email templates, and advanced permissions.
