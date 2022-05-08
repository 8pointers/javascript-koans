import { createServer } from 'http';
import serveStatic from 'serve-static';

const serve = (port) => {
  const server = createServer(serveStatic(__dirname));
  beforeAll(() => server.listen(port));
  afterAll(() => new Promise((resolve) => server.close(resolve)));
  return port;
};

export default serve;
