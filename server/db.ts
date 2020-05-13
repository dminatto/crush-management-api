import * as mongoose from 'mongoose';

class DataBase{

    private dburl = 'mongodb://localhost:27017/crush';
    private dbconnection;

    constructor(){}

    createConnection(){
        mongoose.connect(this.dburl);
        this.looger(this.dburl);
    }


    looger(uri){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('moongose está conectado'));
        this.dbconnection.on('error', ereor => console.error.bind(console, 'Erro na conexao: ' + ereor));
    }
}

export default DataBase;