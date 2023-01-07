import { NextApiRequest, NextApiResponse } from "next";

import { isNum } from "../../../../../ts/tools";
import connectToMySQL from "../../../../../utils/conn";

type deleteHistoricalItemType = {
    msg: string
}

const deleteSportPathsItem = (
    req: NextApiRequest,
    res: NextApiResponse<deleteHistoricalItemType>
): void => {

    const { id } = req.query;

    if (!isNum.test(id as string)) {
        return res.status(400).json({
            msg: "invalid id",
        });
    }

    const conn = connectToMySQL();

    if (!conn) {
        return res.status(500).json({
            msg: "Can\'t connect to database",
        });
    }

    try {
        conn.query(`DELETE FROM sportpathsen WHERE id=${parseInt(id as string)}`, (err: any) => {
            if (err) throw new Error("Can\'t delete the item");
        });

        conn.query(`DELETE FROM sportpathsar WHERE id=${parseInt(id as string)}`, (err: any) => {
            if (err) throw new Error("Can\'t delete the item");
        });

        return res.status(200).json({
            msg: "Item deleted successfully",
        });
    }
    catch (e: any) {
        return res.status(400).json({
            msg: e.message
        });
    }
}

export default deleteSportPathsItem;