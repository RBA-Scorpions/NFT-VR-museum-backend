import { connectDB } from "./db/connectDB.js";
import { app } from "./app.js";


app.get("/nft-vr/service/", (req, res) => {
    return res.status(200).json({ message: "Working" });
});

const startServer = () => {
    connectDB()
        .then(() => {
            app.listen(process.env.PORT || 8000, () => {
                console.log(
                    `Server is running on port: ${process.env.PORT || 8000}`
                );
            });
        })
        .catch((err) => {
            console.log(
                "MongoDB connection error. Please make sure MongoDB is up and running. " +
                err
            );
        });
};

export { startServer };
