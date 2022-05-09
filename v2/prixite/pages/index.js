import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import homePageBg from "../public/images/homePageBg.png";
import devOpsAsService from "../public/images/devOpsAsService.png";
import webDevelopment from "../public/images/webDevelopment.jpg";
import mobileDev from "../public/images/mobileDev.jpg";
import scraping from "../public/images/scraping.jpg";
import pwa from "../public/images/pwa.jpg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import reactjs from "../public/images/reactjs.jpg";
import wordpress from "../public/images/wordpress.jpg";
import python from "../public/images/python.jpg";

const services = [
  {
    title: "Web Development",
    desc: "Prixite being the exquisite web development brands offers innovative solutions to your web development needs in today’s dynamics.",
    img: webDevelopment,
  },
  {
    title: "WordPress Development",
    desc: "Prixite offers its clients superior quality WordPress solutions that helps them to create a compelling impact in the business world.",
    img: wordpress,
  },
  {
    title: "DevOps",
    desc: "Prixite DevOps practices help clients achieve their goals without compromising on product environment and infrastructure capabilities.",
    img: devOpsAsService,
  },
  {
    title: "Scraping",
    desc: "Prixite is one of the leading digital marketing service providers that believe in creating value-added solutions for our potential client's web data extraction needs.",
    img: scraping,
  },
  {
    title: "Python Experts",
    desc: "Prixite is one of the top companies to provide full-stack python web development services to its clients worldwide.",
    img: python,
  },
  {
    title: "Mobile Application Development",
    desc: "Prixite has extensive experience when it comes to creating digitally transformative and high-performing mobile apps.",
    img: mobileDev,
  },
  {
    title: "Progressive Web Application",
    desc: "Prixite is one of the top PWA service providers to its clients with progressive tools and approaches to their business needs.",
    img: pwa,
  },
  {
    title: "React development",
    desc: "Prixite is one of the top PWA service providers to its clients with progressive tools and approaches to their business needs.",
    img: reactjs,
  },
];


export default function Home() {
  return (
    <>
      <Head>
        <title>Prixite</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgImg={homePageBg}>
        <Container maxWidth="xl">
          <Stack
            pt={{ xs: "120px", lg: "180px" }}
            pb={{ xs: "100px", lg: "80px" }}
            direction={{ xs: "column", md: "row" }}
            spacing={5}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Transform Your Business With Us
              </Typography>
              <Divider
                textAlign="left"
                sx={{
                  width: "17%",
                  marginTop: ".8rem",
                  borderColor: "var(--primary-green)",
                  borderWidth: "1px",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  marginTop: "3rem",
                  color: "white",
                }}
              >
                One-stop Solution to Your Business Needs
              </Typography>
            </Box>
            <Box textAlign="center">
              <Image
                unoptimized
                priority
                loader={() =>
                  `https://i0.wp.com/prixite.com/wp-content/uploads/2021/05/software-house-in-Multan.png?w=500&ssl=1`
                }
                src={
                  "https://i0.wp.com/prixite.com/wp-content/uploads/2021/05/software-house-in-Multan.png?w=500&ssl=1"
                }
                width={400}
                height={300}
              />
            </Box>
          </Stack>
        </Container>
      </Header>
      <Container>
        <Box p="5rem 1.3rem">
          <Typography variant="h5" fontWeight="bold">
            Welcome to Prixite - Fastest Growing IT Company
          </Typography>
          <Typography margin="1.8rem 0">
            Prixite is one online technology solutions provider company that is
            considered as a new breed of thinkers who is driven to create
            effective business solutions for its clients. We aspire to become
            our client’s first choice when it comes to being a world leader in
            the progress and advancement of businesses through digital
            platforms.
          </Typography>
          <Typography margin="1.8rem 0">
            Our goal is to offer our clients complete customer satisfaction,
            growth, innovation, and a continuous path to evolve and grow within
            their industry. We aim to constantly bring innovative solutions to
            cater to our client’s requirements and expectations.
          </Typography>
          <Typography margin="1.8rem 0">
            Our team of professionals is always on our client’s side offering
            them alluring and tailor-made solutions to the ever-changing
            landscape of their business industry to achieve innovative,
            scalable, customized, and cost-effective solutions to your business
            needs.
          </Typography>
          <Typography
            margin="6.5rem 0 3rem 0"
            variant="h3"
            textAlign="center"
            fontWeight="700"
          >
            WHAT WE DO
          </Typography>
          <Divider
            variant="middle"
            sx={{
              mx: "auto",
              width: "8%",
              marginTop: ".2rem",
              borderColor: "var(--primary-green)",
              borderTop: "2px solid",
              borderTopColor: "var(--primary-green)",
              fill: "true",
              marginBottom: "3rem",
            }}
          />
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {services.map((item, index) => (
              <Grid item sm={12} md={6} key={index}>
                <Box marginBottom="10px">
                  <div>
                    <Image
                      src={item.img}
                      objectFit="cover"
                      width={500}
                      height={300}
                    />
                  </div>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      margin: "10px 0",
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Box textAlign="center" mt="2rem">
                    <Button
                      endIcon={<ArrowRightAltIcon />}
                      sx={{
                        textAlign: "center",
                        backgroundColor: "var(--primary-green)",
                        color: "white",
                        borderRadius: "30px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        paddingRight: "40px",
                        paddingLeft: "40px",
                        fontWeight: "bold",
                        ":hover": {
                          backgroundColor: "var(--primary-green)",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
