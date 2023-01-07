import { NextApiRequest, NextApiResponse } from "next";

import connectToMySQL from "../../../utils/conn";
import { historicalInterface } from "../../../ts/types";
import { AR } from "../../../constants";
import { secureString, isNum } from "../../../ts/tools";

interface msgInterface {
    msg: string,
}

interface historicalIDInterface {
    item: historicalInterface,
}

const historicalID = (
    req: NextApiRequest,
    res: NextApiResponse<historicalIDInterface | msgInterface>
) => {

    if (req.method !== "GET") {
        return res.status(400).send({
            msg: "bad request",
        });
    }

    const conn = connectToMySQL();

    if (!conn) {
        return res.status(500).send({
            msg: "Can't connect to Database",
        });
    }

    let { id, language } = req.query;

    if (!id || !language) {
        return res.status(400).send({
            msg: "bad request",
        });
    }

    if (!isNum.test(id as string)) {
        return res.status(400).send({
            msg: "invalid id",
        });
    }

    language = secureString(language as string);
    
    try {
        conn.query(`SELECT * FROM ${language === AR ? "historicalar" : "historicalen"} WHERE id=${parseInt(id as string)}`, (err, result) => {
            if (err) throw err;

            if (result == 0) throw new Error("ID is incorrect");

            return res.status(200).send({
                item: result,
            });
        });
    }
    catch (e: any) {
        return res.status(400).send({
            msg: e.message
        });
    }

}

export default historicalID;