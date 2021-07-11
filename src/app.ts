import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_request: Request, response: Response) => {
  response.send('Hello world');
});

app.listen(5000, () => console.log('Server running'));
