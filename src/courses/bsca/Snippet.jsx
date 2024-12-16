import React, { useEffect } from "react";

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import Prism from 'prismjs';
import 'prismjs/components/prism-python';               // Python
import 'prismjs/components/prism-bash';                 // CLI
import 'prismjs/components/prism-javascript';           // JavaScript
import 'prismjs/components/prism-makefile';             // plain text
import 'prismjs/components/prism-properties';           // .conf files
import 'prismjs/components/prism-splunk-spl';           // SPL
import 'prismjs/components/prism-uri';                  // URLs
import '../../prism.css';

//import Gist from 'react-embed-gist';

function Snippet({step, code, language}) {

    useEffect(() => {
        Prism.highlightAll();
    },[]);

    return(<div>
        <Divider/>
        <Stack direction="row" spacing={5} sx={{margin:3}}>
            <Avatar sx={{ bgcolor:'#f56a00', margin: 2 }}>{step}</Avatar>
            <pre style={{width:'80%'}}><code className={language}>{code}</code></pre>
        </Stack>
    </div>);

}

export default Snippet;


/*
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function Lab6() {

    return(<div style={{margin:50}}>
        <Divider/>
        <Typography variant="h6" sx={{margin:5}}>
          This lab does not require a solutions guide.
        </Typography>
    </div>);

}

export default Lab6;
*/