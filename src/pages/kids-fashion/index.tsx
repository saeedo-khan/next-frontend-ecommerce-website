import React from "react";
// component

import { Box, Typography } from "@mui/material";
import Image from "next/image";

// images
import footwear from "../../assets/images/footwear_thumbnails.jpg";
import clothes from "../../assets/images/clothes_thumb.jpg";
import watches from "../../assets/images/watches_thumb.jpg";
import Link from "next/link";

const kidsFashion = () => {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            marginTop: theme.spacing(20),
            marginBottom: theme.spacing(10),
          },
        })}
      >
        <Link href="/kids-fashion/2" passHref>
          
          <Box sx={{ textAlign: "center", cursor: "pointer" }} component={'div'}>
            <Box
              sx={{
                width: "250px",
                height: "150px",
                position: "relative",
                borderRadius: "150px",
              }}
            >
              <Image
                src={footwear}
                alt="footwear"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Typography mt={1} fontWeight={600}>
              Footwear
            </Typography>
          </Box>
          
        </Link>

        <Link href="/kids-fashion/1" passHref>
          
          <Box
            sx={(theme) => ({
              textAlign: "center",
              cursor: "pointer",
              marginLeft: theme.spacing(10),
              marginRight: theme.spacing(10),
              [theme.breakpoints.down("md")]: {
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(5),
                marginX: "0",
              },
            })}
            component={'div'}
          >
            <Box
              sx={{
                width: "250px",
                height: "150px",
                position: "relative",
              }}
            >
              <Image
                src={clothes}
                alt="clothes"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Typography mt={1} fontWeight={600}>
              Clothes
            </Typography>
          </Box>
          
        </Link>

        <Link href="/kids-fashion/3" passHref>
          
          <Box sx={{ textAlign: "center", cursor: "pointer" }} component={'div'}>
            <Box
              sx={{
                width: "250px",
                height: "150px",
                position: "relative",
              }}
            >
              <Image
                src={watches}
                alt="watches"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Typography mt={1} fontWeight={600}>
              Watches
            </Typography>
          </Box>
          
        </Link>
      </Box>
    </Box>
  );
};

export default kidsFashion;
