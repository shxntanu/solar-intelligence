import { Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import CardHolder from "@/components/CardHolder";

// import invertorCompanies from "@/constants/invertorCompanies.json";
// import panelCompanies from "@/constants/panelCompanies.json";
import users from "@/constants/users.json";
import { ApiService } from "@/config/api/ApiService";
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

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default function Prediction() {
    const [msebNumber, setMsebNumber] = useState("");
    const [state, setState] = useState("");
    const [msebNumber2, setMsebNumber2] = useState("");

    const [predictionResponse, setPredictionResponse] = useState(null);
    const [vizResponse, setVizResponse] = useState<any>(null);

    // const data = {
    //     labels: months,
    //     datasets: [
    //         {
    //             label: "Electricity Consumption",
    //             data: Object.keys(
    //                 users.users.find(
    //                     (user) => user.customer_number == msebNumber2
    //                 )?.bills[2023] ?? {}
    //             ),
    //             backgroundColor: "rgb(22,200,100, 0.7)",
    //         },
    //     ],
    // };

    return (
        <>
            <h1 className="pt-5 font-bold text-3xl pb-2 flex items-center justify-center">
                Prediction
            </h1>
            <p className="flex items-center justify-center">
                This is where you can get predictions for your solar panel based
                on your location and MSEB number <br />
                while also being able to view your 12 month electricity
                consumption based on your MSEB number
            </p>
            <div className="flex flex-col items-center justify-center p-5">
                <div className="flex space-y-5 items-center space-x-5">
                    <Card className="w-[400px] pb-10 flex flex-col">
                        <CardHeader className="flex flex-col gap-3 pt-10">
                            <div className="flex flex-col text-center">
                                <p className="text-md">
                                    Solar Provider Predictions
                                </p>
                                <p className="text-small text-default-500">
                                    Enter your MSEB number and your state to get
                                    the best solar panel and inverter
                                    combination
                                </p>
                            </div>
                            <Input
                                className=" max-w-xl"
                                placeholder="Enter your State"
                                onChange={(e) => setState(e.target.value)}
                            />
                            <Button
                                variant="shadow"
                                color="primary"
                                className=" text-black"
                                onClick={() => {
                                    ApiService.post("productRecommendation", {
                                        customer_id: msebNumber,
                                        state,
                                    }).then((res) => {
                                        console.log(res);
                                        setPredictionResponse(res.data);
                                    });
                                }}
                            >
                                Submit
                            </Button>
                        </CardHeader>
                    </Card>

                    <Card className="w-[400px] pb-10">
                        <CardHeader className="flex flex-col gap-3 pt-10">
                            <div className="flex flex-col text-center">
                                <p className="text-md">MSEB Number Input</p>
                                <p className="text-small text-default-500">
                                    Enter your MSEB number to get yearly
                                    analysis
                                </p>
                            </div>
                            <Input
                                placeholder="MSEB Number"
                                onChange={(e) => setMsebNumber2(e.target.value)}
                            />
                            <Button
                                variant="shadow"
                                color="primary"
                                className=" text-black"
                                onClick={() => {
                                    setVizResponse({
                                        labels: months,
                                        datasets: [
                                            {
                                                label: "Electricity Consumption",
                                                data: Object.values(
                                                    users.users.find(
                                                        (user) =>
                                                            user.customer_number ===
                                                            msebNumber2
                                                    )?.bills[2023] ?? {}
                                                ),
                                                backgroundColor:
                                                    "rgb(22,200,100, 0.7)",
                                            },
                                        ],
                                    });
                                    console.log(vizResponse);
                                }}
                            >
                                Submit
                            </Button>
                        </CardHeader>
                    </Card>
                </div>
                {predictionResponse && (
                    <Card className="p-5">
                        <div className="flex h-full items-center justify-center p-5">
                            <div className="flex flex-col space-y-5">
                                <div>
                                    <h2>Combinations:</h2>
                                    <div className="flex">
                                        {predictionResponse.combinations.map(
                                            (combination, index) => (
                                                <div
                                                    key={index}
                                                    className="border p-3 mb-3"
                                                >
                                                    <h3 className="text-lg font-bold mb-2">
                                                        Panel Details:
                                                    </h3>
                                                    <p>
                                                        <span className="font-bold">
                                                            Panel Name:
                                                        </span>{" "}
                                                        {combination.panel.name}
                                                    </p>
                                                    <a
                                                        href={
                                                            combination.panel
                                                                .url
                                                        }
                                                    >
                                                        <span className="font-bold">
                                                            Panel link
                                                        </span>
                                                    </a>
                                                    <p>
                                                        <span className="font-bold">
                                                            Panel Price:
                                                        </span>{" "}
                                                        ₹{" "}
                                                        {
                                                            combination.panel
                                                                .price
                                                        }
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            Panel Weight:
                                                        </span>{" "}
                                                        {
                                                            combination.panel
                                                                .Weight
                                                        }{" "}
                                                        kg
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            Panel Watt:
                                                        </span>{" "}
                                                        {combination.panel.Watt}{" "}
                                                        W
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            Panel Cell:
                                                        </span>{" "}
                                                        {combination.panel.cell}
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            No. of Panels:
                                                        </span>{" "}
                                                        {combination.no_panels}
                                                    </p>

                                                    <h3 className="text-lg font-bold mt-4 mb-2">
                                                        Inverter Details:
                                                    </h3>
                                                    <p>
                                                        <span className="font-bold">
                                                            Inverter Name:
                                                        </span>{" "}
                                                        {
                                                            combination.inverter
                                                                .name
                                                        }
                                                    </p>
                                                    <a
                                                        href={
                                                            combination.inverter
                                                                .url
                                                        }
                                                    >
                                                        <span className="font-bold">
                                                            Inverter link
                                                        </span>
                                                    </a>
                                                    <p>
                                                        <span className="font-bold">
                                                            Inverter Price:
                                                        </span>{" "}
                                                        ₹{" "}
                                                        {
                                                            combination.inverter
                                                                .price
                                                        }
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            Inverter SKU:
                                                        </span>{" "}
                                                        {
                                                            combination.inverter
                                                                .SKU
                                                        }
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            Inverter Watt:
                                                        </span>{" "}
                                                        {
                                                            combination.inverter
                                                                .Watt
                                                        }{" "}
                                                        W
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            Inverter Phase:
                                                        </span>{" "}
                                                        {
                                                            combination.inverter
                                                                .Phase
                                                        }
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">
                                                            Inverter Weight:
                                                        </span>{" "}
                                                        {
                                                            combination.inverter
                                                                .Weight
                                                        }{" "}
                                                        kg
                                                    </p>

                                                    <h3 className="text-lg font-bold mt-4 mb-2">
                                                        Total Cost:
                                                    </h3>
                                                    <p className="text-xl font-bold">
                                                        ₹{" "}
                                                        {combination.total_cost}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">
                                        State Data:
                                    </h3>
                                    <p>
                                        <span className="font-bold">
                                            Subsidies Percentage:
                                        </span>{" "}
                                        {
                                            predictionResponse.stateData
                                                .subsidies_percentage
                                        }
                                    </p>

                                    <p>
                                        <span className="font-bold">
                                            Tax Benefits:{" "}
                                        </span>
                                        {
                                            predictionResponse.stateData
                                                .tax_benefits
                                        }
                                    </p>
                                    {/* Loans details */}
                                    <h3 className="text-lg font-bold mb-2">
                                        Loan Details:
                                    </h3>
                                    {predictionResponse.stateData.loans_details.schemes.map(
                                        (loan, index) => (
                                            <div
                                                key={index}
                                                className="border p-3 mb-3"
                                            >
                                                <p>
                                                    <span className="font-bold">
                                                        Loan Name:
                                                    </span>{" "}
                                                    {loan.name}
                                                </p>

                                                <p>
                                                    <span className="font-bold">
                                                        Description:
                                                    </span>{" "}
                                                    {loan.description}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">
                                        Savings Data:
                                    </h3>
                                    <p>
                                        <span className="font-bold">
                                            Trees Added:
                                        </span>{" "}
                                        {predictionResponse.treesAdded}
                                    </p>
                                    <p>
                                        <span className="font-bold">
                                            Annual Saving Amount:
                                        </span>{" "}
                                        ₹ {predictionResponse.anualSavingAmount}
                                    </p>
                                    <p>
                                        <span className="font-bold">
                                            Lifetime Saving Amount:{" "}
                                        </span>
                                        ₹{" "}
                                        {
                                            predictionResponse.lifeTimeSavingAmount
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                )}
                {vizResponse && (
                    <div className="w-full mt-5">
                        <CardHolder>
                            <Bar
                                options={options}
                                data={vizResponse}
                                className=""
                            />
                        </CardHolder>
                    </div>
                )}
            </div>
        </>
    );
}
