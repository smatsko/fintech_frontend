import React from 'react';
import {baseColor} from "../utils/constants.js";
import {Grid, Stack, Typography} from "@mui/material";

const Block5 = ({setStatistics}) => {

    //const color1 = text5[0] === "-" ? "#CB5732" : "#0D9071";


    const StockLine = ({oneLine}) => {

        const color1 = (field) => {
            return field[0] === "-" ? "#CB5732" : "#0D9071"
        }

        let styleMain = {
            background: "#AAA8D4",
        }

        let styleHead = {}

        if (!oneLine) {
            oneLine = {
                stock: "Stocks",
                last: "Last",
                chg: "Chg",
                chgPst: "Chg%"
            }
            styleMain = {};
            styleHead = {color: "white"}
        }

        return (

            <Grid container spacing={0} sx={{
                mt: "4px",
                minHeight: "36px",
                justifyContent: "right",
                alignItems: "center",
                borderRadius: "4px",
                ... styleMain
            }}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "#1C093C",
                            ... styleHead,
                        }}>{oneLine.stock}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{
                        fontSize: "16px", fontWeight: "500",
                        color: "#1C093C",
                        ... styleHead,
                    }}>{oneLine.last}</Typography>

                </Grid>

                <Grid item xs={3}>
                    <Typography sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: color1(oneLine.chg),
                        ... styleHead,
                    }}>{oneLine.chg}</Typography>

                </Grid>

                <Grid item xs={2}>
                    <Typography sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: color1(oneLine.chgPst),
                        ... styleHead,
                    }}>{oneLine.chgPst}</Typography>
                </Grid>

            </Grid>
        )
    }


    return (
        <Stack sx={{
            borderRadius: "10px",
            backgroundColor: baseColor,
            minWidth: "400px",
            minHeight: "200px",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            m: 2,
        }}>
            <Typography sx={{fontSize: "24px", fontWeight: "500"}}> Today’s Price Fluctuations </Typography>
            <StockLine/>
            {setStatistics.map((set) => (<StockLine oneLine={set}/>))}

        </Stack>
    );
};

export default Block5;