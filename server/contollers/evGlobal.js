const queryDatabase = require("../database/connect");

const region = async (req, res) => {
  try {
    const query = `
        select state,count(*) as regionCount
        from EV
        group by state;
        `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

const categoryWiseResult = async (req, res) => {
  try {
    const { category } = req.params;
    const query = `
          select ${category}, count(*) as categoryCount
          from EV
          group by ${category};
          `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

const categoryWiseNumericResult = async (req, res) => {
  try {
    const { category, numeric } = req.params;
    const query = `
            select ${category}, avg(${numeric}) as average
            from EV
            group by ${category};
            `;

    let response = await queryDatabase(query);
    res.status(200).json({ status: true, response });
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
};

module.exports = { region, categoryWiseResult, categoryWiseNumericResult };
