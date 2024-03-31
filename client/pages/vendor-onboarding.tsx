import { Card, Input, Button, Checkbox } from "@nextui-org/react";

export default function DataEntry() {
    return (
        <div
            // style={{ height: "calc(100vh - 130px)" }}
            className="flex flex-col items-center justify-center pt-5"
        >
            <div className="flex flex-col items-center justify-center pb-5">
                <h1 className=" font-bold text-3xl pb-2">Vendor Onboarding</h1>
                <p>
                    This is where Vendors can enter their details for Onboarding
                    onto our platform
                </p>
            </div>
            <Card className="p-5 w-2/5">
                <div className="space-y-5">
                    <Input label="Name" placeholder="Enter your name" />
                    <Input
                        label="Contact Number"
                        placeholder="Enter your contact number"
                    />
                    <Input label="Email" placeholder="Enter your email ID" />
                    <Input
                        label="Village Name"
                        placeholder="Enter your village name"
                    />
                    <Input label="Taluka" placeholder="Enter your taluka" />
                    <Input label="District" placeholder="Enter your district" />
                    <Button variant="shadow" color="primary">
                        Submit
                    </Button>
                </div>
            </Card>
        </div>
    );
}
