import React from "react";
import {
  Box,
  TextField,
  Tooltip,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { IoAddCircleSharp } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbStars } from "react-icons/tb";
import { GoCheckCircleFill } from "react-icons/go";
import { FaFileExport } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { GoXCircleFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { TbPointFilled } from "react-icons/tb";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
export default function Products() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const productsData = [
    {
      id: 1,
      name: "قميص نسائي",
      category: "Women's Clothing",
      price: [
        {
          value: "199.00",
          details: "From Size S, Fabric Type Cotton, Length Long",
        },
      ],
      stock: [
        { value: "4", details: "From Size S, Fabric Type Cotton, Length Long" },
      ],
      status: "Active",
    },
    {
      id: 2,
      name: "test2",
      category: "Wool Fabrics",
      price: ["77.00"],
      stock: ["777"],
      status: "Active",
    },
    {
      id: 3,
      name: "test",
      category: "Linen Fabrics",
      price: ["77.00"],
      stock: ["776"],
      status: "Active",
    },
    {
      id: 4,
      name: "test",
      category: "---",
      price: [
        { value: "100.00", details: "From Size M" },
        { value: "200.00", details: "From Size L" },
      ],
      stock: [
        { value: "9", details: "From Size M" },
        { value: "5", details: "From Size L" },
      ],
      status: "Active",
    },
    {
      id: 5,
      name: "Product 1",
      category: "---",
      price: [{ value: "400.00", details: "From Fabric Type Cotton" }],
      stock: [{ value: "1000", details: "From Fabric Type Cotton" }],
      status: "Inactive",
    },
    {
      id: 6,
      name: "Premium Cotton Fabric",
      category: "Silk Fabrics",
      price: ["600.00"],
      stock: ["1644"],
      status: "Active",
    },
    {
      id: 7,
      name: "Luxury Dress",
      category: "Cotton Fabrics",
      price: [
        {
          value: "10.00",
          details: "From Size S, Fabric Type Cotton, Color 000000",
        },
        {
          value: "15.00",
          details: "From Size L, Fabric Type Wool, Color ffffff",
        },
      ],
      stock: [
        {
          value: "79",
          details: "From Size S, Fabric Type Cotton, Color 000000",
        },
        {
          value: "293",
          details: "From Size L, Fabric Type Wool, Color ffffff",
        },
      ],
      status: "Active",
    },
  ];
  const handleMenuOpen = (event, row) => {
    // console.log("Opening menu for row:", row);
    console.log("Anchor El:", event.currentTarget);
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };
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
          Products
        </Typography>
      </Stack>

      <Box
        sx={{
        
          width:'990px',
          backgroundColor: "#3A3D5A",
          minHeight: "300px",
          color: "#FFFFFF",
          borderRadius: "10px ",
          minHeight:'100vh',
         
         
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "10px ",
            mb: 3,
            height: "150px",
            background: "#3A3D5A",
            borderBottom: "3px solid #33364e",
            boxShadow: "2px 20px 20px #33364e",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "100px",
              height: "40px",
              margin: "50px",
              backgroundColor: "#7367f0",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#5A52D5" },
            }}
          >
            <HiAdjustmentsVertical
              style={{
                fontSize: "23px",
                color: "white",
                fontWeight: "200",
                marginRight: "5px",
              }}
            />{" "}
            Filter
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 0,
            alignItems: "end",
            justifyContent: "flex-end",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#6C63FF",
              width: "150px",
              height: "40px",
              borderRadius: "5px 0px 0px 5px",
              color: "#6C63FF",
              "&:hover": { borderColor: "#5A52D5" },
            }}
          >
            ADD NEW
            <IoAddCircleSharp
              style={{ color: "#6C63FF", fontSize: "20px", marginLeft: "7px" }}
            />
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#6C63FF",
              width: "150px",
              height: "40px",
              borderRadius: "0px 5px 5px 0px",
              color: "#6C63FF",
              "&:hover": { borderColor: "#5A52D5" },
            }}
          >
            Export XLS
            <FaFileExport
              style={{ color: "#6C63FF", fontSize: "20px", marginLeft: "7px" }}
            />
          </Button>
        </Box>





      <Box sx={{ width: "100%", overflowX: "auto" ,height:'100%',overflowY:'hidden'}} >
        <TableContainer
            sx={{
              backgroundColor: "#3A3D5A",
              borderRadius: "8px",
              color: "#fefefe",
              opacity: 0.7,
              height:'100%',
              minWidth: "100%", 
            }}
          >
            <Table sx={{ minWidth: 1200 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#FFFFFF", width: "5%", minWidth: "50px" }}>#</TableCell>
                  <TableCell sx={{ color: "#FFFFFF", width: "20%", minWidth: "200px" }}>NAME</TableCell>
                  <TableCell sx={{ color: "#FFFFFF", width: "15%", minWidth: "150px" }}>CATEGORIES</TableCell>
                  <TableCell sx={{ color: "#FFFFFF", width: "25%", minWidth: "250px" }}>PRICE</TableCell>
                  <TableCell sx={{ color: "#FFFFFF", width: "25%", minWidth: "250px" }}>STOCK</TableCell>
                  <TableCell sx={{ color: "#FFFFFF", width: "10%", minWidth: "100px" }}>STATUS</TableCell>
                  <TableCell sx={{ color: "#FFFFFF", width: "5%", minWidth: "50px" }}>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsData.map((row) => (
                  <TableRow key={row.id} style={{border:'none',height:'10px'}}>
                    <TableCell sx={{ color: "#FFFFFF" }}>{row.id}</TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>{row.name}</TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>
                      <Tooltip
                        title={
                          row.category === "---" ? "No categories" : row.category
                        }
                        arrow
                      >
                        <span>{row.category}</span>
                      </Tooltip>
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>
                      {Array.isArray(row.price) ? (
                        row.price.map((p, i) => {
                          const isObject = typeof p === "object";
                          const content = isObject
                            ? `${p.value} ${p.details}`
                            : p;
                          return (
                            <Box
                              key={i}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "#A0AEC0",
                              }}
                            >
                              {isObject && (
                                <TbPointFilled
                                  style={{ fontSize: "24px", color: "#fff" }}
                                />
                              )}
                              <Typography
                                sx={{
                                  color: "#A0AEC0",
                                  fontSize: isObject ? "12px" : "18px",
                                }}
                              >
                                {content}
                              </Typography>
                            </Box>
                          );
                        })
                      ) : (
                        <Typography sx={{ color: "#A0AEC0" }}>
                          {row.price}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>
                      {Array.isArray(row.stock) ? (
                        row.stock.map((s, i) => {
                          const isObject = typeof s === "object";
                          const content = isObject
                            ? `${s.value} ${s.details}`
                            : s;
                          return (
                            <Box
                              key={i}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "#A0AEC0",
                              }}
                            >
                              {isObject && (
                                <TbPointFilled
                                  style={{ fontSize: "24px", color: "#fff" }}
                                />
                              )}
                              <Typography
                                sx={{
                                  color: "#A0AEC0",
                                  fontSize: isObject ? "15px" : "13px",
                                }}
                              >
                                {content}
                              </Typography>
                            </Box>
                          );
                        })
                      ) : (
                        <Typography sx={{ color: "#A0AEC0" }}>
                          {row.stock} 
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>
                    
                      <Box  >
                        
                        <Typography>
                         {
                          row.status==='Active'?
                          <Box sx={{background:'#4c5071',display:'flex',justifyContent:'center',alignContent:'center',borderRadius:'5px'}}><Typography sx={{fontSize:'15px',display:'flex',gap:0.6,textAlign:'center',alignItems:'center',color:'#6C63FF'}}>Active<GoCheckCircleFill style={{fontSize:'14px',color:'#6C63FF'}}/></Typography></Box>:
                          <Box sx={{background:'#d56666d8',display:'flex',justifyContent:'center',alignContent:'center',borderRadius:'5px'}}><Typography sx={{fontSize:'15px',display:'flex',gap:0.6,textAlign:'center',alignItems:'center',color:'#882d2deb'}}>Inactive<GoXCircleFill style={{fontSize:'14px',color:'#882d2deb'}}/></Typography></Box>
                        
                         }
                        </Typography>
                        
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF" }}>
                      <IconButton
              onClick={(e) => handleMenuOpen(e, row)}
              sx={{ color: "#A0AEC0" }}
            >
              <MoreVertOutlinedIcon />
            </IconButton>
           
                    </TableCell>
        
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> 
                      <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}
  PaperProps={{
    sx: { backgroundColor: "#3A3D5A", color: "#FFFFFF", zIndex: 1300,marginLeft:'-80px',borderRadius:'10px',width:'170px' }
  }}
>
  <MenuItem sx={{width:'90%',margin:'auto', color: "#FFFFFF" ,gap:1,'&:hover':{color:'#6C63FF',fontWeight:'200',background:'#4c5071',borderRadius:'10px'} }} onClick={handleMenuClose}>
  <CiEdit/>  Edit
  </MenuItem>
  <MenuItem sx={{width:'90%',margin:'auto', color: "#FFFFFF",gap:1  ,'&:hover':{color:'#6C63FF',fontWeight:'200',background:'#4c5071',borderRadius:'10px'}}} onClick={handleMenuClose}>
   <TbStars/> Rates
  </MenuItem>
  <MenuItem sx={{width:'90%',margin:'auto', color: "#FFFFFF"  ,gap:1 ,'&:hover':{color:'#6C63FF',fontWeight:'200',background:'#4c5071',borderRadius:'10px'}}} onClick={handleMenuClose}>
   <AiFillCloseCircle/> Deactivate
  </MenuItem>
</Menu>
        </Box>
      </Box>
    </>
  );
}
