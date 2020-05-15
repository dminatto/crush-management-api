import * as express from 'express';
import database from './db';
import controller from './controller';
import * as bodyparser from 'body-parser';

class App {
    public app: express.Application;
    private database: database;
    private controller: controller;


    constructor() {

        this.app = express();
        this.middleware();
        this.database = new database();
        this.database.createConnection();
        this.controller = new controller();
        this.routes();
    }

    middleware() {
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}))
    }

    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({ "result": "Hello" }));
        this.app.route('/api/crushs').get((req, res) => this.controller.getCrushs(req, res));
        this.app.route('/api/crushs/:id').get((req, res) => this.controller.detalhaCrush(req, res));
        this.app.route('/api/crushs').post((req, res) => this.controller.createCrush(req, res));
        this.app.route('/api/crushs/:id').put((req, res) => this.controller.updateCrush(req, res));
        this.app.route('/api/crushs/:id').delete((req, res) => this.controller.deletaCrush(req, res));
    }
}

export default new App();