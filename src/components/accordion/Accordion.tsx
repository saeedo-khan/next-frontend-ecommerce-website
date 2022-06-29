import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import useStyles from './Accordion.styles';


interface IAccordion {
  productDetail: string
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: '1rem', color: 'black' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:'rgb(255,255,255)',
  
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    marginTop: theme.spacing(2)
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions({ productDetail }: IAccordion) {
  
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
  const classes = useStyles(useStyles)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);

    };

  return (
    <div>
      <Box className={classes.line}></Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            expandIcon={expanded === 'panel1'?<MinimizeIcon />:<AddIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
          <Typography>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.accordion__text}>
            {productDetail}
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
            expandIcon={expanded === 'panel2'?<MinimizeIcon />:<AddIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
        >
          <Typography>Shipping & return</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
            expandIcon={expanded === 'panel3'?<MinimizeIcon />:<AddIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
        >
          <Typography>Customer Reviews (0)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box sx={{width: '90%', height: '1px', backgroundColor: 'rgba(0,0,0,0.3)'}}></Box>
    </div>
  );
}