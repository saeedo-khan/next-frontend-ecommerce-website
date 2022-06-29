import React from 'react'
import { Button, Box, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import useAuth from '../../context/auth/AuthContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

// logo
import logo1 from '../../assets/images/Pngtree.png'
// styles
import useStyles from './Login.styles'



const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});


const Login = ({ setToggleRegister }: {setToggleRegister: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const classes = useStyles(useStyles)

    const { getLogin } = useAuth()


    // const initialVal = { email: '', password: ''}
    // const [formValues, setFormValues] = useState<IFormVal>(initialVal)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          getLogin(values.email, values.password)
        }
    })


  

    
  
    return (
    
        <Box component={'div'} className={classes.login}>
            <Box sx={{textAlign: 'center'}}>
                <Image 
                    src={logo1}
                    alt='logo'
                    layout='intrinsic'
                    width={160}
                    height={150}
                />
            </Box>
      <Box component={'form'} onSubmit={formik.handleSubmit} className={classes.formControl}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className={classes.input__field}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          className={classes.input__field}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" className={classes.sign__btn}>
          Submit
        </Button>

        <Box mt={4}>
            <Typography>you don have an account? 
                    <Box component={'a'} className={classes.toggleSign} 
                    onClick={() => setToggleRegister(true)}
                    >
                    create a new account
                    </Box>
            </Typography>
        </Box>



      </Box>
    </Box>
    );
}

export default Login