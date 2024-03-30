import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import invertorCompanies from "@/constants/invertorCompanies.json";
import panelCompanies from "@/constants/panelCompanies.json";

export default function Prediction() {
    const [msebNumber, setMsebNumber] = useState(0);

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
                    onChange={(e) => setMsebNumber(parseInt(e.target.value))}
                />
                <Button
                    variant="bordered"
                    className=" text-black"
                    onClick={() => {}}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}
