import mysql from 'mysql2/promise';
import config from '../config.json';

export async function query({ query, values = []}) {
    const dbconnection = await mysql.createConnection({
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password,
        socketPath: config.socketPath
    });
    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        
        return results;
    } catch (error) {
        throw Error(error.message);
    }
}