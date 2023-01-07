import { NextApiRequest, NextApiResponse } from "next";
import isEmpty from "validator/lib/isEmpty";

import connectToMySQL from "../../../utils/conn";
import { secureString } from "../../../ts/tools";

const verifyInputs = (english: { titleEN: string; descriptionEN: string; mapSource: string; mapLink: string; locationEN: string; categoryEN: string; }, arabic: { titleAR: string; descriptionAR: string; locationAR: string; categoryAR: string; }): boolean => {
    return (
        isEmpty(english.titleEN) || isEmpty(english.descriptionEN) || isEmpty(english.mapSource) ||
        isEmpty(english.mapLink) || isEmpty(english.locationEN) || isEmpty(english.categoryEN) ||
        isEmpty(arabic.titleAR) || isEmpty(arabic.descriptionAR) || isEmpty(arabic.locationAR) ||
        isEmpty(arabic.categoryAR)
    );
}

const newItem = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    
    if (req.method !== "POST") {
        return res.status(400).json({
            msg: "bad request",
        });
    }

    const conn = connectToMySQL();

    if (!conn) {
        return res.status(500).json({
            msg: "Can't connect to database"
        });
    }
    try {
        const {
            arabic,
            english,
        } = req.body;

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
        
        if (verifyInputs(english, arabic)) {
            throw new Error("Make sure to fill all fields");
        }

        const insertEnglishHistory = `
            INSERT INTO historicalen (title, description, link_to_read_more, image, map_source, map_link, location, category, status) VALUES ('${english.titleEN}', '${english.descriptionEN}', '${english.linkToReadMore}', '${english.image}', '${english.mapSource}', '${english.mapLink}', '${english.locationEN}', '${english.categoryEN}', ${english.status})
        `;

        const insertArabicHistory = `
            INSERT INTO historicalar (title, description, link_to_read_more, image, map_source, map_link, location, category, status) VALUES ('${arabic.titleAR}', '${arabic.descriptionAR}', '${english.linkToReadMore}', '${english.image}', '${english.mapSource}', '${english.mapLink}', '${arabic.locationAR}', '${arabic.categoryAR}', ${english.status})
        `;

        conn.query(insertEnglishHistory, (err) => {
            if (err) {
                throw new Error("Invalid to insert");
            }
        });

        conn.query(insertArabicHistory, (err) => {
            if (err) {
                throw new Error("Invalid to insert");
            }
        });

        return res.status(200).json({
            msg: "New item added successfully",
        })
    }
    catch (e: any) {
        console.log(e.message);
        
        return res.status(400).json({
            msg: e.message
        });
    } 
}

export default newItem;