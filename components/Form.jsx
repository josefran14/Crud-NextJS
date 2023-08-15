"use client"
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Form = ({title, titleButton, initialValue, onSubmit}) => {

    const router = useRouter()

    const [user, setUser] = useState({
      name: initialValue.name || "",
      city: initialValue.city || "",
      email: initialValue.email || "",
      username: initialValue.username || "",
      website: initialValue.website || ""
  })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const handleUser = () =>{
      onSubmit(user)
      router.push("/")
}

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Grid
        item
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", fontFamily: "Open Sans" }}>
          {title}
        </Typography>
        <Grid container>
          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Name"
              type="text"
              placeholder="enter your name"
              fullWidth
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Gender"
              type="text"
              placeholder="enter your gender"
              fullWidth
              name="city"
              value={user.city}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Email"
              type="email"
              placeholder="enter your email"
              fullWidth
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Username"
              type="text"
              placeholder="enter your username"
              fullWidth
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Website"
              type="text"
              placeholder="enter your Website"
              fullWidth
              name="website"
              value={user.website}
              onChange={handleChange}
            />
          </Grid>

          <Grid
            container
            sx={{
              direction: "row",
              justifyContent: "center",
              background: "#262254",
              color: "white",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            <Button onClick={handleUser} color="inherit">{titleButton}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
