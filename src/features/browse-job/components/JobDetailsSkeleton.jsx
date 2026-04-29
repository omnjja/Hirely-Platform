import { Box, Grid, Skeleton } from "@mui/material";

const JobDetailsSkeleton = () => {
  return (
    <Box className="px-3 sm:px-5 py-3">
      <Grid container spacing={10}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Skeleton variant="rounded" height={120} />
          <Skeleton className="mt-5" variant="rounded" height={80} />
          <Skeleton className="mt-5" variant="rounded" height={200} />
          <Skeleton className="mt-5" variant="rounded" height={300} />
        </Grid>

        <Grid size={{ xs: 12, lg: 3 }}>
          <Skeleton variant="rounded" height={250} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobDetailsSkeleton;
