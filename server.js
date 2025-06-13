
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoute = require("./routes/contact");
const locationRoute = require("./routes/location");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://admin:Deepshree1704@shekhawat.ejlafw1.mongodb.net/?retryWrites=true&w=majority&appName=shekhawat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/contact", contactRoute);
app.use("/api/location", locationRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
