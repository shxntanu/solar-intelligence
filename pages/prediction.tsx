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
                <div className="flex">
                  {response.combinations.map((combination, index) => (
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

                      <h3 className="text-lg font-bold mt-4 mb-2">
                        Total Cost:
                      </h3>
                      <p className="text-xl font-bold">
                        ₹ {combination.total_cost}
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
                  <span className="font-bold">Trees Added:</span>{" "}
                  {response.treesAdded}
                </p>
                <p>
                  <span className="font-bold">Annual Saving Amount:</span> ₹{" "}
                  {response.anualSavingAmount}
                </p>
                <p>
                  <span className="font-bold">Lifetime Saving Amount: </span>₹{" "}
                  {response.lifeTimeSavingAmount}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
