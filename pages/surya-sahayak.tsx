import { Card, Button, Input } from "@nextui-org/react";
import Accordion from "@/components/Accordion";

export default function Information() {
    return (
        <div
            // style={{ height: "calc(100vh - 150px)" }}
            className="flex items-start justify-center pt-5"
        >
            <div className="space-y-5 w-1/2">
                <h1 className="pt-5 font-bold text-3xl -pb-1 flex items-center justify-center">
                    Surya Sahayak
                </h1>
                <p className="flex items-center justify-center text-center">
                    This is where you can converse with our custom trained LLM,
                    complete with the latest <br /> data regarding renewable
                    resources
                </p>
                <div className="flex flex-row space-x-5">
                    <Input placeholder="Enter your prompt..." />
                    <Button variant="bordered">Submit</Button>
                </div>
                <Card className="p-5">
                    <p>Waiting for prompt...</p>
                </Card>
                <Accordion />
                <Accordion />

                <Accordion />
                <Accordion />
            </div>
        </div>
    );
}
