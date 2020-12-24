let sys=require("sys"), fs=require("fs");
let sqlite3 = require('sqlite3').verbose();


const DBSOURCE = "db.assignment2tasks"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
     
      console.error(err.message);
      throw err;
    }else{
        console.log('Connected to the SQLite database.')
        
        let install_sql = fs.readFileSync('./src/install_sqlite_tables.sql', 'utf-8').toString();
        install_sql = install_sql.replace("\n","");
    
        const dataArr = install_sql.toString().split(');');
        let x = 10;
        db.serialize(() => {
            db.run('PRAGMA foreign_keys=OFF;');
            dataArr.forEach((query) => {
                tempquery = query.replace(/(\r\n|\n|\r)/gm, "");
                console.log("tempquery.startsWith:" + tempquery.startsWith('--'));
                console.log(tempquery.startsWith('--'));
                if(tempquery && (tempquery.toString().startsWith('--') === false)) {
                    tempquery += ');';
                    console.log('full query:' + query)
                    db.run(tempquery, err => {
                       if(err) {
                           console.log(err.message);
                           throw err;
                       }
                    });
                }
            }); 
            /*db.run(dataArr[0] + ");", err => {
                if(err) {
                    console.log(err);
                    throw err;
                }
            //db.run('COMMIT'); 
            console.log("Commited" );
            });*/
        });
        
    }
});

module.exports = db;