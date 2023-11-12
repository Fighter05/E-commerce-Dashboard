import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SellIcon from "@mui/icons-material/Sell";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { mockLineData } from "../data/testData";

const Overview = () => {
  return (
    <div className="ml-80 p-8">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h2" fontWeight="bold">
            Overview
          </Typography>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(12,1fr)"
          gridAutoRows="140px"
          gap="20px"
          marginTop="20px"
        >
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
          >
            <Box width="100%" m="0 30px">
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
              >
                <Box display="flex" alignItems="center" gap="20px">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "gray" }}
                  >
                    TOTAL PROFIT
                  </Typography>
                  <AttachMoneyIcon
                    sx={{
                      color: "#f6f8f9",
                      fontSize: "60px",
                      backgroundColor: "orange",
                      padding: "5px",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "0",
                      top: "10%",
                    }}
                  />
                </Box>
              </Box>
              <Typography
                fontWeight="bold"
                variant="h4"
                sx={{ color: "black" }}
              >
                $147K
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
          >
            <Box width="100%" m="0 30px">
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
              >
                <Box display="flex" alignItems="center" gap="20px">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "gray" }}
                  >
                    TOTAL SOLD
                  </Typography>
                  <SellIcon
                    sx={{
                      color: "#f6f8f9",
                      fontSize: "60px",
                      backgroundColor: "red",
                      padding: "10px",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "0",
                      top: "10%",
                    }}
                  />
                </Box>
              </Box>
              <Typography
                fontWeight="bold"
                variant="h4"
                sx={{ color: "black" }}
              >
                19K
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
          >
            <Box width="100%" m="0 30px">
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
              >
                <Box display="flex" alignItems="center" gap="20px">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "gray" }}
                  >
                    NEW USERS
                  </Typography>
                  <GroupIcon
                    sx={{
                      color: "#f6f8f9",
                      fontSize: "60px",
                      backgroundColor: "brown",
                      padding: "10px",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "0",
                      top: "10%",
                    }}
                  />
                </Box>
              </Box>
              <Typography
                fontWeight="bold"
                variant="h4"
                sx={{ color: "black" }}
              >
                +3,630
              </Typography>
              <Box display="flex" gap="10px">
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: "red" }}
                  >
                    2%
                  </Typography>
                  <ArrowDownwardIcon sx={{ color: "red" }} />
                </Box>
                <Typography variant="h6" sx={{ color: "gray" }}>
                  Since last month
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            gridColumn="span 3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
          >
            <Box width="100%" m="0 30px">
              <Box
                display="flex"
                justifyContent="space-between"
                position="relative"
              >
                <Box display="flex" alignItems="center" gap="20px">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "gray" }}
                  >
                    GROWTH RATE
                  </Typography>
                  <ShowChartIcon
                    sx={{
                      color: "#f6f8f9",
                      fontSize: "60px",
                      backgroundColor: "green",
                      padding: "5px",
                      borderRadius: "50%",
                      position: "absolute",
                      right: "0",
                      top: "10%",
                    }}
                  />
                </Box>
              </Box>
              <Typography
                fontWeight="bold"
                variant="h4"
                sx={{ color: "black" }}
              >
                +200%
              </Typography>
              <Box display="flex" gap="10px">
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: "green" }}
                  >
                    13%
                  </Typography>
                  <ArrowUpwardIcon sx={{ color: "green" }} />
                </Box>
                <Typography variant="h6" sx={{ color: "gray" }}>
                  Since last month
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            gridColumn="span 8"
            boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
            gridRow="span 3"
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h6" fontWeight="bold" color="black">
                  PRODUCT SALES
                </Typography>
                <Typography variant="h4" fontWeight="500" color="black">
                  $153,035(Jan 1 - Jan 31)
                </Typography>
              </Box>
            </Box>
            <Box mt="10px" p="0 30px">
              <ResponsiveContainer height={325} width="100%">
                <AreaChart data={mockLineData}>
                  <XAxis
                    dataKey="label"
                    tick={{ fill: "black" }}
                    tickLine={{ stroke: "black" }}
                  />
                  <YAxis
                    unit="$"
                    tick={{ fill: "black" }}
                    tickLine={{ stroke: "black" }}
                  />
                  <CartesianGrid strokeDasharray="4" />
                  <Tooltip contentStyle={{ backgroundColor: "blue" }} />
                  <Area
                    dataKey="totalSales"
                    type="monotone"
                    stroke="#1976d2"
                    fill="#1976d2"
                    strokeWidth={2}
                    name="Total sales"
                    unit="$"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 3"
            overflow="auto"
            boxShadow="0 0 10px 0 rgba(0,0,0,0.1)"
            padding="20px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              colors="black"
              padding="10px"
            >
              <Typography color="black" variant="h5" fontWeight="600">
                TOP 5 PRODUCT SALES
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              paddingX="12px"
              marginBottom="12px"
            >
              <Box>
                <Typography color="#1976d2" variant="h5" fontWeight="600">
                  1.Product A
                </Typography>
                <Typography color="black">5,000 pcs</Typography>
              </Box>
              <Typography color="black" variant="h6" fontWeight="bold">
                $ 350,235
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="10px"
              paddingX="12px"
            >
              <Box>
                <Typography color="#1976d2" variant="h5" fontWeight="600">
                  2.Product B
                </Typography>
                <Typography color="black">4,555 pcs</Typography>
              </Box>
              <Typography color="black" variant="h6" fontWeight="bold">
                $ 280,235
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="12px"
              paddingX="12px"
            >
              <Box>
                <Typography color="#1976d2" variant="h5" fontWeight="600">
                  3.Product C
                </Typography>
                <Typography color="black">3,758 pcs</Typography>
              </Box>
              <Typography color="black" variant="h6" fontWeight="bold">
                $ 190,235
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="12px"
              paddingX="12px"
            >
              <Box>
                <Typography color="#1976d2" variant="h5" fontWeight="600">
                  4.Product D
                </Typography>
                <Typography color="black">2,974 pcs</Typography>
              </Box>
              <Typography color="black" variant="h6" fontWeight="bold">
                $ 150,235
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="12px"
              paddingX="12px"
            >
              <Box>
                <Typography color="#1976d2" variant="h5" fontWeight="600">
                  5.Product E
                </Typography>
                <Typography color="black">2,188 pcs</Typography>
              </Box>
              <Typography color="black" variant="h6" fontWeight="bold">
                $ 100,235
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Overview;
