import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInventory } from "../data/testData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "antd";

function InventoryTable() {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "left",
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "In Stock"
                ? "#52c41a"
                : status === "Low Stock"
                ? "#faad14"
                : "#ff4d4f"
            }
            borderRadius="4px"
          >
            <Typography color={"green"} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "options",
      headerName: "Options",
      renderCell: () => {
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            m="0 auto"
          >
            <IconButton type="button">
              <EditIcon />
            </IconButton>
            <IconButton type="button">
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#1976d2",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1976d2",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#f4f6f8",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#f4f6f8",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `black !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInventory}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
}

export default InventoryTable;
