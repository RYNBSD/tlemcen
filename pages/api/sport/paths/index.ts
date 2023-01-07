import type { historicalInterface } from '../../../../ts/types';

import type { NextApiRequest, NextApiResponse } from 'next';

import conn from '../../../../utils/conn';
import { AR, EN } from '../../../../constants';

type msgType = {
    msg: string,
}

type dataType = {
    items: historicalInterface[],
}

const sportPaths = (
    req: NextApiRequest,
    res: NextApiResponse<dataType | msgType>
) => {

    if (req.method !== "GET") {
        return res.status(400).json({
            msg: "bad request"
        });
    }

    const connection = conn();

    if (!connection) {
        return res.status(500).json({
            msg: 'Failed to connect'
        });
    }

    const options = req.query.language;

    if (!options) {
        return res.status(400).json({
            msg: "bad request"
        });
    }

    if (!(options === AR || options === EN)) {
        return res.status(400).json({
            msg: "bad request"
        });
    }

    let items: historicalInterface[] = [];

    try {

        //console.log(`SELECT * FROM ${options === AR ? "historicalar" : "historicalen"}`);
        

        connection.query(`SELECT * FROM ${options === AR ? "sportpathsar" : "sportpathsen"}`, (err: any, result: historicalInterface[], fields: any) => {
            if (err) throw err;
            items = result;
            //console.log(new Buffer(result[0].image).toString());
            
            return res.status(200).json({
                items,
            });
        }); 
    }
    catch (e) {
        return res.status(500).json({
            msg: 'Error to get historical data',
        });
    }
}

export default sportPaths;