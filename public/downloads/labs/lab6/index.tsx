import React from 'react';
import layout from '@splunk/react-page/18';
import MyPage from '@splunk/my-page';
import { getUserTheme } from '@splunk/splunk-utils/themes';
import { StyledContainer, GlobalStyles } from './Styles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <GlobalStyles/>
                <MyPage />
            </StyledContainer>,
            {
                theme,
                "pageTitle": "BCG - Home"
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
