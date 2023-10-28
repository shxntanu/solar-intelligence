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

const states = [
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
    "None",
];

function RenderingInIFrame() {
    const [data, setData] = useState<any>(
        convertResponseToFormattedData(globalRes)
    );
    const [region, setRegion] = useState("global");
    const [state, setState] = useState<undefined | string>("None");
    const [category, setCategory] = useState<undefined | string>("None");
    const [numericData, setNumericData] = useState<undefined | string>("None");
    const [formState, setFormState] = useState<FormData>(initialState);
    const [showSecondDropdown, setShowSecondDropdown] = useState(false);

    const handleSubmit = async () => {
        console.log({
            region,
            state,
            category,
            numericData,
        });

        if (region === "global") {
            if (
                category &&
                category !== "None" &&
                numericData &&
                numericData !== "None"
            ) {
                ApiService.get(`global/${category}/${numericData}`).then(
                    (res) => {
                        setData(convertResponseToFormattedData(res.data));
                    }
                );
            } else if (category && category !== "None") {
                ApiService.get(`global/${category}`).then((res) => {
                    setData(convertResponseToFormattedData(res.data));
                });
            } else {
                ApiService.get(`global`).then((res) => {
                    setData(convertResponseToFormattedData(res.data));
                });
            }
        } else {
            if (
                category &&
                category !== "None" &&
                numericData &&
                numericData !== "None"
            ) {
                ApiService.get(
                    `region/${state}/${category}/${numericData}`
                ).then((res) => {
                    setData(convertResponseToFormattedData(res.data));
                });
            } else if (category && category !== "None") {
                ApiService.get(`region/${state}/${category}`).then((res) => {
                    setData(convertResponseToFormattedData(res.data));
                });
            } else {
                ApiService.get(`region`).then((res) => {
                    setData(convertResponseToFormattedData(res.data));
                });
            }
        }
    };

    const decide = (reg: string, isG: boolean) => {
        if (reg === "global" && isG === true) {
            return true;
        } else if (reg === "global" && isG === false) {
            return false;
        } else if (reg === "regional" && isG === false) {
            return false;
        }
    };

    return (
        <div>
            <div className="flex-grow flex items-center justify-center py-10">
                <Card className="w-[400px]">
                    <CardHeader className="flex flex-col gap-3 pt-10">
                        <div className="flex flex-col text-center">
                            <p className="text-md">Data Input</p>
                            <p className="text-small text-default-500">
                                Choose what data you want to see
                            </p>
                        </div>
                    </CardHeader>

                    <div className="max-h-[60vh] overflow-y-auto">
                        <CardBody className="items-center flex flex-col gap-3">
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="ghost"
                                        color="primary"
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
                                    selectedKeys={region}
                                    onAction={(value) => {
                                        setRegion(value.toLocaleString());
                                        setShowSecondDropdown(
                                            value === "regional"
                                        );
                                    }}
                                >
                                    <DropdownItem key="regional">
                                        Regional
                                    </DropdownItem>
                                    <DropdownItem key="global">
                                        Global
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {showSecondDropdown && (
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize min-w-[200px]"
                                        >
                                            {state}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={state}
                                        placeholder="Select a region"
                                        onAction={(value) => {
                                            setFormState((prevState) => {
                                                return {
                                                    ...prevState,
                                                    region: value
                                                        .valueOf()
                                                        .toString(),
                                                };
                                            });
                                            setState(value.toLocaleString());
                                        }}
                                    >
                                        {states.map((state) => {
                                            return (
                                                <DropdownItem key={state}>
                                                    {state}
                                                </DropdownItem>
                                            );
                                        })}
                                    </DropdownMenu>
                                </Dropdown>
                            )}
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="capitalize min-w-[200px]"
                                    >
                                        {category}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={category}
                                    onAction={(value) => {
                                        setCategory(value.toLocaleString());
                                    }}
                                >
                                    <DropdownItem key="installationtype">
                                        Installation Type
                                    </DropdownItem>
                                    <DropdownItem key="paneltype">
                                        Panel Type
                                    </DropdownItem>
                                    <DropdownItem key="typeofinstallation">
                                        Type of Installation
                                    </DropdownItem>
                                    <DropdownItem key="installername">
                                        Installer Name
                                    </DropdownItem>
                                    <DropdownItem key="None">None</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="capitalize min-w-[200px]"
                                    >
                                        {numericData}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Single selection example"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={numericData}
                                    onAction={(value) => {
                                        setNumericData(value.toLocaleString());
                                    }}
                                >
                                    <DropdownItem key="capacity">
                                        Capacity
                                    </DropdownItem>
                                    <DropdownItem key="energyproduced">
                                        Energy Produced
                                    </DropdownItem>
                                    <DropdownItem key="maintenancefrequency">
                                        Maintenance Frequency
                                    </DropdownItem>
                                    <DropdownItem key="cost">Cost</DropdownItem>
                                    <DropdownItem key="warrantyyears">
                                        Warranty Years
                                    </DropdownItem>
                                    <DropdownItem key="annualsavings">
                                        Annual Savings
                                    </DropdownItem>
                                    <DropdownItem key="None">None</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Button
                                color="primary"
                                type="submit"
                                onPress={handleSubmit}
                            >
                                <p className="text-white">Submit</p>
                            </Button>
                        </CardBody>
                    </div>
                </Card>
            </div>
            <div>
                <CardHolder>
                    <Bar options={options} data={data} className="" />
                </CardHolder>
            </div>
        </div>
    );
}

export default RenderingInIFrame;
