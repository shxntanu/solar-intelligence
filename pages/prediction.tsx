import { Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import invertorCompanies from "@/constants/invertorCompanies.json";
import panelCompanies from "@/constants/panelCompanies.json";
import { ApiService } from "@/config/api/ApiService";

export default function Prediction() {
  const [msebNumber, setMsebNumber] = useState("");
  const [state, setState] = useState("");

  const [response, setResponse] = useState(null);

  return (
    <div className="flex flex-col h-full items-center justify-center p-5">
      <div className="flex flex-col space-y-5">
        <Input
          className=" max-w-md"
          placeholder="Enter your MSEB Customer Number"
          onChange={(e) => setMsebNumber(e.target.value)}
        />
        <Input
          className=" max-w-md"
          placeholder="Enter your State"
          onChange={(e) => setState(e.target.value)}
        />
        <Button
          variant="bordered"
          className=" text-black"
          onClick={() => {
            ApiService.post("productRecommendation", {
              customer_id: msebNumber,
              state,
            }).then((res) => {
              console.log(res);
              setResponse(res.data);
            });
          }}
        >
          Submit
        </Button>
      </div>
      {response && (
        <Card className="p-5">
          <div className="flex h-full items-center justify-center p-5">
            <div className="flex flex-col space-y-5">
              <div>
                <h2>Combinations:</h2>
                <div className="grid grid-cols-3">
                  {response.combinations.map((combination, index) => (
                    <div key={index} className="border p-3 mb-3 col-span-1">
                      <h3 className="text-lg font-bold mb-2">Panel Details:</h3>
                      <p>
                        <span className="font-bold">Panel Name:</span>{" "}
                        <a href={combination.panel.url}>
                          <span className=" text-blue-500">
                            {combination.panel.name}
                          </span>
                        </a>
                      </p>
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
                      <p>
                        <span className="font-bold">Cost of Solar Panels:</span>{" "}
                        No. of panels &times; Each panel cost
                      </p>
                      <p className="pl-40">
                        <span className="font-bold"> </span>:
                        {combination.no_panels}&nbsp; &times; ₹
                        {combination.panel.price}
                      </p>
                      <p className="pl-40">
                        <span className="font-bold">
                          :₹
                          {(
                            parseFloat(combination.no_panels) *
                            parseFloat(combination.panel.price)
                          ).toFixed(2)}{" "}
                        </span>
                      </p>

                      <h3 className="text-lg font-bold mt-4 mb-2">
                        Inverter Details:
                      </h3>
                      <p>
                        <span className="font-bold">Inverter Name:</span>{" "}
                        <a href={combination.inverter.url}>
                          <span className="text-blue-500">
                            {combination.inverter.name}
                          </span>
                        </a>
                      </p>

                      <p>
                        <span className="font-bold">
                          Inverter Price: ₹ {combination.inverter.price}
                        </span>
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

                      <h3 className="text-lg mt-4 mb-2">
                        <span className="font-bold">Total Cost:</span> Solar
                        Panel Total Cost + Invertor Panel Total Cost
                      </h3>
                      <h3 className="text-lg mt-4 mb-2 ">
                        ₹
                        {(
                          parseFloat(combination.no_panels) *
                          parseFloat(combination.panel.price)
                        ).toFixed(2)}
                        + ₹ {combination.inverter.price}
                      </h3>
                      <p className="text-xl font-bold">
                        ₹ {parseFloat(combination.total_cost).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">State Data:</h3>
                <p>
                  <span className="font-bold">Subsidies Percentage:</span>{" "}
                  {response.stateData.subsidies_percentage}
                </p>

                <p>
                  <span className="font-bold">Tax Benefits: </span>
                  {response.stateData.tax_benefits}
                </p>
                {/* Loans details */}
                <h3 className="text-lg font-bold mb-2">Loan Details:</h3>
                {response.stateData.loans_details.schemes.map((loan, index) => (
                  <div key={index} className="border p-3 mb-3">
                    <p>
                      <span className="font-bold">Loan Name:</span> {loan.name}
                    </p>

                    <p>
                      <span className="font-bold">Description:</span>{" "}
                      {loan.description}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Savings Data:</h3>
                <p>
                  <span className="font-bold">Annual Saving Amount:</span>
                  <br />
                  With the most optimal option:
                </p>
                <p>
                  <span className="font-semibold">Energy Being Generated:</span>{" "}
                  {response.combinations && response.combinations.length > 0 ? (
                    <span>
                      {response.combinations[0].no_panels} x{" "}
                      {response.combinations[0].panel.Watt} W
                    </span>
                  ) : (
                    "No combination data available"
                  )}
                </p>
                <p className="ml-50">
                  ={" "}
                  {response.combinations && response.combinations.length > 0
                    ? response.combinations[0].no_panels *
                      response.combinations[0].panel.Watt
                    : "0"}{" "}
                  W
                </p>
                <p>
                  <span className="font-bold">Energy Cost (per unit):</span> ₹{" "}
                  {response.avgEnergyCostKwh}
                </p>
                <p>
                  <span className="font-bold">
                    No of Hours under sunshine :
                  </span>{" "}
                  5.5 Hours
                </p>
                <p>
                  <span className="font-bold">Annual Saving Amount:</span> No of
                  Hours under sunshine x No of panels x Watt of Panels x Energy
                  Cost (per unit)<br></br>₹{" "}
                  {response.combinations && response.combinations.length > 0
                    ? (
                        (response.combinations[0].no_panels *
                          response.combinations[0].panel.Watt *
                          response.avgEnergyCostKwh *
                          5.5 *
                          365) /
                        1000
                      ).toFixed(2)
                    : "0"}
                </p>
                <p>
                  <span className="font-bold">Lifetime Saving Amount:</span> ₹{" "}
                  {response.lifeTimeSavingAmount} (for 25 years)
                </p>
                <p>
                  <span className="font-bold">Trees Added:</span>{" "}
                  {response.treesAdded}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
