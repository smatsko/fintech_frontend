import React, {useContext, useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import {AppBarHeight, AppBottomBarHeight, prjStyles} from "../utils/styles.js";
import {UserContext} from "../utils/userContext.js";
import {getDataPeriodDays, getIndexes, getIndexPeriod} from "../utils/communicationAction.js";

import dayjs from "dayjs";
import Graph1 from "./Graph1.jsx";
import {Greed1} from "./Greed1.jsx";

const AdministrativePanel = () => {


        const {
            screenSize,
        } = useContext(UserContext);


        const [indexes, setIndexes] = useState([])
        const [selectedIndexes, setSelectedIndexes] = useState([])

        const [data, setData] = useState([])
        const {userProfile} = useContext(UserContext);


        useEffect(() => {


            (async () => {

                try {
                    let indexes = await getIndexes(userProfile.token)
                        .then(
                            res => {
                                if (res.ok) return res.json();
                                return res.json().then((res) => {
                                    throw new Error(res.status);
                                })
                            });


                    for (let i = 0; i < indexes.length; i++) {
                        await getIndexPeriod(userProfile.token, indexes[i])
                            .then(
                                res => {
                                    if (res.ok) return res.json();
                                    return res.json().then((res) => {
                                        throw new Error(res.status);
                                    })
                                })
                            .then((res) => {
                                indexes[i] = {
                                    id: indexes[i],
                                    fromDate: res["fromData"],
                                    toDate: res["toData"],

                                }
                            });
                    }

                    setIndexes(indexes);
                } catch {
                    setIndexes({});
                }

            })()
        }, []);

        const onRowsSelectionHandler = (ids) => {


            if (!ids.length) {
                setData([]);
                setSelectedIndexes([]);
                return;

            }

            setSelectedIndexes(ids);

            let fromDate = "999999999";
            let toDate = "";

            for (const vol of indexes) {
                if (ids.includes(vol.id)) {
                    if (fromDate > vol.fromDate) fromDate = vol.fromDate;
                    if (toDate < vol.toDate) toDate = vol.toDate;
                }
            }

            getDataPeriodDays(userProfile.token, ids, fromDate, toDate, 5)
                .then(
                    res => {
                        const xMap = new Map();
                        res.map((vol) => {
                            let tmp = xMap.get(vol.minDate) ? xMap.get(vol.minDate) : {};
                            tmp[vol.source] = +vol["startClose"];
                            tmp["name"] = dayjs(vol.minDate).format("DD/MMM/YY")
                            xMap.set(vol.minDate, tmp)
                            tmp = xMap.get(vol.maxDate) ? xMap.get(vol.maxDate) : {};
                            tmp[vol.source] = +vol["endClose"];
                            tmp["name"] = dayjs(vol.maxDate).format("DD/MMM/YY")
                            xMap.set(vol.maxDate, tmp);
                        });
                        console.log([...xMap.values()]);
                        setData([...xMap.values()]);

                    })
                .catch(
                    () => {

                    }
                );
        };


        return (
            <Box component="div" style={prjStyles.AdminPage} sx={
                {
                    minHeight: `${screenSize - AppBottomBarHeight - AppBarHeight + 1}px`,
                }}>
                <Grid container>
                    <Grid item xs={12} sx={{mb: 2}}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <Greed1 xData={indexes}
                                xOnSelect={onRowsSelectionHandler}
                        />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6} sx={{minHeight:200, mt:5}}>
                        <Graph1 data={data} indexes={selectedIndexes}/>
                    </Grid>
                    {/*<Grid item xs={6} sx={{minHeight:200, mt:5}}>
                    </Grid>
*/}

                </Grid>

            </Box>
        );
    }
;

export default AdministrativePanel;