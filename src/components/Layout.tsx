import React, {useState, useEffect} from 'react'
import Meta from './Meta'
import Navbar from './navigation/Navbar'
import { motion } from 'framer-motion'
import { Footer } from './footer/Footer';
import { Box, Fab, Fade, Toolbar, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


// interface
interface LayoutProps {
  children: React.ReactNode;
  window?: () => Window;
}



function ScrollTop(props: LayoutProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
      >
        {children}
      </Box>
    </Fade>
  );
}


const Layout = (props: LayoutProps) => {

  const [showNav, setShowNav] = useState<boolean>(false)
  const [toTop, setToTop] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY
      if(currentScroll >= 100){
        setShowNav(true)
      }else{
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[showNav])

  useEffect(() => {
    
    if(toTop){
      window.scrollTo(0,0)
      setToTop(false)
    }

  },[toTop])

  return (
    <>
        <Meta />
        {showNav? (
          <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          >
            <Navbar toggleNav={showNav}/>
          </motion.nav>
        ): <Navbar toggleNav={showNav}/> }

      {/* <Toolbar id="back-to-top-anchor" /> */}
      <ScrollTop {...props}  >
        <Fab size="small" aria-label="scroll back to top" sx={{
          background: '#EE9051',
          '&:hover':{
            background: 'black'
          }
        }}
        onClick={() => setToTop(true)}
        >
          <KeyboardArrowUpIcon  sx={{color: 'white'}}/> 
        </Fab>
      </ScrollTop>


        <main>
            {props.children}
        </main>
        <Footer />
    </>
  )
}

export default Layout