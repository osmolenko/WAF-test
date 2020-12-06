## Description

WAF test back-end. 

Done:
- TypeORM connection to Postgres
- Hotdog entity, service and repository
- Database migration
- GET, POST and DELETE methods
- 2 DTO objects to validate data

## Installation

```bash
$ nano cd src

# Install dependencies
$ yarn 

# Connect an app to your database
$ nano .env

# Run migrations
$ ts-node ./node_modules/typeorm/cli.js migration:run

# OR

# Turn on synchronization for the first run 
$ nano .env => NJS_SYNC=true

```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
