import { NextApiRequest, NextApiResponse } from 'next';
import isEmpty from 'validator/lib/isEmpty';

import { isNum } from '../../../../ts/tools';
import connectToMySQL from '../../../../utils/conn';
import { secureString } from '../../../../ts/tools';

type updateHistoricalItemType = {
    msg: string
}

const verifyInputs = (english: { titleEN: string; descriptionEN: string; mapSource: string; mapLink: string; locationEN: string; categoryEN: string; }, arabic: { titleAR: string; descriptionAR: string; locationAR: string; categoryAR: string; }): boolean => {
    return (
        isEmpty(english.titleEN) || isEmpty(english.descriptionEN) || isEmpty(english.mapSource) ||
        isEmpty(english.mapLink) || isEmpty(english.locationEN) || isEmpty(english.categoryEN) ||
        isEmpty(arabic.titleAR) || isEmpty(arabic.descriptionAR) || isEmpty(arabic.locationAR) ||
        isEmpty(arabic.categoryAR)
    );
}


const updateHistoricalItem = (
    req: NextApiRequest,
    res: NextApiResponse<updateHistoricalItemType>,
) => {

    const { id } = req.query;

    if (!isNum.test(id as string)) {
        return res.status(400).json({
            msg: "invalid id",
        });
    }

    const conn = connectToMySQL();

    if (!conn) {
        return res.status(500).json ({
            msg: "Can\'t connect to database",
        });
    }

    const { english, arabic } = req.body;

    english.titleEN = secureString(english.titleEN);
    english.descriptionEN = secureString(english.descriptionEN);
    english.linkToReadMore = secureString(english.linkToReadMore);
    english.mapSource = secureString(english.mapSource);
    english.mapLink = secureString(english.mapLink);
    english.locationEN = secureString(english.locationEN);
    english.categoryEN = secureString(english.categoryEN);
    english.image = secureString(english.image);

    arabic.titleAR = secureString(arabic.titleAR);
    arabic.descriptionAR = secureString(arabic.descriptionAR);
    arabic.locationAR = secureString(arabic.locationAR);
    arabic.categoryAR = secureString(arabic.categoryAR);

    try {
        conn.query(`UPDATE historicalen SET title='${english.titleEN}', description='${english.descriptionEN}', link_to_read_more='${english.linkToReadMore}', map_source='${english.mapSource}', map_link='${english.mapLink}', location='${english.locationEN}', category='${english.categoryEN}', status=${english.status}  WHERE id=${id}`, (err) => {
            if (err) throw new Error("There is an error to update your data!");
        });

        conn.query(`UPDATE historicalar SET title='${arabic.titleAR}', description='${arabic.descriptionAR}', link_to_read_more='${english.linkToReadMore}', map_source='${english.mapSource}', map_link='${english.mapLink}', location='${arabic.locationAR}', category='${arabic.categoryAR}', status=${english.status}  WHERE id=${id}`, (err) => {
            if (err) throw new Error("There is an error to update your data!");
        });

        if (english.image !== '') {
            conn.query(`UPDATE historicalen SET image='${english.image}'`, (err) => {
                if (err) throw new Error("There is an error to update your data!");
            });

            conn.query(`UPDATE historicalar SET image='${english.image}'`, (err) => {
                if (err) throw new Error("There is an error to update your data!");
            });
        }

        return res.status(200).json ({
            msg: "Your item has been updated successfully",
        });
    }
    catch (e: any) {
        return res.status(400).json({
            msg: e.message
        })
    }
}

export default updateHistoricalItem;