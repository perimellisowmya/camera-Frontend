import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {


    return (
        <React.Fragment>
            <Drawer
                anchor="left">
                <List>

                    <ListItemButton >
                        <ListItemIcon>
                            <ListItemText></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                </List>
            </Drawer>
            <IconButton
                sx={{ color: "white", marginLeft: "auto" }}

            >
                <MenuIcon color="white" />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;