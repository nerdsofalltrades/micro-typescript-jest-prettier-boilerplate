import micro from 'micro';
import * as Url from 'url';
import { IncomingMessage, ServerResponse } from 'http';
import MicroService from './src/micro-service';

async function requestHandler(req: IncomingMessage, res: ServerResponse) {
  const url = Url.parse(req.url, true);
  res.end(MicroService(typeof url.query.name === 'string' ? url.query.name : undefined));
}

micro(requestHandler).listen(process.env.PORT || 3000);
