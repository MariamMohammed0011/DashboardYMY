import React, { useState } from "react";
import { LuCircleDot } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import { BsPersonGear } from "react-icons/bs";
import { LiaProductHunt } from "react-icons/lia";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbShoppingCart } from "react-icons/tb";
import { TbMessage } from "react-icons/tb";
import { LuCirclePercent } from "react-icons/lu";
import { TbPhotoStar } from "react-icons/tb";
import { PiSealQuestionBold } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { TiGlobeOutline } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { VscCircle } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { IoSettings } from "react-icons/io5";
import Staff from "../staff/Staff";
export default function SideBar() {
  const [menu, setmenue] = useState(false);

  return (
    <div className="sidebar">
      <h3 className="company-name">
        Company name{" "}
        <span className="header-icon">
          <LuCircleDot />
        </span>
      </h3>
      <ul className="menu">
        <li>
          <Link to={'/'}>
            <span className="icon">
              <HiOutlineHome />
            </span>{" "}
            Home
          </Link>
        </li>
        <li>
         <Link to="/staff">
            <span className="icon">
              <BsPersonGear />
            </span>
            Staff
          </Link>
        </li>

        <li>
          <Accordion
            style={{ background: "#3A3D5A", color: "#fff", boxShadow: "none" }}
          >
            <AccordionSummary
              style={{
                padding: "0px 10px",

                fontSize: "13px",
              }}
              expandIcon={<IoIosArrowForward style={{ color: "#fff" }} />}
              aria-controls="panel1-content"
            >
              <span className="icon">
                {" "}
                <LiaProductHunt />{" "}
              </span>{" "}
              Products
            </AccordionSummary>

            <Link className="" to={"/products"}>
              <span className="icon ">
                <VscCircle />
              </span>
              Products
            </Link>

            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Attributes
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Rates
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Stock Reminder
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Categories
            </Link>
          </Accordion>
        </li>

        <li>
          <Accordion
            style={{
              background: "#3A3D5A",
              color: "#fff",
              boxShadow: "none",
              textDecoration: "capitalize",
            }}
          >
            <AccordionSummary
              style={{ padding: "0px 10px", fontSize: "13px" }}
              expandIcon={<IoIosArrowForward style={{ color: "#fff" }} />}
              aria-controls="panel1-content"
            >
              <span className="icon">
                {" "}
                <LiaUserFriendsSolid />{" "}
              </span>{" "}
              Clients & Locations
            </AccordionSummary>

            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              clients
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              locations
            </Link>
          </Accordion>
        </li>

        <li>
          <Link>
            <span className="icon">
              <TbShoppingCart />
            </span>{" "}
            Orders
          </Link>
        </li>

        <li>
          <Link>
            <span className="icon">
              <TbMessage />
            </span>{" "}
            Client Feedback
          </Link>
        </li>

        <li>
          {" "}
          <Link>
            <span className="icon">
              <LuCirclePercent />
            </span>{" "}
            Coupons
          </Link>
        </li>

        <li>
          <Link>
            {" "}
            <span className="icon">
              <TbPhotoStar />
            </span>{" "}
            Banners
          </Link>
        </li>

        <li>
          {" "}
          <Link>
            <span className="icon">
              <PiSealQuestionBold />
            </span>{" "}
            Common questions
          </Link>
        </li>

        <li>
          <Link style={{}}>
            <span className="icon">
              <TbMessage />
            </span>{" "}
            Messages
          </Link>
        </li>

        <li>
          <Accordion
            style={{ background:"#3A3D5A", color: "#fff", boxShadow: "none" }}
          >
            <AccordionSummary
              style={{ padding: "0px 10px", fontSize: "13px" }}
              expandIcon={<IoIosArrowForward style={{ color: "#fff" }} />}
              aria-controls="panel1-content"
            >
              <span className="icon">
                {" "}
                <HiOutlineInformationCircle />{" "}
              </span>{" "}
              Policies
            </AccordionSummary>

            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Privacy Policy
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Terms and Conditions
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              PRefund Policy
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Cancellation Policy
            </Link>
          </Accordion>
        </li>
        <li>
          <Accordion
            style={{
              background: "#3A3D5A",
              color: "#fff",
              boxShadow: "none",
              textDecoration: "capitalize",
            }}
          >
            <AccordionSummary
              style={{ padding: "0px 10px", fontSize: "13px" }}
              expandIcon={<IoIosArrowForward style={{ color: "#fff" }} />}
              aria-controls="panel1-content"
            >
              <span className="icon">
                {" "}
                <TiGlobeOutline />{" "}
              </span>{" "}
              Regions Setup
            </AccordionSummary>

            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              countries
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              cities
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Regions
            </Link>
          </Accordion>
        </li>
        <li>
          <Accordion
            style={{
              background: "#3A3D5A",
              color: "#fff",
              boxShadow: "none",
              textDecoration: "capitalize",
            }}
          >
            <AccordionSummary
              style={{ padding: "0px 10px", fontSize: "13px" }}
              expandIcon={<IoIosArrowForward style={{ color: "#fff" }} />}
              aria-controls="panel1-content"
            >
              <span className="icon">
                {" "}
                <IoSettings />{" "}
              </span>
              Settings
            </AccordionSummary>

            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              General
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Orders
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Communication
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Home Page
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Payment
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              messages.About tailoring
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              Footer
            </Link>
            <Link>
              <span className="icon">
                <VscCircle />
              </span>
              About Us
            </Link>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}
