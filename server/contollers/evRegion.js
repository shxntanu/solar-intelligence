const queryDatabase = require("../database/connect");

const regionWiseResult = async (req, res) => {
  try {
    const { evRegion, category } = req.params;
    const query = `
        select ${category}, count(*) as categoryCount
        from EV
        where state='${evRegion}' group by ${category};
        `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

const regionWiseNumericResult = async (req, res) => {
  try {
    const { evRegion, category, numeric } = req.params;
    const query = `
          select ${category}, avg(${numeric}) as average
          from EV
          where state='${evRegion}' group by ${category};
          `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

module.exports = { regionWiseResult, regionWiseNumericResult };
