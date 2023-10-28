import React from "react";
import { useState } from "react";
import { SetStateAction } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import CardHolder from "@/components/CardHolder";
import { convertJSONResponse } from "@/config/functions/conversion";
import { convertResponseToFormattedData } from "@/config/functions/conversion-v2";
import { ApiService } from "@/config/api/ApiService";

import * as globalRes from "@/constants/global.json";
import * as regionRes from "@/constants/regions.json";
import * as numericRes from "@/constants/numeric.json";

interface FormData {
  region?: string;
  category: string;
  numeric: string;
}

const initialState: FormData = {
  region: undefined,
  category: "",
  numeric: "",
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Data Visualisation",
    },
  },
};

// Installation Type Mapping (done)
const itMapping = {
  Commercial: "0",
  Industrial: "1",
  Residential: "2",
};

// Panel Type Mapping (done)
const ptMapping = {
  Monocrystalline: "0",
  Polycrystalline: "1",
  ThinFilm: "2",
};

// Type of Installation Mapping (done)
const toiMapping = {
  GroundMounted: "0",
  RoofMounted: "1",
};

// Installer Name Mapping (done)
const inMapping = {
  GreenEnergy: "0",
  RaysPower: "1",
  SolarTech: "2",
  SunWave: "3",
};

// Region Mapping (done)
const regionMapping = {
  Delhi: "0",
  Gujarat: "1",
  Karnataka: "2",
  Kerala: "3",
  Maharashtra: "4",
  Rajasthan: "5",
  TamilNadu: "6",
  Telangana: "7",
  UttarPradesh: "8",
  WestBengal: "9",
};

const regions = [
  "Telangana",
  "Tamil Nadu",
  "Rajasthan",
  "Karnataka",
  "Kerala",
  "Delhi",
  "Maharashtra",
  "Uttar Pradesh",
  "West Bengal",
  "Gujarat",
];

function RenderingInIFrame() {
  const [installationType, setInstallationType] =
    useState<string>("Commercial");
  const [panelType, setPanelType] = useState<string>("Monocrystalline");
  const [capacity, setCapacity] = useState<string>("");
  // const [energyProduced, setEnergyProduced] = useState<string>("");
  const [maintenanceFreq, setMaintenanceFreq] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [region, setRegion] = useState<string>("Telangana");
  const [typeofinstallation, setTypeofinstallation] =
    useState<string>("GroundMounted");
  const [installerName, setInstallerName] = useState<string>("GreenEnergy");
  const [warrantyYears, setWarrantyYears] = useState<string>("");

  const [formState, setFormState] = useState<FormData>(initialState);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);

  const handleSubmit = async () => {
    console.log({
      installationType,
      panelType,
      capacity,
      // energyProduced,
      maintenanceFreq,
      cost,
      region,
      typeofinstallation,
      installerName,
      warrantyYears,
    });

    ApiService.get(
      `ml/forecast?attributes=[${itMapping[installationType]},${ptMapping[panelType]},${capacity},${maintenanceFreq},${cost},${regionMapping[region]},${toiMapping[typeofinstallation]},${inMapping[installerName]},${warrantyYears}]`
    );
  };

  return (
    <div>
      <div className="flex-grow flex items-center justify-center py-10">
        <Card className="w-[800px]">
          <CardHeader className="flex flex-col gap-3 pt-10">
            <div className="flex flex-col text-center">
              <p className="text-md">Data Input</p>
              <p className="text-small text-default-500">
                Choose what data you want to see
              </p>
            </div>
          </CardHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <CardBody className="flex flex-row gap-3 justify-center items-center">
              <div className="flex flex-col gap-3">
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="ghost"
                      className="capitalize min-w-[200px]"
                    >
                      {installationType}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={installationType}
                    onAction={(value) => {
                      setInstallationType(value.toLocaleString());
                    }}
                  >
                    <DropdownItem key="Commercial">Commercial</DropdownItem>
                    <DropdownItem key="Industrial">Industrial</DropdownItem>
                    <DropdownItem key="Residential">Residential</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize min-w-[200px]"
                    >
                      {panelType}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={panelType}
                    placeholder="Select a region"
                    onAction={(value) => {
                      setPanelType(value.toLocaleString());
                    }}
                  >
                    <DropdownItem key="Monocrystalline">
                      Monocrystalline
                    </DropdownItem>
                    <DropdownItem key="Polycrystalline">
                      Polycrystalline
                    </DropdownItem>
                    <DropdownItem key="ThinFilm">Thin Film</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize min-w-[200px]"
                    >
                      {region}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={capacity}
                    onAction={(value) => {
                      setRegion(value.toLocaleString());
                    }}
                  >
                    {regions.map((region, index) => (
                      <DropdownItem key={index}>{region}</DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize min-w-[200px]"
                    >
                      {typeofinstallation}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={capacity}
                    onAction={(value) => {
                      setTypeofinstallation(value.toLocaleString());
                    }}
                  >
                    <DropdownItem key="GroundMounted">
                      Ground Mounted
                    </DropdownItem>
                    <DropdownItem key="RoofMounted">Roof Mounted</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize min-w-[200px]"
                    >
                      {installerName}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={installerName}
                    onAction={(value) => {
                      setInstallerName(value.toLocaleString());
                    }}
                  >
                    <DropdownItem key="GreenEnergy">
                      GreenEnergy Co.
                    </DropdownItem>
                    <DropdownItem key="SolarTech">SolarTech Pvt</DropdownItem>
                    <DropdownItem key="RaysPower">RaysPower Ltd</DropdownItem>
                    <DropdownItem key="SunWave">SunWave Ltd</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  label="Capacity"
                  className="w-[300px]"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />

                {/* <Input
                                    type="text"
                                    label="Energy Produced"
                                    className="w-[300px]"
                                    value={energyProduced}
                                    onChange={(e) =>
                                        setEnergyProduced(e.target.value)
                                    }
                                /> */}

                <Input
                  type="text"
                  label="Maintenance Frequency"
                  className="w-[300px]"
                  value={maintenanceFreq}
                  onChange={(e) => setMaintenanceFreq(e.target.value)}
                />

                <Input
                  type="text"
                  label="Cost"
                  className="w-[300px]"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />

                <Input
                  type="text"
                  label="Warranty Years"
                  className="w-[300px]"
                  value={warrantyYears}
                  onChange={(e) => setWarrantyYears(e.target.value)}
                />
              </div>
            </CardBody>
          </div>
          <Button color="primary" type="submit" onPress={handleSubmit}>
            <p className="text-white">Submit</p>
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default RenderingInIFrame;

/*



*/
