import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import contactUsPageBg from "../public/images/contactUsPageBg.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Prixite - Contact Us</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgImg={contactUsPageBg}>
        <Box
          sx={{
            pt: { xs: "100px", lg: "230px" },
            pb: { xs: "100px", lg: "190px" },
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
            Contact US
          </Typography>
        </Box>
      </Header>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={"7rem"}
          sx={{
            py: "120px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" mb="1rem">
              Get in Touch, Feel Free to Contact
            </Typography>
            <Typography
              sx={{
                letterSpacing: "1px",
              }}
            >
              We are an innovative digital consultancy firm with enough
              experience to meet the requirements and concerns of each of our
              clients across the globe. Our wide range of services enables us to
              offer our clients the best working experience and great
              advancement techniques and tools to improve their business
              processes and delivering quality and progressive results for their
              organization. We have a quite simple and easy way for our clients
              to reach out to us. You may fill in the contact form below or
              email us at <strong>hi@prixite.com </strong> to request for
              consultation or if you have an inquiry. You may also call us at
              <strong> 042 37114925</strong> and let us know how we can help you
              in taking your business to another level.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              CONTACT INFO
            </Typography>
            <Typography fontWeight="bold" mt="2rem">
              Address
            </Typography>
            <Typography>4 Mozang Road, Near Family Hospital, Lahore</Typography>
            <Typography fontWeight="bold" mt="2rem">
              Email Us
            </Typography>
            <Typography>hi@prixite.com</Typography>
            <Typography fontWeight="bold" mt="2rem">
              Call Us
            </Typography>
            <Typography>042 37114925</Typography>
            <Stack
              direction="row"
              mt="2rem"
              spacing={3}
              sx={{
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <a target="_blank" href="https://web.facebook.com/prixite/">
                <FacebookRoundedIcon
                  htmlColor="var(--icon-grey-color)"
                  fontSize="large"
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: "var(--primary-green)",
                    },
                  }}
                />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/prixite/about/?viewAsMember=true"
              >
                <LinkedInIcon
                  htmlColor="var(--icon-grey-color)"
                  fontSize="large"
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: "var(--primary-green)",
                    },
                  }}
                />
              </a>
              <a target="_blank" href="https://github.com/Prixite">
                <GitHubIcon
                  htmlColor="var(--icon-grey-color)"
                  fontSize="large"
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: "var(--primary-green)",
                    },
                  }}
                />
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
