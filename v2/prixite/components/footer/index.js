import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        padding: "40px 0",
        color: "var(--primary-grey)",
      }}
    >
      <Typography textAlign="center" marginBottom="-10px">
        Office Address: 4 Mozang Road, Near Family Hospital, Lahore, Pakistan
      </Typography>
      <Typography textAlign="center" margin="20px 0">
        Phone: 042 37114925| Email:{" "}
        <span
          onClick={() => router.push("mailto:hi@prixite.com")}
          style={{
            color: "blue",
            cursor: "pointer",
          }}
        >
          hi@prixite.com
        </span>
      </Typography>
      <Typography textAlign="center">Copyright © 2022 Prixite</Typography>
    </Box>
  );
}
