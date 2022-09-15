import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          classname="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          CopyRight 2022 Robert Neyrinck
        </Typography>
       
      </Box>
    </Stack>
  );
};

export default Feed;
