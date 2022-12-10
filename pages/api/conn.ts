import type { NextApiRequest, NextApiResponse } from 'next';

import mysql from 'mysql';

const connect = () => {
    const conn = mysql.createConnection({
        host: "https://al-assalah.com/wp-admin/",
        user: "Admin",
        password: "TheAdmin@2023$$$",
    });
    
    conn.connect((err) => {
        if (err) {
            console.error(err);
        }
    
        console.log("Connected");

        // conn.query("SELECT * FROM posts", (err, result) => {
        //     if (err) {
        //         console.error(err);
        //     }

        //     console.log(result);
            
        // })
    })

    return conn;
}

export default connect;