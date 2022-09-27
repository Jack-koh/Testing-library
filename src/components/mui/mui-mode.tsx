import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

function MuiMode() {
  const theme = useTheme();
  return (
    <Typography component="h1">{`${
      (theme as any).palette.mode
    } mode`}</Typography>
  );
}

export default MuiMode;
