import React from "react";
import { Box, Typography, Paper, Grid, Card, CardContent } from "@mui/material";
import {
  LineChart,
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
  { name: "9", orders: 32 },
  { name: "10", orders: 38 },
  { name: "11", orders: 34 },
  { name: "12", orders: 42 },
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
      <Typography variant="body1" gutterBottom>
        Home
      </Typography>
      <Typography variant="h6" gutterBottom>
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
                style={{ marginBottom: "10px",display:'flex' }}
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
               <span style={{display:'flex',textAlign:'center',margin:'auto 0px'}}>7</span>
              </Typography>
              <Typography variant="body2">Products</Typography>
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
                style={{ marginBottom: "10px",display:'flex' }}
              >
                <span
                  role="img"
                  aria-label="orders"
                  className="icon-home cart"
                  style={{ marginRight: "6px" }}
                >
                  <TbShoppingCart />
                </span>{" "}
                 <span style={{display:'flex',textAlign:'center',margin:'auto 0px'}}>303</span>
              </Typography>
              <Typography variant="body2">Orders</Typography>
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
                style={{ marginBottom: "10px",display:'flex' }}
              >
                <span
                  role="img"
                  aria-label="clients"
                  className="icon-home friends"
                  style={{ marginRight: "6px" }}
                >
                  <LiaUserFriendsSolid />
                </span>{" "}
                 <span style={{display:'flex',textAlign:'center',margin:'auto 0px'}}>25</span>
              </Typography>
              <Typography variant="body2">Clients</Typography>
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
                style={{ marginBottom: "10px",display:'flex'}}
              >
                <span
                  role="img"
                  aria-label="cities"
                  className="icon-home global"
                  style={{ marginRight: "6px" }}
                >
                  <TiGlobeOutline />
                </span>{" "}
           <span style={{display:'flex',textAlign:'center',margin:'auto 0px'}}>7</span>
              </Typography>
              <Typography variant="body2">Cities</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, backgroundColor: "#2C2F48", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Statistics for 2025</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#3A3D5A", color: "white" }} />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#A9DFBF" fill="#A9DFBF" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, backgroundColor: "#2C2F48", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>Cities with the Highest Orders</Typography>
            <table style={{ width: "100%", color: "white" }}>
              <tbody>
                {citiesData.map((city, index) => (
                  <tr key={index}>
                    <td>{city.rank}</td>
                    <td>{city.name}</td>
                    <td>{city.orders} Order{city.orders !== 1 ? "s" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Paper>
        </Grid>
      </Grid> */}
      </Grid>
    </Box>
  );
}
