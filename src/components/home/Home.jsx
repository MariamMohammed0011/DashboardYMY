import React from "react";
import { Box, Typography, Paper, Grid, Card, CardContent } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LiaProductHunt } from "react-icons/lia";
import { TbShoppingCart } from "react-icons/tb";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TiGlobeOutline } from "react-icons/ti";

const data = [
  { name: "1", orders: 12 },
  { name: "2", orders: 18 },
  { name: "3", orders: 24 },
  { name: "4", orders: 30 },
  { name: "5", orders: 18 },
  { name: "6", orders: 22 },
  { name: "7", orders: 24 },
  { name: "8", orders: 28 },
  { name: "9", orders: 10 },
  { name: "10", orders: 25 },
  { name: "11", orders: 36 },
  { name: "12", orders: 30 },
];

const citiesData = [
  { rank: 1, name: "Dubai", orders: 94 },
  { rank: 2, name: "Sharjah", orders: 77 },
  { rank: 3, name: "Ajman", orders: 73 },
  { rank: 4, name: "Abu Dhabi", orders: 68 },
];

export default function Home() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: "#2C2F48",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Typography variant="body1" gutterBottom style={{ color: "#33ffff" }}>
        Home
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{
          fontSize: "13px",
          color: "#fefefe",
          opacity: "0.7",
          marginBottom: "20px",
        }}
      >
        Good morning, trend line 😊
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: "#3A3D5A",
              color: "white",
              width: "200px",
              borderBottom: "3px solid rgba(107, 116, 199, 0.7)",
              transition: "border-bottom 0.2s ease",

              "&:hover": {
                borderBottom: "3.3px solid #6b74c7",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <span
                  role="img"
                  aria-label="products"
                  className="icon-home products"
                  style={{ marginRight: "6px" }}
                >
                  {" "}
                  <LiaProductHunt />
                </span>{" "}
                <span
                  style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "auto 0px",
                  }}
                >
                  7
                </span>
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#fefefe", opacity: "0.7" }}
              >
                Products
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: "#3A3D5A",
              color: "white",
              width: "200px",
              borderBottom: "3px solid rgba(224, 146, 61, 0.3)",
              transition: "border-bottom 0.2s ease",

              "&:hover": {
                borderBottom: "3.3px solid #e0923d",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <span
                  role="img"
                  aria-label="orders"
                  className="icon-home cart"
                  style={{ marginRight: "6px" }}
                >
                  <TbShoppingCart />
                </span>{" "}
                <span
                  style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "auto 0px",
                  }}
                >
                  303
                </span>
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#fefefe", opacity: "0.7" }}
              >
                Orders
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: "#3A3D5A",
              color: "white",
              width: "200px",
              borderBottom: "3px solid rgba(234, 84, 85, 0.3)",
              transition: "border-bottom 0.2s ease",

              "&:hover": {
                borderBottom: "3.3px solid #ea5455",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <span
                  role="img"
                  aria-label="clients"
                  className="icon-home friends"
                  style={{ marginRight: "6px" }}
                >
                  <LiaUserFriendsSolid />
                </span>{" "}
                <span
                  style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "auto 0px",
                  }}
                >
                  25
                </span>
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#fefefe", opacity: "0.7" }}
              >
                Clients
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: "#3A3D5A",
              color: "white",
              width: "200px",
              borderBottom: "3px solid rgba(26, 183, 234, 0.3)",
              transition: "border-bottom 0.2s ease",

              "&:hover": {
                borderBottom: "3.3px solid #1ab7ea",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                component="div"
                style={{ marginBottom: "10px", display: "flex" }}
              >
                <span
                  role="img"
                  aria-label="cities"
                  className="icon-home global"
                  style={{ marginRight: "6px" }}
                >
                  <TiGlobeOutline />
                </span>{" "}
                <span
                  style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "auto 0px",
                  }}
                >
                  7
                </span>
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#fefefe", opacity: "0.7" }}
              >
                Cities
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} width={"60%"} pt={3}>
          <Paper
            sx={{
              p: 2,
              backgroundColor: "#3A3D5A",

              borderRadius: 2,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography
                variant="h6"
                style={{ fontSize: "16px", color: "#fefefe", opacity: "0.7" }}
              >
                Statistics for 2025
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#ccc" }}>
                Orders
              </Typography>
            </Box>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid stroke="#5D6D7E" strokeDasharray="0" />

                <XAxis
                  dataKey="name"
                  stroke="#ccc"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis stroke="#ccc" axisLine={false} tickLine={false} />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#3A3D5A",
                    color: "white",
                    width: "130px",
                    height: "50px",
                    fontSize: "11px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                  formatter={(value) => [`orders: ${value}`, ""]} // عرض "orders: [قيمة]"
                  labelFormatter={(label) => label} // عرض قيمة X (مثل "4")
                  cursor={{
                    stroke: "#fff",
                    strokeDasharray: "3 3",
                    opacity: "0.7",
                  }}
                />
                <Legend />
                <Area
                  // type="monotone"
                  dataKey="orders"
                  stroke="#9EFFC1"
                  fill="#9EFFC1"
                  fillOpacity={0.99}
                  // style={{ background: "#36bc8b"}}
                  // fillOpacity={0.3} // درجة الشفافية
                  // dot={{ r: 4, fill: "#A9DFBF", stroke: "#A9DFBF" }}
                  // dot={{ r: 3, fill: "#9EFFC1" }}
                  activeDot={{
                    r: 6,
                    fill: "#9EFFC1",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} width={"35%"} pt={3}>
          <Paper
            sx={{
              fontSize:'3px',
              p: 2,
              backgroundColor: "#3A3D5A",
              overflowY: "auto",
              borderRadius: 2,
              height: "300px", // تطابق الارتفاع مع الـ AreaChart
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontSize: "16px", color: "#fefefe", opacity: "0.7" }}
            >
              Cities with the Highest Orders
            </Typography>
            <TableContainer
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <Table sx={{ minWidth: "20%" }} aria-label="simple table">
                <TableHead   >
                  <TableRow >
                   <TableCell sx={{ color: "white", fontSize: "13px",p:0 ,textAlign:'center'}}>
#</TableCell>
                    <TableCell sx={{ color: "white", fontSize: "13px",p:0 ,textAlign:'center'}}>
                      Name
                    </TableCell>
                    <TableCell sx={{ color: "white", fontSize: "13px" ,textAlign:'center'}}>
                      Number Of Orders
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {citiesData.map((city) => (
                    <TableRow key={city.rank}>
                      <TableCell sx={{ color: "white" ,fontSize: "12px", py: 1,textAlign:'center' }}>{city.rank}</TableCell>
                      <TableCell align="right" sx={{ color: "white" ,fontSize: "12px", py: 1,textAlign:'center' }}>
                        {city.name}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" ,fontSize: "12px", py: 1,textAlign:'center' }}>
                        {city.orders}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
