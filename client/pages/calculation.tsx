"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

interface Appliance {
    [key: string]: number;
}

interface Counters {
    [key: string]: number;
}

const Home: React.FC = () => {
    const [appliances, setAppliances] = useState<Appliance>({
        Refrigerator: 150.0,
        "Air conditioner": 1500.0,
        "Washing machine": 400.0,
        "Clothes dryer": 3500.0,
        Dishwasher: 1800.0,
        "Electric oven": 3500.0,
        "Microwave oven": 1050.0,
        "Electric kettle": 1200.0,
        Toaster: 1000.0,
        "Coffee maker": 800.0,
        "Mixer grinder": 750.0,
        "Food processor": 700.0,
        "Electric cooker": 1000.0,
        "Induction cooktop": 1800.0,
        "Rice cooker": 500.0,
        "Vacuum cleaner": 1000.0,
        Iron: 1400.0,
        "Hair dryer": 1300.0,
        "Room heater": 1500.0,
        "Ceiling fan": 75.0,
        "Incandescent light bulb": 60.0,
        "LED bulb": 10.0,
    });

    const [counters, setCounters] = useState<Counters>({});

    useEffect(() => {
        const initialCounters: Counters = {};
        Object.keys(appliances).forEach((appliance) => {
            initialCounters[appliance] = 0;
        });
        setCounters(initialCounters);
    }, [appliances]);

    const handleIncrement = (appliance: string) => {
        setCounters((prevCounters) => ({
            ...prevCounters,
            [appliance]: prevCounters[appliance] + 1,
        }));
    };

    const handleDecrement = (appliance: string) => {
        if (counters[appliance] && counters[appliance] > 0) {
            setCounters((prevCounters) => ({
                ...prevCounters,
                [appliance]: prevCounters[appliance] - 1,
            }));
        }
    };

    const calculateTotalConsumption = () => {
        let totalConsumption = 0;
        Object.keys(counters).forEach((appliance) => {
            totalConsumption +=
                (counters[appliance] || 0) * appliances[appliance];
        });
        return totalConsumption;
    };

    return (
        <div className="bg-white container mx-auto px-4 py-8">
            <h1 className="pt-5 font-bold text-3xl pb-2 flex items-center justify-center">
                Peak Energy Consumption Calculation
            </h1>
            <p className="flex items-center justify-center text-center pb-5">
                This is where you can calculate peak energy consumption by your
                appliances
            </p>
            <div className="grid grid-cols-3 gap-4">
                {Object.keys(appliances).map((appliance) => (
                    <div
                        key={appliance}
                        className="flex flex-col items-center justify-center border rounded p-4"
                    >
                        <span className="text-lg text-black font-semibold mb-2">
                            {appliance}
                        </span>
                        <span className="text-lg text-black font-semibold mb-2">
                            {appliances[appliance]}W
                        </span>

                        <div className="flex items-center">
                            <Button
                                className="px-2 py-1 bg-green-500 text-white rounded w-8"
                                onClick={() => handleDecrement(appliance)}
                            >
                                -
                            </Button>
                            <span className="mx-2 text-black">
                                {counters[appliance]}
                            </span>
                            <Button
                                className="px-2 py-1 bg-green-500 text-white rounded w-8 "
                                onClick={() => handleIncrement(appliance)}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-black mt-8">
                <h2 className="text-xl font-semibold">
                    Total Consumption: {calculateTotalConsumption()} Watts ={" "}
                    {calculateTotalConsumption() / 1000} KW
                </h2>
            </div>
        </div>
    );
};

export default Home;
