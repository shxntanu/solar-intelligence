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

import * as globalRes from "@/constants/global.json";
import * as regionRes from "@/constants/regions.json";
import * as numericRes from "@/constants/numeric.json";

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
            text: "Chart.js Bar Chart",
        },
    },
};

export const data = convertResponseToFormattedData(globalRes);

function RenderingInIFrame() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <div>
            <div className="flex-grow flex items-center justify-center py-10">
                <Card className="w-[400px]">
                    <CardHeader className="flex flex-col gap-3 pt-10">
                        <div className="flex flex-col text-center">
                            <p className="text-md">PageTalk</p>
                            <p className="text-small text-default-500">
                                {/* {isLogin ? "Login" : "Sign Up"} */}
                                Test
                            </p>
                        </div>
                    </CardHeader>

                    <div className="max-h-[60vh] overflow-y-auto">
                        <form
                        // onSubmit={handleFormSubmit}
                        >
                            <CardBody className="items-center flex flex-col gap-3">
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize"
                                        >
                                            {selectedValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeys}
                                        onSelectionChange={() =>
                                            setSelectedKeys
                                        }
                                    >
                                        <DropdownItem key="regional">
                                            Regional
                                        </DropdownItem>
                                        <DropdownItem key="global">
                                            Global
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize"
                                        >
                                            {selectedValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeys}
                                        onSelectionChange={() =>
                                            setSelectedKeys
                                        }
                                    >
                                        <DropdownItem key="text">
                                            Text
                                        </DropdownItem>
                                        <DropdownItem key="number">
                                            Number
                                        </DropdownItem>
                                        <DropdownItem key="date">
                                            Date
                                        </DropdownItem>
                                        <DropdownItem key="single_date">
                                            Single Date
                                        </DropdownItem>
                                        <DropdownItem key="iteration">
                                            Iteration
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize"
                                        >
                                            {selectedValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeys}
                                        onSelectionChange={() =>
                                            setSelectedKeys
                                        }
                                    >
                                        <DropdownItem key="text">
                                            Text
                                        </DropdownItem>
                                        <DropdownItem key="number">
                                            Number
                                        </DropdownItem>
                                        <DropdownItem key="date">
                                            Date
                                        </DropdownItem>
                                        <DropdownItem key="single_date">
                                            Single Date
                                        </DropdownItem>
                                        <DropdownItem key="iteration">
                                            Iteration
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="capitalize"
                                        >
                                            {selectedValue}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="Single selection example"
                                        variant="flat"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={selectedKeys}
                                        onSelectionChange={() =>
                                            setSelectedKeys
                                        }
                                    >
                                        <DropdownItem key="text">
                                            Text
                                        </DropdownItem>
                                        <DropdownItem key="number">
                                            Number
                                        </DropdownItem>
                                        <DropdownItem key="date">
                                            Date
                                        </DropdownItem>
                                        <DropdownItem key="single_date">
                                            Single Date
                                        </DropdownItem>
                                        <DropdownItem key="iteration">
                                            Iteration
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Button color="primary" type="submit">
                                    <p className="text-white">Sign In</p>
                                </Button>
                            </CardBody>
                        </form>
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
