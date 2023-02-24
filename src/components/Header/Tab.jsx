import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
    const [value, setValue] = React.useState("one");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box xs={{ width: "100%" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                // minWidth="50%"
            >
                <Tab value="About" label="About" />
                <Tab value="Finder" label="Finder" />
                <Tab value="Contact" label="Contact" />
            </Tabs>
        </Box>
    );
}
