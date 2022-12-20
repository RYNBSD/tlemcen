import { Database, verbose } from 'sqlite3';

const conn = (): Database => {

    const sqlite3 = verbose();
    const db = new sqlite3.Database(`${process.env.TLEMCEN_DB_NAME}`);

    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
    });

    return db;
}

export default conn;