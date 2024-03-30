import React from "react";
import { useState } from "react";
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
    Divider,
} from "@nextui-org/react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import axios from "axios";
import { CopyBlock, a11yLight } from "react-code-blocks";

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
const itMapping: { [key: string]: string } = {
    Commercial: "0",
    Industrial: "1",
    Residential: "2",
};

// Panel Type Mapping (done)
const ptMapping: { [key: string]: string } = {
    Monocrystalline: "0",
    Polycrystalline: "1",
    ThinFilm: "2",
};

// Type of Installation Mapping (done)
const toiMapping: { [key: string]: string } = {
    GroundMounted: "0",
    RoofMounted: "1",
};

// Installer Name Mapping (done)
const inMapping: { [key: string]: string } = {
    GreenEnergy: "0",
    RaysPower: "1",
    SolarTech: "2",
    SunWave: "3",
};

// Region Mapping (done)
const regionMapping: { [key: string]: string } = {
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

function Forecasting() {
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

    const [annualSavingOP, setAnnualSavingOP] = useState<string>("");
    const [fetchOP, setFetchOP] = useState();
    const showLineNumbers = true;
    const codeBlock = true;

    const handleSubmit = async () => {
        console.log({
            installationType,
            panelType,
            capacity,
            maintenanceFreq,
            cost,
            region,
            typeofinstallation,
            installerName,
            warrantyYears,
        });
        axios
            .post(`/api/forecast`, {
                installationType: itMapping[installationType],
                panelType: ptMapping[panelType],
                capacity,
                maintenanceFreq,
                cost,
                region,
                typeofinstallation: toiMapping[typeofinstallation],
                installerName: inMapping[installerName],
                warrantyYears,
            })
            .then((res) => {
                console.log(res.data);
                setAnnualSavingOP(res.data.response);
                setFetchOP(res.data);
            });
    };

    return (
        <div style={{ height: "calc(100vh - 150px)" }}>
            <h1 className="pt-5 font-bold text-3xl pb-2 flex items-center justify-center">
                Forecasting
            </h1>
            <p className="flex items-center justify-center text-center">
                This is where end users can input the specifications that they
                want and <br /> get an estimate of the annual savings they can
                make
            </p>
            <div className="flex-grow flex flex-col items-center justify-center py-10 gap-10">
                <Card className="w-[800px] items-center justify-center pb-10">
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
                                            color="primary"
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
                                            setInstallationType(
                                                value.toLocaleString()
                                            );
                                        }}
                                    >
                                        <DropdownItem key="Commercial">
                                            Commercial
                                        </DropdownItem>
                                        <DropdownItem key="Industrial">
                                            Industrial
                                        </DropdownItem>
                                        <DropdownItem key="Residential">
                                            Residential
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            color="primary"
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
                                            setPanelType(
                                                value.toLocaleString()
                                            );
                                        }}
                                    >
                                        <DropdownItem key="Monocrystalline">
                                            Monocrystalline
                                        </DropdownItem>
                                        <DropdownItem key="Polycrystalline">
                                            Polycrystalline
                                        </DropdownItem>
                                        <DropdownItem key="ThinFilm">
                                            Thin Film
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            color="primary"
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
                                            <DropdownItem key={index}>
                                                {region}
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>

                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            color="primary"
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
                                            setTypeofinstallation(
                                                value.toLocaleString()
                                            );
                                        }}
                                    >
                                        <DropdownItem key="GroundMounted">
                                            Ground Mounted
                                        </DropdownItem>
                                        <DropdownItem key="RoofMounted">
                                            Roof Mounted
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            color="primary"
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
                                            setInstallerName(
                                                value.toLocaleString()
                                            );
                                        }}
                                    >
                                        <DropdownItem key="GreenEnergy">
                                            GreenEnergy Co.
                                        </DropdownItem>
                                        <DropdownItem key="SolarTech">
                                            SolarTech Pvt
                                        </DropdownItem>
                                        <DropdownItem key="RaysPower">
                                            RaysPower Ltd
                                        </DropdownItem>
                                        <DropdownItem key="SunWave">
                                            SunWave Ltd
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <Divider orientation="vertical" />
                            <div className="flex flex-col gap-3">
                                <Input
                                    type="text"
                                    label="Capacity"
                                    className="w-[300px]"
                                    value={capacity}
                                    onChange={(e) =>
                                        setCapacity(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setMaintenanceFreq(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setWarrantyYears(e.target.value)
                                    }
                                />
                            </div>
                        </CardBody>
                    </div>
                    {annualSavingOP && (
                        <h1 className="py-5">
                            Your annual savings are estimated to be:{" "}
                            <b>{annualSavingOP}</b>
                        </h1>
                    )}
                    <Button
                        color="primary"
                        type="submit"
                        onPress={handleSubmit}
                    >
                        <p className="text-white">Submit</p>
                    </Button>
                </Card>
                {fetchOP && (
                    <div
                        style={{
                            width: "800px",
                            flex: 1,
                            background: "#19C964",
                            color: "white",
                            paddingBottom: "1em",
                        }}
                    >
                        <h5 style={{ textAlign: "center" }}>Result</h5>
                        <CopyBlock
                            // text={JSON.stringify(fetchOP, null, 2)}
                            {...{
                                showLineNumbers,
                                codeBlock,
                                language: "json",
                                text: JSON.stringify(fetchOP, null, 2),
                                theme: {
                                    height: "250px",
                                    outerWidth: "60%",
                                    overflowY: "scroll",
                                    borderRadius: "5px",
                                    boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                                    fontSize: "0.75rem",
                                    margin: "0px 0.75rem",
                                },
                            }}

                            // theme={{
                            //     height: "250px",
                            //     outerWidth: "60%",
                            //     overflowY: "scroll",
                            //     borderRadius: "5px",
                            //     boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
                            //     fontSize: "0.75rem",
                            //     margin: "0px 0.75rem",
                            //     // text: JSON.stringify(fetchOP, null, 2),
                            // }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Forecasting;
