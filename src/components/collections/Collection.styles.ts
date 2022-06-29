import { makeStyles, createStyles } from '@material-ui/core';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        collections:{
            marginBottom: theme.spacing(5)
        },
        container:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        section1:{
            display: 'flex',
            flexDirection: 'column',
            marginRight: theme.spacing(2),
            [theme.breakpoints.down('sm')]:{
                justifyContetn: 'center',
                alignItems:'center',
            }
        },
        innerBoxes:{
            display: 'flex',
            marginTop: theme.spacing(4),
            [theme.breakpoints.down('sm')]:{
                flexDirection: 'column',
                alignItems:'center'
            },
            [theme.breakpoints.between('md', 'lg')]:{
                flexWrap: 'wrap',
                justifyContent: 'center'
            }
            
            
        },
        modelImg:{
            display: 'block',
            overflow: 'hidden',
            transition: 'transform 0.4s ease-in-out',
            cursor: 'pointer',
            opacity: 0.7,
            '&:hover':{
                transform: 'scale(1.1)',
                opacity: 1,
                '& $box2_more':{
                    color: '#ffff'
                }
            },
            
        },
        collectionTxt:{
            bottom: '20px',
            left: '10px',
            flexDirection:'column',
            justifyContent: 'flex-start',
            display: 'flex',
        },
        Box1:{
            position: 'relative',
            [theme.breakpoints.only('xs')]:{
                width: '70vw',
                height: '350px',
                textAlign: 'center',
            },
            [theme.breakpoints.only('sm')]:{
                width: '600px',
                height: '350px',
                margin: '0 auto',
            },
            [theme.breakpoints.only('md')]:{
                width: '950px',
                height: '450px',
                margin: '0 auto'
            },
            [theme.breakpoints.up('lg')]:{
                width: '1000px',
                height: '500px',
                margin: '0 auto'
            }
        },
        Box2:{
            position: 'relative',
            width: '600px',
            height: '400px',
            background: '#F6F6F4',
            marginRight: theme.spacing(2),
            overflow: 'hidden',
            [theme.breakpoints.only('xs')]:{
                width: '70vw',
                height: '350px',
                margin: '0 auto',
            },
            [theme.breakpoints.only('sm')]:{
                width: '600px',
                height: '350px',
            },
            [theme.breakpoints.only('md')]:{
                width: '500px',
                height: '350px'
            },            
            [theme.breakpoints.only('lg')]:{
                width: '600px',
                height: '450px',
            }
        },
        Box3:{
            position: 'relative',
            width: '600px',
            height: '400px',
            background: '#F6F6F4',
            overflow: 'hidden',
            [theme.breakpoints.only('xs')]:{
                width: '70vw',
                height: '350px',
                margin: '0 auto',
                marginTop: theme.spacing(2)
            },
            [theme.breakpoints.only('sm')]:{
                width: '600px',
                height: '350px',
                marginTop: theme.spacing(2)
            },
            [theme.breakpoints.only('md')]:{
                width: '500px',
                height: '350px',
                marginTop: theme.spacing(2)
            },      
            [theme.breakpoints.only('lg')]:{
                width: '600px',
                height: '450px',
            }
        },
        box1_text:{
            top: '20px',
            left: '40px',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]:{
                top: '20px',
                left: '5px',
                width: '70%'
            },
            [theme.breakpoints.up('md')]:{
                top: '70px',
                left: '50px',
            }
        },
        box1_title:{
            fontWeight: 600,
            fontSize: '2rem',
            [theme.breakpoints.down('sm')]:{
                fontSize: '1.4rem',
                fontWeight: 700
            },
            [theme.breakpoints.up('sm')]:{
                fontSize: '1.8rem',
                fontWeight: 700
            },
            [theme.breakpoints.up('md')]:{
                fontSize: '2.7rem'
            }
        },
        subtitle:{
            fontFamily: 'FuturaPTDemi',
            [theme.breakpoints.down('sm')]:{
                fontSize: '0.9rem',
                marginTop: theme.spacing(1)
            },
            [theme.breakpoints.up('sm')]:{
                width: '80%',
                fontSize: '1.1rem'
            },
            [theme.breakpoints.up('md')]:{
                fontSize: '1.3rem'
            }
        },
        box1_more:{
            marginTop: theme.spacing(5),
            [theme.breakpoints.down('sm')]:{
                marginTop: theme.spacing(3)
            },
            [theme.breakpoints.up('sm')]:{
                fontSize: '1.1rem'
            },
            [theme.breakpoints.up('md')]:{
                fontSize: '1.4rem'
            }
        },
        box2_collectionTxt:{
            [theme.breakpoints.down('sm')]:{
                top: '20px',
                left: '10px',
            },
            [theme.breakpoints.up('sm')]:{
                top: '20px',
                left: '20px',
            }
        },
        box2_title:{
            [theme.breakpoints.down('sm')]:{
                fontSize: '1rem',
                fontWeight: 700
            },
            [theme.breakpoints.up('sm')]:{
                fontSize: '1.6rem',
            }
        },
        box2_subtitle:{
            [theme.breakpoints.down('sm')]:{
                fontSize: '0.7rem',
                marginBottom: theme.spacing(3),
                width: '50%',
            },
            [theme.breakpoints.up('sm')]:{
                fontSize: '0.8rem',
                marginBottom: theme.spacing(3),
                width: '80%'
            }
        },
        box2_more:{
            transition: '0.5s ease-in-out',
            display: 'inline-block',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]:{
                fontSize: '0.9rem',
            },
            [theme.breakpoints.up('sm')]:{
                fontSize: '1.1rem',
            }
        },
        box3_collectionTxt:{
            [theme.breakpoints.down('sm')]:{
                bottom: '20px',
                right: '0',
                width: '50%'
            },
            [theme.breakpoints.up('sm')]:{
                right: '10px',
                bottom: '20px',
                width: '35%'
            },
            [theme.breakpoints.up('md')]:{
                right: '20px',
                bottom: '20px'
                
            }
        },
        box3_title:{
            [theme.breakpoints.down('sm')]:{
                fontSize: '1.2rem',
                fontWeight: 700
            },
            [theme.breakpoints.up('sm')]:{
                fontSize: '1.7rem',
                fontWeight: 700,
                marginBottom: theme.spacing(2),
            }
            
        },
        box3_subtitle:{
            [theme.breakpoints.down('sm')]:{
                fontSize: '0.7rem',
                marginBottom: theme.spacing(3),
                wordBreak: 'break-all',
            },
            [theme.breakpoints.down('sm')]:{
                fontSize: '0.7rem',
                marginBottom: theme.spacing(3),
                wordBreak: 'break-all',
            },
            [theme.breakpoints.up('md')]:{
                fontSize: '0.8rem',
                marginBottom: theme.spacing(2),
            }
        },
        box3_more:{
            transition: '0.5s ease-in-out',
            display: 'inline-block',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]:{
                '&:hover':{
                    color: '#f4f4f4',
                    display: 'inline-block',
                },
                fontSize: '0.9rem'
            },
            [theme.breakpoints.up('sm')]:{
                '&:hover':{
                    color: '#f4f4f4',
                    display: 'inline-block',
                },
                fontSize: '1.1rem'
            },
            [theme.breakpoints.up('md')]:{
                fontSize: '0.9rem'
            }
        },
    })
)


export default useStyles