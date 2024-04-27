import React, {useContext, useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Box, Grid, Typography} from "@mui/material";
import {AppBarHeight, AppBottomBarHeight, prjStyles} from "../utils/styles.js";
import {UserContext} from "../utils/userContext.js";
import {getIndexes, getIndexPeriod} from "../utils/communicationAction.js";

import dayjs from "dayjs";


const columns = [
    {field: 'id', headerName: 'Code', width: 90, },
    {field: 'fromDate', headerName: 'Index From', width: 120,
         valueFormatter: (params) => dayjs(params).format("DD/MMM/YYYY") },
    {field: 'toDate', headerName: 'Index To', width: 120,
        valueFormatter: (params) => dayjs(params).format("DD/MMM/YYYY")},
];


/*
function customCheckbox(theme) {
    return {
        '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${
                theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
            }`,
            borderRadius: 2,
        },
        '& .MuiCheckbox-root svg path': {
            display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: '#1890ff',
            transform: 'none',
            top: '39%',
            border: 0,
        },
    };
}
*/

/*

const StyledDataGrid = styled(DataGrid)(({theme}) => ({
    border: 0,
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
    ...customCheckbox(theme),
}));
*/


const AdministrativePanel = () => {
    const {
        screenSize,
    } = useContext(UserContext);

    const DataGreedTitle = () => {
        return (
            <Box style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Typography>Loaded indexes</Typography>
            </Box>
        )
    }

    const [indexes, setIndexes] = useState([])

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
                                fromDate: dayjs(res["fromData"]).toDate(),
                                toDate: dayjs(res["toData"]).toDate(),

                            }
                        });
                }

                setIndexes(indexes);
            } catch {
                setIndexes({});
            }

        })()
    }, []);

    return (
        <Box component="div" style={prjStyles.AdminPage} sx={
            {
                minHeight: `${screenSize - AppBottomBarHeight - AppBarHeight + 1}px`,
            }}>
            <Grid container>
                <Grid item xs={12} sx={{mb: 2}}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                    <DataGrid
                        columns={columns}
                        rows={indexes}
                        disableMultipleRowSelection={true}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        sx={{
                            width: "50ch",
                            background: "white",
                            color: "black",
                            "&.MuiDataGrid-root": {
                                "--DataGrid-containerBackground": "white",
                            }
                        }}
                        slots={{toolbar: DataGreedTitle}}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />


                </Grid>
            </Grid>

        </Box>
    );
};

export default AdministrativePanel;