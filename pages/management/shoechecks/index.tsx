import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Management/ShoeChecks/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container, Card } from '@mui/material';
import Footer from '@/components/Footer';

import RecentChecksTable from '@/content/Management/ShoeChecks/RecentChecksTable';

function ApplicationsChecks() {
  return (
    <>
      <Head>
        <title>ShoesCheck - Lists</title>
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
              <RecentChecksTable />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsChecks.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsChecks;