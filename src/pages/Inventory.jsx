import { Box, Typography } from "@mui/material";
import InventoryTable from "../components/InventoryTable";

const Inventory = () => {
  return (
    <div className="ml-80 p-8">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h2" fontWeight="bold">
              Inventory
            </Typography>
          </Box>
        </Box>
        <InventoryTable />
      </Box>
    </div>
  );
};

export default Inventory;
