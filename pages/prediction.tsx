import { Card, CardBody, CardHeader, Divider, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import invertorCompanies from "@/constants/invertorCompanies.json";
import panelCompanies from "@/constants/panelCompanies.json";

export default function Prediction() {
    const [msebNumber, setMsebNumber] = useState(0);
    const [state, setState] = useState("");

    return (
        <div className="flex h-full items-center justify-center p-5">
            <div className="flex flex-col space-y-5">
                <Input
                    className=" max-w-md"
                    placeholder="Enter your MSEB Customer Number"
                    onChange={(e) => setMsebNumber(parseInt(e.target.value))}
                />
                <Input
                    className=" max-w-md"
                    placeholder="Enter your State"
                    onChange={(e) => setState(e.target.value)}
                />
                <Button
                    variant="bordered"
                    className=" text-black"
                    onClick={() => {}}
                >
                    Submit
                </Button>
            </div>
            <Card className=" w-2/5 p-5">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col w-1/2">
                        <Card className="p-5 mr-2">
                            <p className="text-xl font-bold pb-3">
                                WAAREE 540Wp 144 Cells Mono PERC Solar Module
                            </p>
                            <p className="text-lg">
                                <strong>Price: </strong>₹ 20,000
                            </p>
                            <p className="text-lg">
                                <strong>Weight: </strong>27.5
                            </p>
                            <p className="text-lg">
                                <strong>Minumum Purchase: </strong>2
                            </p>
                            <p className="text-lg">
                                <strong>Watt: </strong>540
                            </p>
                            <p className="text-lg">
                                <strong>Cell Type: </strong>null
                            </p>
                        </Card>
                        <p className="flex items-center justify-center pt-5">
                            Panel
                        </p>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <Card className="p-5 mr-2">
                            <p className="text-xl font-bold pb-3">
                                WAAREE 540Wp 144 Cells Mono PERC Solar Module
                            </p>
                            <p className="text-lg">
                                <strong>Price: </strong>₹ 20,000
                            </p>
                            <p className="text-lg">
                                <strong>Weight: </strong>27.5
                            </p>
                            <p className="text-lg">
                                <strong>Minumum Purchase: </strong>2
                            </p>
                            <p className="text-lg">
                                <strong>Watt: </strong>540
                            </p>
                            <p className="text-lg">
                                <strong>Cell Type: </strong>null
                            </p>
                        </Card>
                        <p className="flex items-center justify-center pt-5">
                            Inverter
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
