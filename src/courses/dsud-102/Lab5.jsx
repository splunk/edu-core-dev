import Snippet from './Snippet';

function Lab5() {

    return(<div style={{margin:50}}>


<Snippet step="3" language="bash"
    code={`cd ~/code
npx @splunk/create@10.2`}
/>

<Snippet step="5" language="jsx"
    code={`yarn add -W @splunk/react-icons@5.9.0`}
/>

<Snippet step="7" language="js"
    code={`"react-router-dom": "6.26.2",`}
/>

<Snippet step="9" language="bash"
    code={`yarn install`}
/>

<Snippet step="14" language="jsx"
    code={`import React from 'react';
import styled from 'styled-components';
import TabLayout from '@splunk/react-ui/TabLayout';
import House from '@splunk/react-icons/House';
import Table from '@splunk/react-icons/Table';

type AppTabId = 'overview' | 'inventory';

type Props = {
    activePanelId: AppTabId;
    onChange: (tabId: AppTabId) => void;
    overviewContent: React.ReactNode;
    inventoryContent: React.ReactNode;
};

const TabsWrapper = styled.div\`
    [role='tabpanel'] {
        padding-top: 0 !important;
        margin-top: 0 !important;
    }
\`;

const Tabs = ({ activePanelId, onChange, overviewContent, inventoryContent }: Props) => (
    <TabsWrapper>
        <TabLayout
            layout="vertical"
            activePanelId={activePanelId}
            onChange={(e, { activePanelId: nextId }) => onChange(nextId as AppTabId)}
        >
            <TabLayout.Panel panelId="overview" label="Overview" icon={<House />}>
                {overviewContent}
            </TabLayout.Panel>

            <TabLayout.Panel panelId="inventory" label="Inventory" icon={<Table />}>
                {inventoryContent}
            </TabLayout.Panel>

        </TabLayout>
    </TabsWrapper>
);

export default Tabs;`}
/>

<Snippet step="16" language="bash"
    code={`cd ~/code/packages/buttercup-coffee/src/main/webapp/

cat > AppShell.tsx <<'EOF'
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from '@splunk/tabs';
import Overview from '@splunk/overview';
import Inventory from '@splunk/inventory';
import { createGlobalStyle } from 'styled-components';
import { variables } from '@splunk/themes';
type AppTabId = 'overview' | 'inventory';

const GlobalStyle = createGlobalStyle\`
  html, body, #root {
    background-color: \${variables.white} !important;
  }
\`;

const PageWrap = styled.div\`
    padding: 18px 40px;
\`;

const Header = styled.div\`
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
\`;

const Logo = styled.img\`
    margin: 20px 0 0 0;
    width: 120px;
    height: 101px;
    object-fit: contain;
    margin-left: auto;
\`;

const AppTitle = styled.h2\`
    margin: 20px 0 0 0;
    font-family: "Splunk Platform Sans", "Proxima Nova", Roboto, Droid, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 600;
\`;

const TabsIndent = styled.div\`
    margin-left: 10px;
    margin-top: -50px;
\`;

const AppShell = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const activePanelId: AppTabId =
        location.pathname.includes('/inventory') ? 'inventory' : 'overview';

    return (
     <>
      <GlobalStyle />
        <PageWrap>
        <Header>
            <AppTitle>Buttercup Coffee Supply Chain</AppTitle>
            <Logo
                src="/static/app/buttercup-coffee/bccLogo.png"
                alt="Buttercup Coffee logo"
            />
        </Header>            
             <TabsIndent>
                <Tabs
                    activePanelId={activePanelId}
                    onChange={(tabId) => navigate(\`/\${tabId}\`)}
                    overviewContent={<Overview />}
                    inventoryContent={<Inventory />}
                />
            </TabsIndent>
        </PageWrap>
     </>
    );
};

export default AppShell;

EOF`}
/>


<Snippet step="19" language="jsx"
    code={`import React from 'react';
import layout from '@splunk/react-page/18';
import { getUserTheme } from '@splunk/splunk-utils/themes';
import { HashRouter } from 'react-router-dom';
import AppShell from '../../AppShell';

getUserTheme().then((theme) => {
    layout(
        <HashRouter>
            <AppShell />
        </HashRouter>,
        { theme, hideAppBar: true }
    );
});
`}
/>

<Snippet step="23" language="jsx"
    code={`import React from 'react';
import { render } from '@testing-library/react';
import Tabs from '../Tabs';

describe('Tabs', () => {
    const defaultProps = {
        activePanelId: 'overview' as const,
        onChange: jest.fn(),
        overviewContent: <div>Overview content</div>,
        inventoryContent: <div>Inventory content</div>,
    };

    it('renders', () => {
        render(<Tabs {...defaultProps} />);
    });
});
`}
/>

<Snippet step="26" language="jsx"
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

<Snippet step="28" language="bash"
    code={`cd /opt/splunk/etc/apps/buttercup-coffee/static`}
/>

<Snippet step="29" language="bash"
    code={`mv bccLogo.png /opt/splunk/etc/apps/buttercup-coffee/appserver/static`}
/>

<Snippet step="30" language="bash"
	code={`yarn build
yarn start`}
/>



    </div>);

}

export default Lab5;