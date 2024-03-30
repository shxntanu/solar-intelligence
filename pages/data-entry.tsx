import { Card, Input, Button, Checkbox } from "@nextui-org/react";

export default function DataEntry() {
    return (
        <div
            style={{ height: "calc(100vh - 130px)" }}
            className="flex flex-col items-center justify-center pt-5"
        >
            <div className="flex flex-col items-center justify-center pb-5">
                <h1 className=" font-bold text-3xl pb-2">Data Entry</h1>
                <p>
                    This is where Sarpanchs of Villages and Gram Panchayats can
                    add their respective villages to our database
                </p>
            </div>
            <div className="grid grid-cols-2 w-3/4 space-x-5">
                <Card className="p-5 col-span-1">
                    <div className="space-y-5">
                        <h1 className=" font-bold">Your Details</h1>
                        <Input label="Name" placeholder="Enter your name" />
                        <Input
                            label="Contact Number"
                            placeholder="Enter your contact number"
                        />
                        <h1 className=" font-bold">Village Details</h1>
                        <Input
                            label="Village Name"
                            placeholder="Enter your village name"
                        />
                        <Input label="Taluka" placeholder="Enter your taluka" />
                        <Input
                            label="District"
                            placeholder="Enter your district"
                        />
                        <h1 className=" font-bold">Village Climate Details</h1>
                        <Input
                            label="Wind Speed"
                            placeholder="Enter the avg wind speed (in knots)"
                        />
                        <Input
                            label="Temperature"
                            placeholder="Enter the avg annual temperature"
                        />
                    </div>
                </Card>
                <Card className="p-5 col-span-1">
                    <div className="space-y-5">
                        {/* <Input
                            label="Renewable Energy"
                            placeholder="Do you use renewable energy solutions in your village"
                        /> */}
                        <h1 className=" font-bold">Renewable Energy</h1>
                        <Checkbox>
                            Do you use renewable energy solutions in your
                            village
                        </Checkbox>
                        <Checkbox>
                            Do you plan to you use renewable energy solutions in
                            your village?
                        </Checkbox>
                        <h1 className=" font-bold">
                            Current Village Energy Sources
                        </h1>
                        <Input
                            label="Current Energy Source"
                            placeholder="Enter your village's main energy provider"
                        />
                        <Input
                            label="Current Energy Usage"
                            placeholder="Enter the current energy usage by your village"
                        />
                        <Input
                            label="Capacity"
                            placeholder="Enter the current installed capacity"
                        />
                        <Input
                            label="Land Availability"
                            placeholder="Enter the area (in acres) that is available for Solar Power plant development"
                        />
                        <Button variant="shadow" color="primary">
                            Submit
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
