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
                    <b>Hacktastic4</b>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3" justify="end">
                    <NavbarItem>
                        <Link color="foreground" href="/visualization">
                            Visualization
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link
                            href="/optimization"
                            aria-current="page"
                            color="primary"
                        >
                            Optimization
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/forecasting">
                            Forecasting
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
        </Navbar>
    );
}
