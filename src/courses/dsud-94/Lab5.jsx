import Snippet from './Snippet';

function Lab5() {

    return(<div style={{margin:50}}>


<Snippet step="2" language="bash"
    code={`cd ~/code
splunk-create`}
/>

<Snippet step="6" language="jsx"
    code={`import React from 'react';
import { StyledContainer } from './MenuStyles';
const Menu = () => {
	return (
		<StyledContainer>
             Hello World!
		</StyledContainer>
	);
};
export default Menu;`}
/>

<Snippet step="9" language="js"
    code={`'@splunk/menu': path.resolve(__dirname, '../menu/src/Menu.jsx'),`}
/>

<Snippet step="11" language="bash"
    code={`yarn run build
yarn run start`}
/>

<Snippet step="12" language="bash"
    code={`/opt/splunk/bin/splunk restart`}
/>

<Snippet step="14" language="jsx"
    code={`import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

const StyledContainer = styled.div\`
	\${mixins.reset('inline')};
	display: flex;
        flex-direction: column;
	font-size: \${variables.fontSizeLarge};
\`;

const StyledSidebar = styled.div\`
	width: 150px;
	background: #ffffff;
\`;

export {
	StyledContainer,
	StyledSidebar
};`}
/>

<Snippet step="17" language="jsx"
    code={`import TabLayout from '@splunk/react-ui/TabLayout';
import House from '@splunk/react-icons/House';
import Table from '@splunk/react-icons/Table';
import Ship from '@splunk/react-icons/Ship';`}
/>

<Snippet step="18" language="jsx"
    code={`, StyledSidebar`}
/>

<Snippet step="19" language="jsx"
    code={`<StyledSidebar>
	<TabLayout defaultActivePanelId="overview" layout="vertical">
		<TabLayout.Panel label="Overview" panelId="overview" icon={<House />}>
			<p>OVERVIEW Placeholder</p>
		</TabLayout.Panel>
		<TabLayout.Panel label="Inventory" panelId="inventory" icon={<Table />}>
			<p>INVENTORY Placeholder</p>
		</TabLayout.Panel>
		<TabLayout.Panel label="Shipping" panelId="shipping" icon={<Ship />}>
			<p>SHIPPING Placeholder</p>
		</TabLayout.Panel>
	</TabLayout>
</StyledSidebar>`}
/>

<Snippet step="23" language="jsx"
    code={`const sectionTitle = {
	fontSize: '24px',
};

export { StyledContainer, sectionTitle };`}
/>

<Snippet step="26" language="jsx"
    code={`import Menu from '@splunk/menu';`}
/>

<Snippet step="27" language="jsx"
    code={`, sectionTitle`}
/>

<Snippet step="29" language="jsx"
    code={`<h1 style={sectionTitle}>Buttercup Coffee Supply Chain</h1>
<Menu />
</StyledContainer>,
{
	hideAppBar: true,
},`}
/>

<Snippet step="33" language="jsx"
	code={`import Overview from '@splunk/overview';
import Inventory from '@splunk/inventory';`}
/>

<Snippet step="34" language="jsx"
    code={`<Overview />`}
/>

<Snippet step="35" language="jsx"
    code={`<Inventory />`}
/>


    </div>);

}

export default Lab5;
