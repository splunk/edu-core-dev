import React, { useEffect } from "react";

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

// https://prismjs.com/#languages-list

import Prism from 'prismjs';
import 'prismjs/components/prism-python';               // Python
import 'prismjs/components/prism-bash';                 // CLI
import 'prismjs/components/prism-javascript';           // JavaScript
import 'prismjs/components/prism-json';                 // JSON
import 'prismjs/components/prism-jsx';                  // React
import 'prismjs/components/prism-makefile';             // plain text
import 'prismjs/components/prism-properties';           // .conf files
import 'prismjs/components/prism-splunk-spl';           // SPL
import 'prismjs/components/prism-uri';                  // URLs
import '../../prism.css';

function Snippet({num, code, language}) {

    useEffect(() => {
        Prism.highlightAll();
    },[]);

    return(<div>
        <Divider/>
        <Stack direction="row" spacing={5} sx={{margin:3}}>
            <Avatar variant='rounded' sx={{ bgcolor:'#f56a00', margin: 2, width:'100px' }}>Task {num}</Avatar>
            <pre style={{width:'80%'}}><code className={`language-${language}`}>{code}</code></pre>
        </Stack>
    </div>);

}

export default Snippet;
