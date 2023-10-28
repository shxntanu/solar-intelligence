import React from "react";

const Home = () => (
  <div className=" h-screen w-screen my-5">
    <iframe
      title="testreport"
      width="1500"
      height="700"
      src="https://app.powerbi.com/reportEmbed?reportId=6fec14a6-e69b-422e-ab17-424453537ede&autoAuth=true&ctid=0a0aa63d-82d0-4ba1-b909-d7986ece4c4c"
      allowFullScreen={true}
    ></iframe>
  </div>
);

export default Home;
