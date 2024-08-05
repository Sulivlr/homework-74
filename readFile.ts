import {promises as fs} from 'fs';

const fileName = './messages/2024-08-05T02:52:05.698Z.txt';

const run = async () => {
  try {
    const data = await fs.readdir(fileName);
    data.forEach(file => {
    console.log(fileName + '/' + file)
    });
  } catch (err) {
    console.error(err)
  }
}

void run();