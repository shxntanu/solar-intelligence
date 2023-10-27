import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";

export default function App() {
  const cardData = [
    {
      totalsavings: "NextUI",
      paneltype: "nextui.org",
      capacity: 40,
      energyproduced: 23,
      typeofinstallation: "hello",
    },
    {
      totalsavings: "NextUI",
      paneltype: "nextui.org",
      capacity: 40,
      energyproduced: 23,
      typeofinstallation: "hello",
    },
    {
      totalsavings: "NextUI",
      paneltype: "nextui.org",
      capacity: 40,
      energyproduced: 23,
      typeofinstallation: "hello",
    },
    {
      totalsavings: "NextUI",
      paneltype: "nextui.org",
      capacity: 40,
      energyproduced: 23,
      typeofinstallation: "hello",
    },
    {
      totalsavings: "NextUI",
      paneltype: "nextui.org",
      capacity: 40,
      energyproduced: 23,
      typeofinstallation: "hello",
    },
    // Add more card data as needed
  ];
  return (
    <div>
      <div className="w-full gap-4 flex items-center justify-center py-10">
        <Input
          type="text"
          color="success"
          label="User ID"
          placeholder="Enter User ID"
          defaultValue="678"
          className="max-w-[220px]"
        />
        <Button color="success">Submit</Button>
      </div>
      <div className=" mx-2 my-2 grid grid-cols-3 space-x-5">
        {cardData.map((card, index) => (
          <Card className="m-5 bg-green-100" key={index}>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-lg">
                  Total Savings: <b>{card.totalsavings}</b>
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Panel Type: <b>{card.paneltype}</b>
              </p>
              <p>
                Capacity: <b>{card.capacity}</b>
              </p>
              <p>
                Energy Produced: <b>{card.energyproduced}</b>
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
