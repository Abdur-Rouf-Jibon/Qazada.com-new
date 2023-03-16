import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab, Paper, Stack } from "@mui/material";
import appConfig from "../../../config";

export const WhatsappFab = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: {
          xs: 0,
          sm: 30,
        },
        right: 30,
      }}
    >
      <Stack spacing={1} alignItems="center">
        <Fab
          sx={{ bgcolor: "#25D366" }}
          onClick={() => {
            window.open(appConfig.contact.whatsapp);
          }}
        >
          <WhatsAppIcon fontSize="large" sx={{ color: "white", "&:hover": { color: "#25D366" } }} />
        </Fab>
        <Paper elevation={6} sx={{ fontSize: "body1.fontSize", px: 1, py: 0.5 }}>
          Live Chat
        </Paper>
      </Stack>
    </Box>
  );
};
