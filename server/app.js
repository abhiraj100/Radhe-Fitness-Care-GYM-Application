import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({
    path: "./config.env",
});
const PORT = process.env.PORT || 4000;

app.use(express.json()); // it is used to parse the data in json format
app.use(express.urlencoded({extended: true})); // it is used to verify which type of data are coming (String, Number)


// use middleware -> cors is used to connect frontend and backend
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));
console.log(process.env.FRONTEND_URL)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router.get("/", (req, res, next) => {
//     res.json({success: true, message: "Everything is Ok!!"})
// });

router.post("/send/mail", async(req, res, next) => {
    const {name, email, message} = req.body;
    if(!name || !email || !message){
        return next(
            res.status(400).json({
                success: false,
                message: "Please provide all details",
            })
        );
    }

    try {
        await sendEmail({
            email: "yadavabhi6664@gmail.com",
            subject: "RADHE FITNESS CARE CONTACT",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

// router middleware to use the router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening at PORT : http://localhost:${PORT}`);
});
