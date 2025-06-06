import React from "react";
import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IoAddCircleSharp } from "react-icons/io5";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export default function Staff() {
  // حالة فارغة للجدول (يمكنك إضافة بيانات لاحقًا)
  const staffData = [];

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        p={1}
        style={{ marginTop: "-12px", marginBottom: "12px" }}
      >
        <Link
          to="/"
          style={{
            color: "#33ffff",
            fontWeight: 250,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            color: "#fefefe",
            opacity: 0.7,
          }}
        >
          &gt;
        </Typography>

        <Typography
          variant="body1"
          underline="none"
          sx={{
            fontSize: "14px",
            fontWeight: 300,
            color: "#fefefe",
            opacity: 0.7,
          }}
        >
          Staff
        </Typography>
      </Stack>
      <Box sx={{ backgroundColor: "#3A3D5A", borderRadius: "5px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
          p={2}
        >
          <Box
            sx={{
              display: "flex",
              border: "1px solid #6C63FF",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <TextField
              placeholder="Name or email"
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                  backgroundColor: "#3A3D5A",
                  "& fieldset": { border: "none" },
                  "& input": { color: "#ccc" },
                },
                minWidth: "220px",
              }}
            />
            <Button
              variant="contained"
              endIcon={<SearchOutlinedIcon />}
              sx={{
                borderRadius: 0,
                backgroundColor: "#3A3D5A",
                color: "#6C63FF",
                px: 2,
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#2A3550",
                  opacity: 0.9,
                },
              }}
            >
              Search
            </Button>
          </Box>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#6C63FF",
              color: "#6C63FF",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&:hover": { borderColor: "#5A52D5" },
            }}
            startIcon={<IoAddCircleSharp />}
          >
            Add New
          </Button>
        </Box>

        <TableContainer sx={{ backgroundColor: "#3A3D5A", width: "100%" }}>
          <Table sx={{ backgroundColor: "#3A3D5A", width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  #
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  NAME
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  EMAIL
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  STATUS
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontSize: "12px" }}>
                  ACTIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} sx={{ textAlign: "center", py: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        width="300"
                        height="300"
                        src="https://rukn-alanaqah.trendline.marketing/assets/img/empty_data.svg"
                        alt="Empty Data"
                        style={{ marginBottom: "20px" }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#FFFFFF",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <Box sx={{ fontSize: "30px", marginTop: "-20px" }}>
                          {"  لا يوجد بيانات:("}
                        </Box>
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                staffData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#FFFFFF" }}>{index + 1}</TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>{row.name}</TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>{row.email}</TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>
                      {row.status}
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>
                      {row.actions}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
