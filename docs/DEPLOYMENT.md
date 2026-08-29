# Deployment

NexusCRM JS can be deployed as a Node.js app because the Express server serves both the API and the static client.

## Basic Steps

1. Push the project to GitHub.
2. Add environment variables from `.env.example`.
3. Install dependencies.
4. Run `npm start`.

The local JSON database is useful for development. For production, replace the repository layer with MongoDB, PostgreSQL, or another managed database.
