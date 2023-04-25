import mysql from "mysql";

export const db = mysql.createConnection({
    host: "database-1.c10npwnrjf7w.sa-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin123",
    //database:;
})  