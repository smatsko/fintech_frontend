import * as React from 'react';
import {Box, Typography} from "@mui/material";
import dayjs from "dayjs";
import {DataGrid} from "@mui/x-data-grid";






export const Greed1 = ({xData, xOnSelect}) => {

    const columns = [
        {field: 'id', headerName: 'Code', width: 90,},
        {
            field: 'fromDate', headerName: 'Index From', width: 120,
            valueFormatter: (params) => dayjs(params).format("DD/MMM/YYYY")
        },
        {
            field: 'toDate', headerName: 'Index To', width: 120,
            valueFormatter: (params) => dayjs(params).format("DD/MMM/YYYY")
        },
    ];

    const DataGreedTitle = () => {
        return (
            <Box style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Typography>Loaded indexes</Typography>
            </Box>
        )
    }


    return (

        <DataGrid
            columns={columns}
            rows={xData}
            disableMultipleRowSelection={false}
            onRowSelectionModelChange={(ids) => xOnSelect(ids)}
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
            onSelectionModelChange={itm => console.log(itm)}
            checkboxSelection
            disableRowSelectionOnClick
        />

    );
};