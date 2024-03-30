import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@nextui-org/react";

export default function Nav() {
    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarBrand className="">
                    <Link href="/">
                        <b>Hacktastic4</b>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3" justify="end">
                    <NavbarItem>
                        <Link color="foreground" href="/visualization">
                            Visualization
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="/optimization"
                            // aria-current="page"
                            color="foreground"
                        >
                            Optimization
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/forecasting">
                            Forecasting
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link color="primary" href="/surya-sahayak">
                            Surya Sahayak
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/data-entry">
                            Data Entry
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/calculation">
                            Calculation
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
        </Navbar>
    );
}
