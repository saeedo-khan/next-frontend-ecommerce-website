import { Box, Button, Divider, FormControl, Input, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react'
import useStyles from './Contact.styles';

import emailjs from 'emailjs-com';


// icons
import { AiOutlineMail } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineLocationOn } from "react-icons/md";



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