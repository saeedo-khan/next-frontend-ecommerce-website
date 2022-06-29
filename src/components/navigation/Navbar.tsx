import React from "react";
import Image from "next/image";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  CssBaseline,
  Badge,
  Drawer,
  Modal,
  Divider
} from "@mui/material";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import { parseCookies, destroyCookie } from 'nookies'
import Register from "../register/Register";
// styles
import  useStyles from "./Navbar.styles";
// images
import logo from '../../assets/images/Pngtree.png';
import Link from "next/link";

// icons
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { BsPlusLg } from "react-icons/bs";
import { CgLogIn } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

// context
import useAuth from "../../context/auth/AuthContext";
import useCart from "../../context/cart/CartContext";
import Login from "../login/Login";
import { useRouter } from "next/router";

interface NavbarProps {
  toggleNav: Boolean;
}



const Navbar = ({ toggleNav }: NavbarProps) => {

  const classes = useStyles(useStyles)

  const router = useRouter()


  const { shoppingCart, totalQuantites } = useCart()

  const cookies = parseCookies()


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [toggleShoppingCart, setToggleShoppingCart] = React.useState<boolean>(false)

  // categories anchor toggle
  const [anchorElCategories, setAnchorElCategories] = React.useState<null | HTMLElement>(null);
  const isDropDownOpen = Boolean(anchorElCategories);
  const handleClickCategories = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElCategories(event.currentTarget);
  };
  const handleCloseCategories = () => {
    setAnchorElCategories(null);
  };
  // end categories


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // modal register open
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => {
    setOpen(false)
    setToggleRegister(false)
  };

  // toggle between login and register
  const [toggleRegister, setToggleRegister] = React.useState<boolean>(false)


  // function Destroy Cookies 
  const destroy = () => {
    destroyCookie(null, 'formClient')
    handleCloseUserMenu()
    router.push('/')
  }

  return (
    <AppBar position='fixed'
      sx={{
        bgcolor: toggleNav ? 'rgba(255,255,255,0.8)' : 'inherit',
        boxShadow: toggleNav ? 'auto' : '0',
        height: toggleNav ? 80 : 100,
        display: 'block'
      }}
    >
      <CssBaseline />
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <Toolbar disableGutters variant="dense" sx={{ height: '100%', display: 'flex' }} >

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: 'black', cursor: 'pointer' }}
          >
            <Link href='/' passHref>
              <Image
                src={logo}
                alt='logo'
                width={60}
                height={60}
              />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >

                <Link href='/' passHref>
                <MenuItem onClick={handleCloseNavMenu} >
                  <a style={{textAlign: 'center'}}>Home</a>
                </MenuItem>
                </Link>

                <Link href='/cart' passHref>
                <MenuItem onClick={handleCloseNavMenu} >
                  <a style={{textAlign: 'center'}}>Cart</a>
                </MenuItem>
                </Link>


                <Link href='/contact' passHref>
                <MenuItem onClick={handleCloseNavMenu} >
                  <a style={{textAlign: 'center'}}>Contact</a>
                </MenuItem>
                </Link>


            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link href='/' passHref>
              <Box component={'a'} sx={{cursor: 'pointer'}}>
                <Image
                  src={logo}
                  alt='logo'
                  width={60}
                  height={60}
                />

              </Box>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>


            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#333", display: "block", mr: 2, cursor: 'pointer' }}
              className={classes.navs}
            >
              <Link href='/' passHref>
                <a>Home</a>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#333", display: "block", mr: 2, cursor: 'pointer' }}
              className={classes.navs}
            >
              <Link href='/cart' passHref>
                <a>Cart</a>
              </Link>
            </Button>

            <Button
              onClick={handleClickCategories}
              sx={{ my: 2, color: "#333", display: "block", mr: 2, cursor: 'pointer' }}
              className={classes.navs}
            >
              Categories
            </Button>
            
            <Menu
              id="basic-menu"
              anchorEl={anchorElCategories}
              open={isDropDownOpen}
              onClose={handleCloseCategories}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Link href='/men-fashion' passHref>
              <MenuItem onClick={handleCloseCategories}>
                 <a>Mens Fashion</a> 
              </MenuItem>
              </Link>
              <Divider/>

              <Link href='/women-fashion' passHref>
              <MenuItem onClick={handleCloseCategories}>
                 <a>Womens Fashion</a> 
              </MenuItem>
              </Link>
              <Divider/>
              <Link href='/kids-fashion'>
              <MenuItem onClick={handleCloseCategories}>
                <a>Kids</a>
              </MenuItem>
              </Link>
            </Menu>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#333", display: "block", mr: 2, cursor: 'pointer' }}
              className={classes.navs}
            >
              <Link href='/contact' passHref>
                <a>Contact</a>
              </Link>
            </Button>
          </Box>





          <Box sx={{ flexGrow: 0, ml: 3, display: { xs: 'none' } }}>
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className={classes.account} >
                <AccountCircleIcon fontSize="large" sx={{ color: 'rgba(0,0,0,0.7)' }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0, ml: 3 }}>
            <Badge badgeContent={totalQuantites} color='warning' overlap="circular">
              <IconButton onClick={() => setToggleShoppingCart(true)} sx={{ p: 0 }} >
                <ShoppingBagOutlinedIcon fontSize="large" sx={{ color: 'rgba(0,0,0,0.7)' }} />
              </IconButton>
            </Badge>
            <Drawer
              anchor="left"
              open={toggleShoppingCart}
              onClose={() => setToggleShoppingCart(false)}
            >
              <Box className={classes.cart}>
                {!shoppingCart ? (
                  <Box>
                    <Typography variant="h5">No products in the cart</Typography>
                    <Button variant="contained">Start Shopping</Button>
                  </Box>
                ) : (
                  <Box>
                    <Box className={classes.topText}>
                      <Typography className={classes.text} fontFamily='FuturaPTDemi'>My Shopping Bag {totalQuantites}</Typography>
                      <IconButton size='large' className={classes.topText_icon} onClick={() => { setToggleShoppingCart(false) }}>
                        <BsPlusLg color='#EE9051' />
                      </IconButton>
                    </Box>
                    <ShoppingCart />
                  </Box>
                )}
              </Box>
            </Drawer>
          </Box>
          
          {!cookies.formClient ? (
            <>
              <Box sx={{ flexGrow: 0, ml: 3 }} onClick={handleOpenModal}>
                <IconButton>
                  <CgLogIn fontSize={30} />
                </IconButton>
                
              </Box>

              <Modal
                open={open}
                onClose={handleCloseModal}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {toggleRegister? (<Register />) : (<Login setToggleRegister={setToggleRegister}/>)}
              </Modal>
            </>
          ) : (
            <>
            <Box sx={{ flexGrow: 0, ml: 3 }}>

              <IconButton onClick={handleOpenUserMenu}>
                <FaUserCircle fontSize={33}/>
              </IconButton>
              

              <Menu
              id="basic-menu"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              >
                <MenuItem onClick={destroy}>
                  Signout
                </MenuItem>

              </Menu>
              
            </Box>
            </>
          )}


        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
