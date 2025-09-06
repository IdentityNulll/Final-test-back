const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./src/routes/user.routes");
const projectRoutes = require("./src/routes/projects.routes");
const eventRoutes = require("./src/routes/events.routes");

dotenv.config();

const app = express();

// ✅ Enable CORS
app.use(cors());

app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/events", eventRoutes);


// connect DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
