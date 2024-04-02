import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import TextField from '@mui/material/TextField';


import './styles.css';


export default function Question(props) {

    const question = props.question;
    const options = props.options;
    const answer = props.answer;
    
const [view, setView] = React.useState(props.view);
const handleChange = (event, newValue) => {
    console.log("New Value:" + newValue);
    setView(newValue); // Update the state with the new value of the toggle button
};

const [error, setError] = React.useState(null);
const handleError = (error) => {
    console.error("Error: " + error);
    setError(error);
}

const [questionStatus, setQuestionStatus] = React.useState(null);
const handleQuestionStatus = (error) => {
    console.error("Error: " + error);
    setError(error);
}

const [growStatus, setGrowStatus] = React.useState(false);

const handleSubmit = () => {
    if (view === null || view === undefined || view == null){
        setError("Please select an option");
    } else {
        setError(null);
        if (view === answer) {
            console.log("Correct!");
            props.onAnswer(true);
            setView(null);
        } else {
            console.log("Wrong");
            props.onAnswer(false);

        }
        setView(null);
        setGrowStatus(false);
        setIsRedGlowing(false);
        setIsBlueGlowing(false);
        setIsGreenGlowing(false);
        setIsOrangeGlowing(false);
    }
}

React.useEffect(() => {
    setView(null);
    setGrowStatus(true);
    console.log("useEffect!");
}, [question]);

  const [isRedGlowing, setIsRedGlowing] = React.useState(false);
  const toggleRedGlow = () => {
    setIsRedGlowing(!isRedGlowing);
    setIsBlueGlowing(false);
    setIsGreenGlowing(false);
    setIsOrangeGlowing(false);
  };

  const [isBlueGlowing, setIsBlueGlowing] = React.useState(false);
  const toggleBlueGlow = () => {
    setIsBlueGlowing(!isBlueGlowing);
    setIsRedGlowing(false);
    setIsGreenGlowing(false);
    setIsOrangeGlowing(false);
  };

  const [isGreenGlowing, setIsGreenGlowing] = React.useState(false);
  const toggleGreenGlow = () => {
    setIsGreenGlowing(!isGreenGlowing);
    setIsBlueGlowing(false);
    setIsRedGlowing(false);
    setIsOrangeGlowing(false);
  };
  
  const [isOrangeGlowing, setIsOrangeGlowing] = React.useState(false);
  const toggleOrangeGlow = () => {
    setIsOrangeGlowing(!isOrangeGlowing);
    setIsBlueGlowing(false);
    setIsGreenGlowing(false);
    setIsRedGlowing(false);
  };

  const stackStyles = {
    border: '1px solid rgba(255,255,255,0.8)',
    borderRadius: '10px',
    boxShadow: '0px 5px 5px 5px rgba(0, 0, 0, 0.14)',
    padding: '1.3em',
    margin: '1em',
    textAlign: 'center',
    display: 'inline-block',
  };

  return (
    <Grow in={growStatus}>
    <div>
        <Fade in={error !== null}>
            <Alert severity="error">{error}</Alert>
        </Fade>
        <Stack
        className='card'
        border={1}
        sx={stackStyles}
        >
        <Typography variant='h4' align='center' marginBottom={2}>
            {question}
        </Typography>
        <ToggleButtonGroup
            orientation="vertical"
            exclusive
            value={view}
            fullWidth={true}
            onChange={handleChange}
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <ToggleButton
            value="a"
            className={`red-glow ${isRedGlowing ? 'glow' : ''}`}
            onClick={toggleRedGlow}
            sx={{
                backgroundColor: '#ff9b94',

                color: 'black',
                '&:hover': {
                  backgroundColor: '#ff9b94',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(255, 88, 88)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[0]}</Typography>
            </ToggleButton>
            <ToggleButton
            value="b"
            className={`blue-glow ${isBlueGlowing ? 'glow' : ''}`}
            onClick={toggleBlueGlow}
            sx={{
                color: 'black',
                backgroundColor: 'rgb(121, 169, 252)',
                '&:hover': {
                  backgroundColor: 'rgb(121, 169, 252)',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(69, 137, 255)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[1]}</Typography>
            </ToggleButton>
            { options[2] && <ToggleButton
            value="c"
            className={`green-glow ${isGreenGlowing ? 'glow' : ''}`}
            onClick={toggleGreenGlow}
            sx={{
                backgroundColor: 'rgb(153, 255, 160)',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'rgb(153, 255, 160)',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(28, 166, 23)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[2]}</Typography>
            </ToggleButton> }
            { options[3] &&<ToggleButton
            value="d"
            className={`orange-glow ${isOrangeGlowing ? 'glow' : ''}`}
            onClick={toggleOrangeGlow}
            sx={{
                color: 'black',
                backgroundColor: 'rgb(247, 203, 79)',
                '&:hover': {
                  backgroundColor: 'rgb(247, 203, 79)',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(255, 181, 33)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[3]}</Typography>
            </ToggleButton> }
        </ToggleButtonGroup>
        <Button variant='contained' color='success' size='large' sx={{ marginTop:2, }} onClick={handleSubmit} disableElevation>
            Submit
        </Button>
        </Stack>
    </div>
    </Grow>
  );
}
