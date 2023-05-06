## Clone Repository and Set Ready

For clone this repo make `git clone https://github.com/designspublikt/countries_api.git`
Then run `npm i` or `npm install` inside Countries folder and api folder to install libraries and dependecies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. This will load the front application.

Then run `npm run dev` inside the api folder to run the Server on port 3000

## DataBase Migrations and Seeding

Set databases configuration in .env file into `api` folder
DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT

Then run `npx sequelize-cli db:migrate` and `npx sequelize-cli db:seed:all` to fill Database with sample data
