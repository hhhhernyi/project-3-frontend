import { Card, CardContent, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../components/Navbar';
import Grid from '@mui/material/Grid2';

const ProductList = () => {


  const categoryColors = {
    'Life': '#ffb3ba',
    'Hospitalization': '#ffffba',
    'Accident': '#baffc9',
    'Investment': '#b0e57c',
    'Endowment': '#d1c4e9',
  };





  return (
    <div>
      <ResponsiveAppBar/> 
      <h2>Our List of Products</h2>
      <Container maxWidth="lg" style={{ padding:'0 20px'}}>
      <Grid container spacing={3} style={{marginTop: '20px'}}>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              backgroundColor: categoryColors['Life'],
              borderRadius:'8px',
              boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
              display:'flex',
              flexDirection:'column',
              height:'100%'
            }}>
              <CardContent style={{flexGrow: 1}}>
                <Typography variant="h6" component='div'>
                  Life
                </Typography>
                <Link to={`/products/category/Life`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="small" style={{marginTop:'10px'}}>
                    View Details
                  </Button>
                
                </Link>

              </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              backgroundColor: categoryColors['Accident'],
              borderRadius:'8px',
              boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
              display:'flex',
              flexDirection:'column',
              height:'100%'
            }}>
              <CardContent style={{flexGrow: 1}}>
                <Typography variant="h6" component='div'>
                Accident
                </Typography>
                <Link to={`/products/category/Accident`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="small" style={{marginTop:'10px'}}>
                    View Details
                  </Button>
                
                </Link>

              </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              backgroundColor: categoryColors['Hospitalization'],
              borderRadius:'8px',
              boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
              display:'flex',
              flexDirection:'column',
              height:'100%'
            }}>
              <CardContent style={{flexGrow: 1}}>
                <Typography variant="h6" component='div'>
                Hospitalization
                </Typography>
                <Link to={`/products/category/Hospitalization`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="small" style={{marginTop:'10px'}}>
                    View Details
                  </Button>
                
                </Link>

              </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              backgroundColor: categoryColors['Investment'],
              borderRadius:'8px',
              boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
              display:'flex',
              flexDirection:'column',
              height:'100%'
            }}>
              <CardContent style={{flexGrow: 1}}>
                <Typography variant="h6" component='div'>
                Investment
                </Typography>
                <Link to={`/products/category/Investment`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="small" style={{marginTop:'10px'}}>
                    View Details
                  </Button>
                
                </Link>

              </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              backgroundColor: categoryColors['Endowment'],
              borderRadius:'8px',
              boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
              display:'flex',
              flexDirection:'column',
              height:'100%'
            }}>
              <CardContent style={{flexGrow: 1}}>
                <Typography variant="h6" component='div'>
                Endowment
                </Typography>
                <Link to={`/products/category/Endowment`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="small" style={{marginTop:'10px'}}>
                    View Details
                  </Button>
                
                </Link>

              </CardContent>
            </Card>
        </Grid>

      </Grid>
      </Container>
    </div>

  )

}
export default ProductList;


