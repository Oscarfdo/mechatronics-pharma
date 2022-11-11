
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette:{
        primary:{
            main: '#4CAF50'
        },

        secondary:{
            main: '#a5b1c2a2'
        },

        error:{
            main: red.A400
        }
    }


})