import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button,
    cn,
} from "@nextui-org/react";

export default function Nav() {
    return (
        <Navbar
            isBordered
            style={{ position: "fixed", bottom: "10px", width: "100%" }}
        >
            <NavbarContent justify="start">
                <NavbarBrand className="">
                    <Link href="/">
                        <b>yarn dev</b>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3" justify="end">
                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button variant="flat" color="primary">
                                    Go to Section
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                variant="faded"
                                aria-label="Dropdown menu with description"
                            >
                                <DropdownSection
                                    title="Customer Side"
                                    showDivider
                                >
                                    <DropdownItem key="surya-sahayak">
                                        <Link href="/surya-sahayak">
                                            Surya Sahayak
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key="data-entry">
                                        <Link href="/data-entry">
                                            Data Entry
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key="calculation">
                                        <Link href="/calculation">
                                            Calculation
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key="prediction">
                                        <Link href="/prediction">
                                            Prediction
                                        </Link>
                                    </DropdownItem>
                                </DropdownSection>
                                <DropdownSection title="Vendor Side">
                                    <DropdownItem key="visualization">
                                        <Link href="/visualization">
                                            Visualization
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key="optimization">
                                        <Link href="/optimization">
                                            Optimization
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key="forecasting">
                                        <Link href="/forecasting">
                                            Forecasting
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key="vendor-onboarding">
                                        <Link href="/vendor-onboarding">
                                            Vendor Onboarding
                                        </Link>
                                    </DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
        </Navbar>
    );
}
