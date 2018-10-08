const db = require("./index");

const database = "ddshp0nd9oge9";

export const createDatabase = async () => {
  try {
    await db.query(`CREATE DATABASE ${database}`);
    success("successfully created database ", database);
  } catch (err) {
    error("error creating database ", err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.query(`DROP DATABASE IF EXISTS ${database}`);
    success("successfully dropped database ", database);
  } catch (err) {
    error("error dropping database ", err);
  }
};

export const useDatabase = async () => {
  try {
    await db.query(`USE IF EXISTS ${database}`);
    success("successfully using database ", database);
  } catch (err) {
    error("error using database ", err);
  }
};

// user table - creation and deletion (0 is a user, 1 is a business, 2 is a delivery user)

export const createContactUs = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS contactUs
      (
        id SERIAL,
        fullname varchar (50), 
        email varchar (50),
        message varchar (255)
      )
      `
    );
    success("successfully created contactUs table");
  } catch (err) {
    error("error creating contactUs table ", err);
  }
};

export const dropContactUs = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS contactUs`);
    success("successfully dropped contactUs table");
  } catch (err) {
    error("error dropping contactUs table ", err);
  }
};

export const createVisitAfrica = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS visitAfrica
      (
        id SERIAL,
        email varchar (50) UNIQUE 
      )
      `
    );
    success("successfully created visitAfrica table");
  } catch (err) {
    error("error creating visitAfrica table ", err);
  }
};

export const dropVisitAfrica = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS visitAfrica`);
    success("successfully dropped visitAfrica table");
  } catch (err) {
    error("error dropping visitAfrica table ", err);
  }
};

export const createMonthlyDonors = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS monthlyDonors
      (
        id SERIAL PRIMARY KEY,
        name varchar (50),
        lastname varchar (50),
        customerid varchar (50),
        email varchar (50) UNIQUE 
      )
      `
    );
    success("successfully created monthlyDonors table");
  } catch (err) {
    error("error creating monthlyDonors table ", err);
  }
};

export const dropMonthlyDonors = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS monthlyDonors`);
    success("successfully dropped monthlyDonors table");
  } catch (err) {
    error("error dropping monthlyDonors table ", err);
  }
};
