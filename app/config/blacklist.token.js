import fs from 'fs'; 
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blacklistFilePath = path.join(__dirname, '../../utils/blacklist.json');

export const readBlacklist = () => {
    try {
        const data = fs.readFileSync(blacklistFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading blacklist file:', error);
        return [];
    }
};

export const writeBlacklist = (blacklist) => {
    try {
        fs.writeFileSync(blacklistFilePath, JSON.stringify(blacklist, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing to blacklist file:', error);
    }
};