import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    height: '250px',
  },
  media: {
    height: '100%',
    paddingTop: '56.25%', 
    width: '230px', // 16:9
  },
  cardActions: {
    marginTop: '-120px',
    marginLeft: '230px',
  },
  cardContent: {
    justifyContent: 'space-between',
    marginLeft: '230px',
    marginTop: '-160px',
  },
  title: {
    textDecoration: 'none',
    textDecorationLine: 'none',
  },
  center: {
    marginTop: '100px',
},
}));