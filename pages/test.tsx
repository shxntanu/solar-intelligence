import React from "react";
import { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Image,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
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
import faker from "faker";
import CardHolder from "@/components/CardHolder";

function RenderingInIFrame() {
    return (
        <div>
            <div className="flex-grow flex items-center justify-center">
                <Card className="w-[400px]">
                    <CardHeader className="flex flex-col gap-3 pt-10">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
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
                                <Link href="/">
                                    <p className="text-small text-default-500">
                                        Forgot password?
                                    </p>
                                </Link>
                                <p
                                    className="text-small text-primary hover:cursor-pointer"
                                    // onClick={handleSignIn}
                                >
                                    New User? Sign Up
                                </p>
                            </CardBody>
                        </form>
                    </div>
                </Card>
            </div>
            <div>
                {/* <CardHolder>
                    <Bar options={options} data={data} className="max-w-lg" />
                </CardHolder> */}
            </div>
        </div>
    );
}

export default RenderingInIFrame;
