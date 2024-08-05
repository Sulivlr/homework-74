import {promises as fs} from 'fs';

const fileName = './messages/2024-08-05T02:52:05.698Z.txt';

const date = new Date();

const dataMessage = {
  message: 'Hello Sultan!',
  dateTime: date.toISOString(),
}

const run = async () => {
  try {
    await fs.writeFile(fileName, JSON.stringify(dataMessage, null, 2));
  } catch (err) {
    console.error(err);
  }
};

void run();