const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, "client/build")));



const renderAllRoots = (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', index.html));
};
app.get("*", renderAllRoots);

const runServer = () => {
  `server is running on http://localhost:${PORT}`;
};
app.listen(PORT, runServer);
