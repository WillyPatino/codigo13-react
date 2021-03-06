import { useContext } from "react";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import bgLogin from "../../assets/bg-login.png";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  const { user, pedidos, setUser } = useContext(UserContext);

  const handleClickLogin = () => {
    setUser({
      name: "Juanita",
      last_name: "Cardenas",
    });
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: "100vh", padding: 20, backgroundColor: "#FFD885" }}
    >
      <Grid item md={6}>
        <h4>
          {user.name} {user.last_name}
        </h4>
        <img src={bgLogin} width={600} alt="" />
      </Grid>
      <Grid item md={6}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>Tecsup - Codigo</h3>
            <p>
              Bienvenido a la comunidad de CodiGo, juntos aprenderemos a
              programas paginas web.
            </p>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField label="Email" fullWidth />
              </Grid>
              <Grid item md={12}>
                <TextField label="Password" fullWidth />
              </Grid>
              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleClickLogin}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;