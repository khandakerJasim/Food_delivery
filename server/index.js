const app = require("./app");
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`the server is running at port ${PORT}`);
});
