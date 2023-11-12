import { Box, Typography } from "@mui/material";
import CustomerTable from "../components/CustomerTable";

const Customer = () => {
  return (
    <div className="ml-80 p-3">
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h2" fontWeight="bold">
              Customer
            </Typography>
          </Box>
        </Box>
        <CustomerTable />
      </Box>
    </div>
  );
};

export default Customer;
