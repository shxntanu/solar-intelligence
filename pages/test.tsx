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
    // const [dataset, setDataset] = useState(data.datasets);
    // const [labels, setLabels] = useState(data.labels);

    const [dropdowns, setDropdowns] = useState([
        {
            
        }
    ])

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
                                <Input
                                    type="text"
                                    label="Username"
                                    className="w-[300px]"
                                    name="username"
                                    // isInvalid={invalidPassword}
                                    // value={formData.username}
                                    // onChange={handleInputChange}
                                />
                                <Input
                                    type="password"
                                    label="Password"
                                    className="w-[300px]"
                                    name="password"
                                    // isInvalid={invalidPassword}
                                    // errorMessage={errorText}
                                    // value={formData.password}
                                    // onChange={handleInputChange}
                                />
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
