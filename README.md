## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## DataBase Migrations and Seeding

Set databases configuration in .env file into `api` folder
DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT

Then run `npx sequelize-cli db:migrate` and `npx sequelize-cli db:seed:all` to fill Database with sample data
