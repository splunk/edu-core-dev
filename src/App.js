import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import config from './config/config.json';

function App() {
  const [course, setCourse] = React.useState({"id":0,"downloads":[],"labs":[]});
  //const [labs, setLabs] = React.useState([]);
  const [lab, setLab] = React.useState({"id":0});
  const [component, setComponent] = React.useState(null);

  const handleChangeCourse = (event) => {
    const c = config.courses.find(({id}) => id === event.target.value);
    //console.log(c);
    setCourse(c);
    setLab({"id":0});
    setComponent(null);
  };
  
  const handleChangeLab = async (event) => {
    const l = course.labs.find(({id}) => id === event.target.value);
    //console.log(l);
    setLab(l);
    
    try {
      const module = await import("./courses/" + course.dir + "/Lab" + l.id);
      const Component = module.default;
      setComponent(<Component/>);
    } catch(e) { setComponent(null); }
  };

  return (<div>
    <Stack direction="row" spacing={5} sx={{margin:5}}>
      <Paper elevation={10}>
        <Avatar alt="Buttercup" src={process.env.PUBLIC_URL + '/buttercup.png'} sx={{ width: 150, height: 150, margin: 5 }} />
      </Paper>
      <Paper elevation={10} sx={{width:'100%'}}>
        <Typography variant="h3" sx={{margin:5, color:'#ee0884', fontWeight:'bold'}}>Splunk Education: Core Developer</Typography>
        <Typography variant="h4" sx={{margin:5}}>Lab Solution Guides</Typography>
      </Paper>
    </Stack>
    <Stack direction="row" spacing={5} sx={{margin:5}}>
      <Box sx={{ minWidth: 350 }}>
        <FormControl fullWidth>
          <Typography variant="button">Course</Typography>
          <Select value={course.id} onChange={handleChangeCourse}>
            {config.courses.map((curCourse,i) => (
              <MenuItem key={'c'+curCourse.id} value={curCourse.id}>{curCourse.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 350 }}>
        <FormControl fullWidth>
          <Typography variant="button">Lab</Typography>
          <Select value={lab.id} onChange={handleChangeLab}>
            {(course.labs.length > 0) ? (
              course.labs.map((curLab,i) => (
                <MenuItem key={'l'+curLab.id} value={curLab.id}>Lab {curLab.id} - {curLab.name}</MenuItem>
              ))
            ) : (<div/>)}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ typography: 'subtitle1', minWidth: 350 }}>
        <Typography variant="button">Downloads</Typography>
        {course.downloads.map((file,i) => (
          <div key={'f'+i}><Link href={process.env.PUBLIC_URL + '/' + course.dir + "/" + file}>{file}</Link></div>
        ))}
      </Box>
    </Stack>
    {component}
  </div>);
}

export default App;
