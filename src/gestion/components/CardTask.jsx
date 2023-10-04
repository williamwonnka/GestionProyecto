import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Grid, ListItem } from '@mui/material';
import { useState } from 'react';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardTask = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedSecondCard, setExpandedSecondCard] = useState(false);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);

    
  };

  const handleExpandClickSecondCard = () => {
    setExpandedSecondCard(!expandedSecondCard)
  }

  return (

    // Card item for active tasks
    <Grid container direction='row' alignItems='stretch'>
       <Grid item xs>
          
          <Card sx= {{ maxWidth: '100vh', height: '100vh', mr:2}}>
      <CardContent>
        Active
      </CardContent>
    <CardContent>
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="username">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="William Cuellar"
        subheader="Create login page for.."
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>HU:</Typography>
          <Typography paragraph>
            Explicacion de la HU
          </Typography>
          <Typography paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


          </Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
    </CardContent>
    </Card>

          
       </Grid>

{/* Card item for in progress tasks */}

       <Grid item xs>
       
        <Card sx= {{ maxWidth: '100vh', height: '100vh', mr:2}}>
      <CardContent>
        In progress
      </CardContent>
    <CardContent>
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="username">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="William Cuellar"
        subheader="Create login page for.."
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <ExpandMore
          expand={expandedSecondCard}
          onClick={handleExpandClickSecondCard}
          aria-expanded={expandedSecondCard}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expandedSecondCard} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>HU:</Typography>
          <Typography paragraph>
            Explicacion de la HU
          </Typography>
          <Typography paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


          </Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
    </CardContent>
    </Card>

        
       </Grid>



{/* Card item for done tasks */}

       <Grid item xs>
        
          <Card sx= {{ maxWidth: '100vh', height: '100vh', mr:2}}>
      <CardContent>
        Done
      </CardContent>
    <CardContent>
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="username">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="William Cuellar"
        subheader="Create login page for.."
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>HU:</Typography>
          <Typography paragraph>
            Explicacion de la HU
          </Typography>
          <Typography paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


          </Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
    </CardContent>
    </Card>

    
        
       </Grid>
    </Grid>

   
    
  );
}
