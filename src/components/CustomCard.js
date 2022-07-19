import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, CardActions, Stack, Slider } from "@mui/material";

export default function CustomCard() {
    return (
        <Card sx={{ mt: 5, px: 2 }} variant="outlined">
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                    sx={{ mt: 3 }}
                >
                    <Typography variant="body1" color="initial">
                        18/07/2022
                    </Typography>
                    <Typography variant="body1" color="initial">
                        Houston
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    <Typography variant="h6" color="initial">
                        $ 550.000
                    </Typography>
                    <Typography variant="body1" color="initial">
                        Banner
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{ mb: 2 }}>
                <Button variant="text" color="primary">
                    Editar
                </Button>
                <Button variant="text" color="primary">
                    Ver detalles
                </Button>
                <Slider />
            </CardActions>
        </Card>
    );
}
