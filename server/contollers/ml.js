const queryDatabase = require("../database/connect");
const axios = require("axios");
const optimization = async (req, res) => {
  try {
    // Calling a post request
    let { id } = req.params;
    id = parseInt(id);

    axios
      .get(`https://mindspark-23-ml.onrender.com/ml/optimize/${id}`)
      .then((response) => {
        let data = response.data;
        let solarArray = data.response;
        let query = `
            select * from solar where id in (${solarArray});
        `;
        queryDatabase(query).then((response) => {
          res.status(200).json({ status: true, response });
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  } catch (error) {
    console.log(error);
  }
};

const singleUserIdData = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
            select * from solar where id=${id};
            `;
    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    console.log(error);
  }
};

const forecast = async (req, res) => {
  const array = req.query.attributes;
  axios
    .get(`https://mindspark-23-ml.onrender.com/ml/forecast?attributes=${array}`)
    .then((response) => {
      res.status(200).json({ status: true, response: response.data });
    })
    .catch((error) => {
      console.log({ status: false, error });
    });
};

module.exports = { optimization, singleUserIdData, forecast };
