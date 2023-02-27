import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function BasicTabs() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tab
          label="Description"
          sx={{
            color: "#222222",
            fontSize: "15px",
            fontWeight: "500",
            lineHeight: "20px",
            textAlign: "left",
            textTransform: "capitalize",
            ml: 20,
          }}
        />
      </Box>
      <Box sx={{ width: "1168px", py: 5, minHeight: 400, ml: 2, mx: "auto" }}>
        <Box>
          <h6
            style={{
              color: "#222222",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "27px",
              marginBottom: "8px",
            }}
          >
            Introduction
          </h6>
          <p
            style={{
              color: "#797979",
              fontSize: "15px",
              lineHeight: "22.5px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the on leap into electronic
            typesetting, remaining essentially unchanged. It wasn’t popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, andei more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum to make a
            type specimen book
          </p>
        </Box>
        <Box sx={{ mt: 5 }}>
          <h6
            style={{
              color: "#222222",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "27px",
              marginBottom: "8px",
            }}
          >
            Features :
          </h6>
          <ul
            style={{
              color: "#797979",
              fontSize: "15px",
              lineHeight: "22.5px",
              padding: "20px",
            }}
          >
            <li>slim body with metal cover</li>
            <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
            <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
            <li>
              NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard,
              touchpad with gesture support
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
