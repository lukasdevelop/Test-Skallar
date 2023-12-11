import * as http from 'http';
import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {

  const char = await prisma.characters.create({
    data: {
      name: "maria",
      height: "1.11",
      gender: "male"
    }
  })

  console.log(char)
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('oi oi oi ');
});

const PORT: number = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
