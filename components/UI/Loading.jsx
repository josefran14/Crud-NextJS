import { Stack, Typography } from "@mui/material"

export const Loading = () => {
  return (
    <Stack justifyContent="center" alignItems="center" direction="column">
      <Typography variant="h6" sx={{color: "white"}}>Loading...</Typography>
    </Stack>
  )
}
