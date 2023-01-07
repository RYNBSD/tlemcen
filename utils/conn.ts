import { Connection, MysqlError, createConnection } from "mysql";

import { createHistoricalAR, createHistoricalEN } from "../models/historical";
import { createTouristicAR, createTouristicEN } from "../models/tourisctics";
import { createSportPathsAR, createSportPathsEN } from "../models/sport/paths";

const connectToMySQL = (): Connection | null => {
    const {
        MYSQL_ADMIN_HOST,
        MYSQL_USER,
        MYSQL_DB,
    } = process.env;

    const conn = createConnection({
        host: MYSQL_ADMIN_HOST,
        user: MYSQL_USER,
        password: "",
        database: MYSQL_DB,
    });

    if (!conn) {
        console.error("Failed to connect to database");
        return null;
    }

    try {
        conn.query(createHistoricalEN, (err: MysqlError) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });

        conn.query(createHistoricalAR, (err: MysqlError) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    
        conn.query(createTouristicEN, (err: MysqlError) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });

        conn.query(createTouristicAR, (err: MysqlError) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    
        conn.query(createSportPathsEN, (err: MysqlError) => {
            if (err) {
                console.error(err);
                throw err; 
            }
        });

        conn.query(createSportPathsAR, (err: MysqlError) => {
            if (err) {
                console.error(err);
                throw err; 
            }
        });
    }
    catch (e) {
        return null;
    }

    return conn;
}

export default connectToMySQL;