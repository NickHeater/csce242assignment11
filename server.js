const express = require("express");
const app = express();
app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/rappers', (req,res)=>{
    rappers = [];
    rappers[0]={
        alias:"Young Thug",
        name:"Jeffrey Lamar Williams",
        height:"6ft 3in",
        age:"27",
        albums:["So Much Fun"," Beautiful Thugger Girls"," Slime Season 3"],
        img:"images/young_thug.jpg"
    }
    rappers[1]={
        alias:"Future",
        name:"Nayvadius DeMun Wilburn",
        height:"6ft 2in",
        age:"36",
        albums:["The Wizrd"," Hndrxx"," Future"],
        img:"images/future.jpg"
    }
    rappers[2]={
        alias:"Sahbabii",
        name:"Saaheem Valdery",
        height:"6ft 1in",
        age:"23",
        albums:["SANDAS"," Squidtastic"],
        img:"images/sahbabii.jpg"
    }
    rappers[3]={
        alias:"Lil Keed",
        name:"Raqhid Jevon Render",
        height:"6ft 1in",
        age:"22",
        albums:["Long Live Mexico"," Keed Talk to 'Em"," Trapped On Cleveland 2"],
        img:"images/lil_keed.jpg"
    }
    rappers[4]={
        alias:"Kodak Black",
        name:"Bill K. Kapri",
        height:"5ft 6in",
        age:"22",
        albums:["Dying to Live"," Painting Pictures"," Heart Break Kodak"],
        img:"images/kodak_black.jpg"
    }
    rappers[5]={
        alias:"Yung Bans",
        name:"Vas Coleman",
        height:"6ft 0in",
        age:"20",
        albums:["Misunderstood"," Yung Bans Vol. 5"," Yung Bans Vol. 4"],
        img:"images/yung_bans.jpg"
    }

    res.json(rappers);
});

app.listen(3000,()=>{
    console.log("listening on port 3000")
});