import { Box, Container, Typography, Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import RentCard from '../components/RentCard';

const featuredProperties = [
  {
    id: 1,
    title: '溫馨小套房',
    location: '台北市大安區',
    price: '15,000/月',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: '明亮兩房一廳',
    location: '新北市板橋區',
    price: '25,000/月',
    image:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: '精緻三房兩廳',
    location: '台北市信義區',
    price: '35,000/月',
    image:
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: '現代風格公寓',
    location: '台北市中山區',
    price: '28,000/月',
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: '豪華景觀套房',
    location: '台北市信義區',
    price: '45,000/月',
    image:
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth='lg'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='primary'
            gutterBottom
          >
            找到你的理想住所
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='text.secondary'
            paragraph
          >
            探索全台優質租屋選擇，輕鬆找到適合你的家
          </Typography>
          <SearchBar />
        </Container>
      </Box>

      {/* Featured Properties */}
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Typography variant='h4' color='primary' gutterBottom align='center'>
          精選推薦
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent='center'
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {featuredProperties.map((property) => (
            <Grid
              key={property.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <RentCard
                title={property.title}
                location={property.location}
                price={property.price}
                image={property.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
