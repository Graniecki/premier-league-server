const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

// const DB = require('./models');

// Routers
const clubsRouter = require('./routes/Clubs');
app.use('/clubs', clubsRouter);

// DB.sequelize.sync()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error syncing database:', error.message);
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
