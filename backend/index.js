import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())
let database = [
    {
        "testName": "Math Quiz",
        "testTime": 0.5,
        "notCompleted": true,
        "testContent": [
            {
                "qName": "What is 2 + 2?",
                "correct_answers": [0],
                "options": [
                    "4",
                    "5",
                    "6"
                ]
            },
            {
                "qName": "What is 5 x 3?",
                "correct_answers": [1],
                "options": [
                    "12",
                    "15",
                    "18"
                ]
            }
        ],
        "index": 0
    },
    {
        "testName": "Science Quiz",
        "testTime": 1,
        "notCompleted": true,
        "testContent": [
            {
                "qName": "What is the chemical symbol for water?",
                "correct_answers": [0],
                "options": [
                    "H2O",
                    "O2",
                    "CO2"
                ]
            },
            {
                "qName": "What planet is closest to the Sun?",
                "correct_answers": [0],
                "options": [
                    "Mercury",
                    "Venus",
                    "Earth"
                ]
            }
        ],
        "index": 1
    },
    {
        "testName": "Geography Quiz",
        "testTime": 0.75,
        "notCompleted": true,
        "testContent": [
            {
                "qName": "What is the capital of France?",
                "correct_answers": [0],
                "options": [
                    "Paris",
                    "London",
                    "Berlin"
                ]
            },
            {
                "qName": "Which continent is Egypt located in?",
                "correct_answers": [1],
                "options": [
                    "Asia",
                    "Africa",
                    "Europe"
                ]
            }
        ],
        "index": 2
    }
];


app.get("/getTests", (req, res)=>{
    try{
        res.send(database);        
    } catch (error) {
        res.status(505).json({message: "internal server error"});
    }
});


app.get("/fetchTest/:index", (req, res)=>{
    try{
        const {index} = req.params;
        const test = database.find((data) => (data.index === Number(index)));
        res.status(200).send(test);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "internal server error", error: error});
    }
});


app.post("/createTest", (req, res) => {
    try {
        req.body["index"] = database.length;
        database.push(req.body);
        res.status(200).json({ message: "data received"});
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
});


app.patch("/testOver/:testIndex", (req, res)=>{
    const {testIndex} = req.params; 
    database = [...database.slice(0, testIndex), {...database[testIndex], notCompleted:false}, ...database.slice(testIndex+1)]; 
    res.status(200).json({message: "resource updated"});
});


console.log("starting server....");

app.use((req, res)=>{
    res.status(404).json({message: "cannot find"});
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});