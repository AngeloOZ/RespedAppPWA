import { Box, Divider, Grid, Typography } from "@mui/material";

export const SummaryLocal = ({ order, children = null }) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h2">Orden Nro:</Typography>
        <Typography variant="h2" textAlign={"end"}>
          {order.NUMPEDIDO}
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />

      <Divider sx={{ my: 1 }} />
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Resumen de productos</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography>Cantidad</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography>{order.NUMITEMS} productos </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Total:</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Typography variant="subtitle1">{`$${order.VALORTOTAL}`}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
      {children}
    </>
  );
};
