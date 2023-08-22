import { Typography } from "@mui/material"

export const Error = ({error}) => {
  return (
    <Typography variant="h6">{error.message}</Typography>
  )
}
