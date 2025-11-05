import React, { useState } from 'react';
import TabLayout from '@splunk/react-ui/TabLayout';

import TabRest from './TabRest';
import TabSearch from './TabSearch';

import Magnifier from '@splunk/react-icons/Magnifier';
import Rocket from '@splunk/react-icons/Rocket';

const MyPage = () => {
    return (<>
        <TabLayout defaultActivePanelId="rest">
            <TabLayout.Panel label="REST" panelId="rest" icon={<Rocket/>}>
                <TabRest/>
            </TabLayout.Panel>
            <TabLayout.Panel label="Search" panelId="search" icon={<Magnifier/>}>
                <TabSearch/>
            </TabLayout.Panel>
        </TabLayout>
    </>);
};

export default MyPage;