import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    height: '300px'
  },
  media: {
    height: '160px',
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    marginTop: '80px',
  },
  cardContent: {
    justifyContent: 'space-between',
    marginTop: '-135px',
  },
  title: {
    textDecoration: 'none',
    textDecorationLine: 'none',
  },
  center: {
    marginTop: '100px',
},
}));