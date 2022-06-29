import React, { useState } from 'react'
import { Button, Box, FormControl, TextField, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup'

// logo
import logo1 from '../../assets/images/Pngtree.png'
// styles
import useStyles from './Register.styles'
import useAuth from '../../context/auth/AuthContext';


interface HandleNameChangeInterface {
    target: HTMLInputElement;
}

interface IFormVal{
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
}


const validationSchema = yup.object({
    name: yup
    .string()
    .required('username is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: yup.string()
        .required('Confirm your password')
        .oneOf([yup.ref('password')], "Password does not match")
});



const Register = () => {

    const classes = useStyles(useStyles)

    const { signUp, loading } = useAuth()

    // const initialVal = {username: '', email: '', password: '', repeatPassword: ''}
    // const [formValues, setFormValues] = useState<IFormVal>(initialVal)
  

    const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            signUp(values.name, values.email, values.password)
        }
    })

    
    
    // const handleChange = ( e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     //   dynamic name of form and with value
    //     setFormValues({...formValues, [name]: value})
    // }
    

  
    return (
    
        <Box component={'div'} className={classes.register}>
    
                <Box sx={{textAlign: 'center'}}>
                    <Image 
                        src={logo1}
                        alt='logo'
                        layout='intrinsic'
                        width={160}
                        height={150}
                    />
                </Box>
                
            <Box component={'form'} className={classes.formControl} onSubmit={formik.handleSubmit}>

                {loading? (
                <Box sx={{textAlign: 'center'}}>
                    <CircularProgress />
                </Box>
                ) : (
                    <>
                    <TextField
                    className={classes.input__field}
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    />
    
                    <TextField
                    className={classes.input__field}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
    
                    <TextField
                    className={classes.input__field}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />

                    <TextField
                    className={classes.input__field}
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={formik.values.confirmPassword }
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword  && Boolean(formik.errors.confirmPassword )}
                    helperText={formik.touched.confirmPassword  && formik.errors.confirmPassword }
                    />


                    <Button 
                    className={classes.sign__btn}
                    variant='contained' 
                    color='primary'
                    type="submit"
                    >SignUp
                    </Button>

                    </>
                )}
                    
    
            </Box>
    </Box>
    );
}

export default Register