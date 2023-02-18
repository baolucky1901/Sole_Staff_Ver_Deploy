import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Management/Reviews/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container, Card } from '@mui/material';
import Footer from '@/components/Footer';

import RecentReviewsTable from '@/content/Management/Reviews/RecentReviewsTable';
function ApplicationsReviews() {
  return (
    <>
      <Head>
        <title>Reviews - Lists</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
          <Card>
            <RecentReviewsTable />
          </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsReviews.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsReviews;