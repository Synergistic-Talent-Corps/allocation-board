import express, { Application, Request, Response, NextFunction } from 'express';
import * as clientAllocations from "./json/clientAllocations.json";
import * as clients from "./json/clients.json";
import * as consultants from "./json/consultants.json";
import cors from 'cors';

const app: Application = express();

app.use(cors());

app.get('/api/allocations', (req: Request, res: Response, next: NextFunction) => {
    res.send(clientAllocations);
});

app.get('/api/clients', (req: Request, res: Response, next: NextFunction) => {
    res.send(clients);
});

app.get('/api/consultants', (req: Request, res: Response, next: NextFunction) => {
    res.send(consultants);
});


const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
