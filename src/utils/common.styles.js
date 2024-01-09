import { mergeStyleSets } from '@fluentui/react';
import coverPic from 'assets/coverPic.png';
import doctorCoverPic from 'assets/doctorCoverPic.png';
import { getLoginUserFromCookie } from './helpers';
const getCommonStyles = (theme) =>
  mergeStyleSets({
    authContainer: {
      width: '100%',
      height: '100%',
      padding: '50px 60px',
      '@media(max-width: 992px)': {
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '30px',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
    },
    authWrap: {
      backgroundColor: theme.palette.white,
      padding: '40px',
      borderRadius: '8px',
      margin: '20px',
      overflow: 'auto',
      '@media(max-width: 992px)': {
        padding: theme.spacing.s4,
        background: 'rgba(255, 255, 255, 0.9)',
        margin: theme.spacing.s4,
        width: '100%',
      },
    },
    authSectionTitle: {
      '@media(max-width: 992px)': {
        fontSize: theme.fontSizes.xl,
      },
    },
    coverImgContainer: {
      position: 'fixed',
      right: 0,
      backgroundImage: `url(${
        getLoginUserFromCookie() === 'doctorLogin' ? doctorCoverPic : coverPic
      })`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '50%',
      height: '980px',
      padding: '60px',
      '@media(max-width: 992px)': {
        display: 'none',
      },
    },
    feedbackBox: {
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 242, 242, 0.13)',
      backdropFilter: 'blur(50px)',
      padding: '30px',
      position: 'absolute',
      bottom: '200px',
      margin: theme.spacing.s4,
    },
    feedbackHead: {
      width: '155px',
      height: '45px',
      backgroundColor: theme.palette.blue2,
      padding: '10px',
      borderRadius: '8px',
    },
    thumbsUp: {
      width: '22.052px',
      height: '22.052px',
    },
  });
export default getCommonStyles;
