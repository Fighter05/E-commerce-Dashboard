import { Box, Typography } from "@mui/material";
import SaleReportTable from "../components/SaleReportTable";

const SalesReport = () => {
  return (
    <div className="ml-80 p-8">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h2" fontWeight="bold">
              Sales Report
            </Typography>
          </Box>
        </Box>
        <SaleReportTable />
      </Box>
    </div>
  );
};

export default SalesReport;
