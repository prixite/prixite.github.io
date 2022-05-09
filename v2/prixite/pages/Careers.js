import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Header from "../components/header";
import careersPageBg from "../public/images/careersPageBg.jpg";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Prixite - Careers </title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgImg={careersPageBg}>
        <Box
          sx={{
            padding: "230px 0px 190px 0px",
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "white",
            }}
          >
            JOIN US
          </Typography>
        </Box>
      </Header>
    </>
  );
}
