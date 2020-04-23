import * as express from 'express';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({"result":  "Hello"}));



    }
}

export default new App();