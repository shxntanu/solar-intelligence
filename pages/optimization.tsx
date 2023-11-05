import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import axios from "axios";

interface CardData {
  id: number;
  installationid: string;
  installationtype: string;
  paneltype: string;
  capacity: number;
  energyproduced: number;
  maintenancefrequency: number;
  cost: number;
  region: string;
  latitude: number;
  longitude: number;
  typeofinstallation: string;
  installername: string;
  warrantyyears: number;
  annualsavings: number;
}

export default function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [ONSubmit, setONSubmit] = useState<boolean>(false);

  const [singleUserData, setSingleUserData] = useState<CardData[]>([]);

  const fetchUser = async () => {
    try {
      const response = await axios.post(`/api/proxy`, {
        user_id: userInput,
      });

      if (response.data.status === false) {
        alert("User not found");
        return;
      }

      setCardData(response.data.response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSingleUser = async () => {
    try {
      const response = await axios.get(
        `https://mindspark-express-backend.onrender.com/api/ml/singleUser/${userInput}`,
        {
          headers: {
            "Access-Control-Allow-Origin":
              "https://mindspark-23-ml.onrender.com",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );

      if (response.data.status === false) {
        alert("User not found");
        return;
      }

      setSingleUserData(response.data.response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const onSubmit = () => {
    fetchUser();
    fetchSingleUser();
    setONSubmit(true);
  };

  return (
    <div>
      <div className="w-full gap-4 flex items-center justify-center py-10">
        <Input
          type="text"
          color="success"
          label="User ID"
          placeholder="Enter User ID"
          defaultValue="678"
          value={userInput}
          onChange={onChange}
          className="max-w-[220px]"
        />
        <Button color="success" onClick={onSubmit}>
          Submit
        </Button>
      </div>
      {singleUserData.map((card, index) => (
        <Card className="m-5 bg-green-100" key={index}>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-lg">
                Annual Savings: <b>Rs. {card.annualsavings}</b>
              </p>
              <p className="text-lg">
                User Id: <b>{card.id}</b>
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Panel Type: <b>{card.paneltype}</b>
            </p>
            <p>
              Capacity: <b>{card.capacity} kWh</b>
            </p>
            <p>
              Energy Produced: <b>{card.energyproduced} kWh</b>
            </p>
            <p>
              Type of installation: <b>{card.typeofinstallation}</b>
            </p>
          </CardBody>
        </Card>
      ))}
      {ONSubmit && (
        <h1 className="text-2xl text-center">
          AI tailored Recommendations for User ID: <b>{userInput}</b>
        </h1>
      )}
      <div className="mx-2 my-2 grid grid-cols-3 space-x-5">
        {cardData.map((card, index) => (
          <Card className="m-5 bg-green-100" key={index}>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-lg">
                  Annual Savings: <b>Rs. {card.annualsavings}</b>
                </p>
                <p className="text-lg">
                  User Id: <b>{card.id}</b>
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Panel Type: <b>{card.paneltype}</b>
              </p>
              <p>
                Capacity: <b>{card.capacity} kWh</b>
              </p>
              <p>
                Energy Produced: <b>{card.energyproduced} kWh</b>
              </p>
              <p>
                Type of installation: <b>{card.typeofinstallation}</b>
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
