import { Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import invertorCompanies from "@/constants/invertorCompanies.json";
import panelCompanies from "@/constants/panelCompanies.json";

const solarData = {
  combinations: [
    {
      panel: {
        name: "WAAREE 550Wp 144Cells Framed Dual Glass Mono PERC Bifacial Solar Module",
        url: "https://shop.waaree.com/waaree-550wp-144cells-framed-dual-glass-mono-perc-bifacial-solar-module/",
        price: 11642.4,
        Weight: 32.5,
        MinimumPurchase: 2,
        Watt: 550,
        cell: 144,
      },
      no_panels: 23,
      inverter: {
        name: "Fusion 15 kw on grid solar inverter",
        url: "https://www.loomsolar.com/collections/solar-inverters/products/fusion-15-kw-on-grid-solar-inverter",
        price: 74000,
        SKU: "Fusion 153",
        Watt: 15000,
        Phase: 3,
        Weight: 15,
      },
      total_cost: 341775.2,
    },
    {
      panel: {
        name: "WAAREE 540Wp 144 Cells Mono PERC Solar Module",
        url: "https://shop.waaree.com/waaree-540wp-144-cells-mono-perc-solar-module/",
        price: 11219.04,
        Weight: 27.5,
        MinimumPurchase: 2,
        Watt: 540,
        cell: null,
      },
      no_panels: 24,
      inverter: {
        name: "Fusion 15 kw on grid solar inverter",
        url: "https://www.loomsolar.com/collections/solar-inverters/products/fusion-15-kw-on-grid-solar-inverter",
        price: 74000,
        SKU: "Fusion 153",
        Watt: 15000,
        Phase: 3,
        Weight: 15,
      },
      total_cost: 343256.96,
    },
    {
      panel: {
        name: "WAAREE 450Wp 144Cells Mono PERC Solar Module",
        url: "https://shop.waaree.com/waaree-450wp-144cells-mono-perc-solar-module/",
        price: 9676.8,
        Weight: 23.5,
        MinimumPurchase: 2,
        Watt: 450,
        cell: 144,
      },
      no_panels: 28,
      inverter: {
        name: "Fusion 15 kw on grid solar inverter",
        url: "https://www.loomsolar.com/collections/solar-inverters/products/fusion-15-kw-on-grid-solar-inverter",
        price: 74000,
        SKU: "Fusion 153",
        Watt: 15000,
        Phase: 3,
        Weight: 15,
      },
      total_cost: 344950.39999999997,
    },
  ],
  stateData: {
    subsidies_percentage: "Ranges from 20% to 50%.",
    tax_benefits: "Tax rebates and incentives for solar power generation.",
    loans_details: {
      schemes: [
        {
          name: "Maharashtra Energy Development Agency (MEDA) Scheme",
          description:
            "Offers low-interest loans for solar projects with subsidies for residential buildings.",
        },
        {
          name: "Maharashtra Green Energy Corporation (MGEC) Scheme",
          description:
            "Provides financial support and subsidies for solar installations through state schemes.",
        },
      ],
    },
  },
  treesAdded: 318,
  anualSavingAmount: 132495,
  lifeTimeSavingAmount: 3312375,
};

export default function Prediction() {
  const [msebNumber, setMsebNumber] = useState(0);
  const [state, setState] = useState("");

  return (
    <div className="flex flex-col h-full items-center justify-center p-5">
      <div className="flex flex-col space-y-5">
        <Input
          className=" max-w-md"
          placeholder="Enter your MSEB Customer Number"
          onChange={(e) => setMsebNumber(parseInt(e.target.value))}
        />
        <Input
          className=" max-w-md"
          placeholder="Enter your State"
          onChange={(e) => setState(e.target.value)}
        />
        <Button variant="bordered" className=" text-black" onClick={() => {}}>
          Submit
        </Button>
      </div>
      <Card className="p-5">
        <div className="flex h-full items-center justify-center p-5">
          <div className="flex flex-col space-y-5">
            <div>
              <h2>Combinations:</h2>
              <div className="flex">
                {solarData.combinations.map((combination, index) => (
                  <div key={index} className="border p-3 mb-3">
                    <h3 className="text-lg font-bold mb-2">Panel Details:</h3>
                    <p>
                      <span className="font-bold">Panel Name:</span>{" "}
                      {combination.panel.name}
                    </p>
                    <a href={combination.panel.url}>
                      <span className="font-bold">Panel link</span>
                    </a>
                    <p>
                      <span className="font-bold">Panel Price:</span> ₹{" "}
                      {combination.panel.price}
                    </p>
                    <p>
                      <span className="font-bold">Panel Weight:</span>{" "}
                      {combination.panel.Weight} kg
                    </p>
                    <p>
                      <span className="font-bold">Panel Watt:</span>{" "}
                      {combination.panel.Watt} W
                    </p>
                    <p>
                      <span className="font-bold">Panel Cell:</span>{" "}
                      {combination.panel.cell}
                    </p>
                    <p>
                      <span className="font-bold">No. of Panels:</span>{" "}
                      {combination.no_panels}
                    </p>

                    <h3 className="text-lg font-bold mt-4 mb-2">
                      Inverter Details:
                    </h3>
                    <p>
                      <span className="font-bold">Inverter Name:</span>{" "}
                      {combination.inverter.name}
                    </p>
                    <a href={combination.inverter.url}>
                      <span className="font-bold">Inverter link</span>
                    </a>
                    <p>
                      <span className="font-bold">Inverter Price:</span> ₹{" "}
                      {combination.inverter.price}
                    </p>
                    <p>
                      <span className="font-bold">Inverter SKU:</span>{" "}
                      {combination.inverter.SKU}
                    </p>
                    <p>
                      <span className="font-bold">Inverter Watt:</span>{" "}
                      {combination.inverter.Watt} W
                    </p>
                    <p>
                      <span className="font-bold">Inverter Phase:</span>{" "}
                      {combination.inverter.Phase}
                    </p>
                    <p>
                      <span className="font-bold">Inverter Weight:</span>{" "}
                      {combination.inverter.Weight} kg
                    </p>

                    <h3 className="text-lg font-bold mt-4 mb-2">Total Cost:</h3>
                    <p className="text-xl font-bold">
                      ₹ {combination.total_cost}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>State Data:</h2>
              <p>
                Subsidies Percentage: {solarData.stateData.subsidies_percentage}
              </p>
              <p>Tax Benefits: {solarData.stateData.tax_benefits}</p>
              {/* Loans details */}
            </div>
            <div>
              <h2>Savings Data:</h2>
              <p>Trees Added: {solarData.treesAdded}</p>
              <p>Annual Saving Amount: ₹ {solarData.anualSavingAmount}</p>
              <p>Lifetime Saving Amount: ₹ {solarData.lifeTimeSavingAmount}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
