import express from "express";
const reportRouter = express.Router();

reportRouter.get('/', (req, res) => {
    const data = [
        ["States", "Popularity"],
        ["California", 200],
        ["Texas", 300],
        ["New York", 400],
        ["Arizona", 500],
        ["Georgia", 600],
        ["Washington", 700],
    ];
    return res.send(data);
});

export default reportRouter;