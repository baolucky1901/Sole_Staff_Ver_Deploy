import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
// import PageTitle from '@/components/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  Button,
  Divider,
  Input
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from 'src/components/Link';
import { storage } from '../../../../../firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

function Forms() {
  const router = useRouter();
  const {rvId} = router.query;
  const [title, SetTitle] = useState<string>(); 
  const [description, SetDescription] = useState<string>(); 
  const [element, SetElement] = useState<string>(); 
  const [url, SetUrl] = useState<string>();

  console.log();

const upLoadImage = async (e: any, setUrl: any) => {
    if (e.target.files) {
        const imageRef = ref(
            storage,
            `images/${v4()}${e.target.files[0].name}`
        );
        await uploadBytes(imageRef, e.target.files[0])
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {
                        setUrl(url);
                    })
                    .catch((error) => toast.error(error.message));
            })
            .catch((error) => toast.error(error.message));
    }
};
const createNewReview = async () => {
    let addData = {productId: rvId, title: title, description: description, elements: element, staffId: 3, avatar: url, product: null}
    console.log(addData);
    const response = await fetch('https://soleauthenticity.azurewebsites.net/api/reviews/review', {
      method: 'POST',
      body: JSON.stringify(addData),
      headers: { 'Content-Type': 'application/json' }
    })
    location.reload();
    console.log(response);
    // const data = await response.json();
    // console.log(data);
  
  };
  return (
    <>
      <Head>
        <title>Review Details - Create</title>
      </Head>
      <PageTitleWrapper>
            <Typography variant="h3" component="h3" gutterBottom>
                Review - Create
            </Typography>
        {/* <PageTitle
          heading="Forms"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
          docs="https://material-ui.com/components/text-fields/"
        /> */}
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
              <CardHeader title="Review Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="Title"
                      multiline
                      onChange={(e) => SetTitle(e.target.value)}
                    //   defaultValue="Hello World"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        multiline
                        fullWidth
                        onChange={(e) => SetDescription(e.target.value)}
                        //   defaultValue="Hello World"
                     />
                    <TextField
                        required
                        id="outlined-required"
                        label="Element"
                        multiline
                        fullWidth
                        //   defaultValue="Hello World"
                        onChange={(e) => SetElement(e.target.value)}
                    />
                  </div>

                  <div>
                  <List component={Box} display="flex" justifyContent={'space-between'} >
                        <Input type="file" onChange={(e) => upLoadImage(e, SetUrl)}/>
                    </List>
                  
                    
                  </div>
                  <div>
                  
                  </div>
                </Box>
              </CardContent>
              <List component={Box} display="flex" justifyContent={'space-between'} >
                <Button variant="contained" onClick={() => createNewReview()} component={Link} href={`/management/reviews`}>Create</Button>
            </List>
            </Card>
            
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Forms.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Forms;
