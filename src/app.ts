import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { config } from './utils/config';
import cors from 'cors';

const app = express();

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
    },
}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('client/build'));


app.listen(config.server.port, () => {
    console.log("Server connected! :: " + config.server.port + "!");
});
