import React, { useEffect } from "react";

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-solution-file';
import '../../prism.css';

function Solution({step, code, language}) {

    useEffect(() => {
        Prism.highlightAll();
    },[]);

    return(<div>
        <Divider/>
        <Stack direction="row" spacing={5} sx={{margin:3}}>
            <Avatar sx={{ margin: 2 }}>{step}</Avatar>
            <pre style={{width:'80%'}}><code className={language}>{code}</code></pre>
        </Stack>
    </div>);

}

export default Solution;
