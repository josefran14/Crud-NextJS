"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    name: yup.string().required("Name is required"),
    city: yup.string().required("Gender is required"),
    email: yup.string().email("Email format is not valid").required("Email is required"),
    username: yup.string().required("Username is required"),
    website: yup.string().required("Website is required"),
})

export const Form = ({ title, titleButton, initialValue, handleSend }) => {

  const router = useRouter();

  const form = useForm({
    defaultValues: {
    name: initialValue.name || "",
    city: initialValue.city || "",
    email: initialValue.email || "",
    username: initialValue.username || "",
    website: initialValue.website || "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched"
  })

  const {register, handleSubmit, formState, control } = form
  const {errors, isValid} = formState

    const onSubmit = (data) =>{
      handleSend(data)
      router.push("/users")
    }

  const handleBack = () => {
    router.back();
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "90vh", padding: 4 }}
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
        <Box
          sx={{
            width: "65%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={handleBack}
            sx={{ display: "flex", flexDirection: "column", padding: 0 }}
          >
            <ArrowBackIcon color="error" sx={{ alignSelf: "self-start" }} />
          </Button>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container>
          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Enter your name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register("name")}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Gender"
              type="text"
              placeholder="Enter your gender"
              fullWidth
              error={!!errors.city}
              helperText={errors.city?.message}
              {...register("city")}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Username"
              type="text"
              placeholder="Enter your username"
              fullWidth
              error={!!errors.username}
              helperText={errors.username?.message}
              {...register("username")}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Website"
              type="text"
              placeholder="Enter your Website"
              fullWidth
              error={!!errors.website}
              helperText={errors.website?.message}
              {...register("website")}
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
              cursor: "pointer",
            }}
          >
            <Button disabled={!isValid} type="submit" color="inherit">
              {titleButton}
            </Button>
          </Grid>
        </Grid>
        </form>
      </Grid>
      <DevTool control={control}/>
    </Grid>
  );
};
