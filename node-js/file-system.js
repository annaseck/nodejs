const fs = require("fs");

fs.writeFile("./welcome.txt", "Hello Node", () => {
    console.log('fichier créer avec succès');    
});

//lecture du fichier
fs.readFile("./welcome.txt",(err, data)=>{
    if(err){
        console.log(err);       
    }else{
        console.log(data.toString());        
    }
});