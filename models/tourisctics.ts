const createTouristicEN: string = `
    CREATE TABLE IF NOT EXISTS touristicen (
        id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link_to_read_more TEXT NOT NULL,
        image longblob NOT NULL,
        map_source TEXT NOT NULL,
        map_link TEXT NOT NULL,
        location VARCHAR(100) NOT NULL,
        category VARCHAR(255) NOT NULL,
        status BOOLEAN NOT NULL
    )
`;

const createTouristicAR: string = `
    CREATE TABLE IF NOT EXISTS touristicar (
        id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link_to_read_more TEXT NOT NULL,
        image longblob NOT NULL,
        map_source TEXT NOT NULL,
        map_link TEXT NOT NULL,
        location VARCHAR(100) NOT NULL,
        category VARCHAR(255) NOT NULL,
        status BOOLEAN NOT NULL
    )
`;

export {
    createTouristicAR,
    createTouristicEN
}