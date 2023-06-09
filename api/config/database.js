require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "database",
  host: process.env.DB_HOST || "locahost",
  dialect: process.env.DB_DIALECT || "mysql",
  define: {
    timestamps: false,
  },
};
