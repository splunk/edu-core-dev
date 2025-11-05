import React, { useState } from 'react';
import TabLayout from '@splunk/react-ui/TabLayout';

import TabRest from './TabRest';
import TabSearch from './TabSearch';

const MyPage = () => {
    return (<>
        <TabLayout defaultActivePanelId="rest">
            <TabLayout.Panel label="REST" panelId="rest">
                <TabRest/>
            </TabLayout.Panel>
            <TabLayout.Panel label="Search" panelId="search">
                <TabSearch/>
            </TabLayout.Panel>
        </TabLayout>
    </>);
};

export default MyPage;