import { Box, Button, Divider, FormControl, Input, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react'

import emailjs from 'emailjs-com';


// icons
import { AiOutlineMail } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";


// styles
import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from '@mui/material'


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        contact:{
            fontFamily: 'FuturaPTDemi',
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(4)
        },
        headerContact:{
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(5),
            marginLeft: theme.spacing(4),
            [theme.breakpoints.down('md')]:{
                marginTop: theme.spacing(8)
            }
        },
        text__top:{
            fontSize: 70,
            letterSpacing: 1,
            color: '#333333'
        },
        text__navLink:{
            marginTop: theme.spacing(1)
        },
        wrap_nav:{
            fontSize: 25,
            color: '#EE9051'
        },
        text__nav:{
            cursor: 'pointer',
            color: '#333333'
        },
        content:{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '80%',
            margin: '0 auto',
            [theme.breakpoints.down('md')]:{
                display: 'flex',
                flexDirection: 'column'
            }
        },
        content__info:{
            width: '50%',
            display: 'block',
            margin: '0 auto',
            [theme.breakpoints.down('md')]:{
                width: '90%',
                margin: '0 auto',
                marginTop: theme.spacing(10),
                marginBottom: theme.spacing(10)
            }
        },
        text_info:{
            fontSize: 50,
            fontFamily: 'FuturaPTDemi',
            color: '#333333'
        },
        address__contact:{
            display: 'flex',
            marginTop: theme.spacing(2)
        },
        email__contact:{
            display: 'flex',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        phone__contact:{
            display: 'flex',
            marginBottom: theme.spacing(2)
        },
        text__contact:{
            width: '70%',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('md')]:{
                width: '100%'
            }
        },
        content__form:{
            width: '50%',
            display: 'block',
            margin: '0 auto',
            [theme.breakpoints.down('md')]:{
                width: '100%',
                marginBottom: theme.spacing(20)
            }
        },
        form_text:{
            fontSize: 40,
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(6),
            textTransform: 'uppercase',
            color: '#333333',
            fontFamily: 'FuturaPTDemi',
        },
        fieldText:{
            marginBottom: theme.spacing(4),
        },
        btn__form:{
            backgroundColor: 'black',
            color: 'white',
            height: '60px',
            fontSize: 18,
            '&:hover':{
                backgroundColor: '#EE9051'
            },
            [theme.breakpoints.down('md')]:{
                width: '40%',
                textAlign: 'center'
            }
        }
    })
)







interface IContact {
    sendEmail: (e: HTMLInputElement) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Contact: React.FC<IContact> = () => {

    const classes = useStyles(useStyles)

    const router = useRouter()

    const form = useRef<any>(null)

    const [formData, setFormData] = useState<{ name:string, email:string, subject: string, message: string}>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }


    const sendEmail =  (e: React.FormEvent<HTMLFormElement>) => {

        
        e.preventDefault();

        if(formData.name && formData.email && formData.subject && formData.message !== ''){

            emailjs
            .sendForm(
                'service_l09p7r9',
                'template_zd45bsx',
                form.current,
                '6X-mvSPY12DGxfDNU'
                )
                .then((result) => {
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                }, (error) => {
                    console.log(error.text);
                });
        } else{
            alert('Please fill all empty field')
        }
    
    }

    

        return (
            <Box className={classes.contact}>

                <Box className={classes.headerContact}>
                    <Box className={classes.text__top}>
                        Contact
                    </Box>
                    <Box className={classes.text__navLink}>
                        <Box className={classes.wrap_nav}> <Box component='span' onClick={() => router.push('/')} className={classes.text__nav}>Home </Box> <Box sx={{color:'black'}} component='span'>/</Box>  Contact us</Box>
                    </Box>
                </Box>

                <Divider />

                <Box className={classes.content}>
                    <Box className={classes.content__info}>
                        <Typography className={classes.text_info}>Find us here</Typography>

                        <Box className={classes.address__contact}>
                            <Box mr={4}>
                                <MdOutlineLocationOn fontSize={40}/>
                            </Box>
                            <Box>
                                <Typography>Address:</Typography>
                                <Typography>1234 Heaven Stress, Beverly hill, Melbourne, USA</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.email__contact}>
                            <Box mr={4}>
                                <AiOutlineMail fontSize={40}/>
                            </Box>
                            <Box>
                                <Typography>Email:</Typography>
                                <Typography>Contact@example.com</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.phone__contact}>
                            <Box mr={4}>
                                <ImHeadphones fontSize={40}/>
                            </Box>
                            <Box>
                                <Typography>Number Phone:</Typography>
                                <Typography mt={1} mb={1}>&#40; 008 &#41; 123 456 789</Typography>
                                <Typography>&#40; 008 &#41; 987 654 321</Typography>
                            </Box>
                        </Box>

                        <Box className={classes.text__contact}>
                            <Typography>I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after. I did not even know that there were any better conditions to escape to, but I was more than willing to take my chances among people fashioned after.</Typography>
                        </Box>

                    </Box>
                    
                    <Box>
                        <form  className={classes.content__form}  ref={form} onSubmit={sendEmail}>
                            <Typography className={classes.form_text}>Contact us</Typography>
                            <TextField 
                            label='your Name' 
                            fullWidth 
                            className={classes.fieldText}
                            onChange={handleChange}
                            name='name'
                            value={formData.name}
                            />

                            <TextField 
                            label='your email (required)' 
                            fullWidth 
                            className={classes.fieldText}
                            onChange={handleChange}
                            name='email'
                            value={formData.email}
                            />

                            <TextField 
                            label='subject' 
                            fullWidth 
                            className={classes.fieldText}
                            onChange={handleChange}
                            name='subject'
                            value={formData.subject}
                            />
                            <TextField 
                            label='Your Message' 
                            fullWidth 
                            className={classes.fieldText}
                            onChange={handleChange}
                            name='message'
                            value={formData.message}
                            />

                            <Button type='submit' variant='contained' className={classes.btn__form} fullWidth>Send</Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        );
}


export default Contact