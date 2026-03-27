import Snippet from "./Snippet";

function Lab2() {
  return (
    <div style={{ margin: 50 }}>
      <Snippet step="2" language="bash" code={`mkdir ~/code`} />

      <Snippet
        step="3"
        language="bash"
        code={`cd ~/code
yarn add -W react@18.3.1 react-dom@18.3.1 styled-components@5.3.11 react-is@^18.2.0 @splunk/react-ui@5.8.0 @splunk/react-icons@5.9.0   @splunk/themes@1.5.0 @splunk/search-job@3.1.0 @splunk/visualization-context@28.4.0 @splunk/visualizations@28.4.0`}
      />

      <Snippet step="4" language="bash" code={`npx @splunk/create@10.2`} />

      <Snippet
        step="11"
        language="jsx"
        code={`cd ~/code

cat <<EOF > tsconfig.base.json
{
    "compilerOptions": {
        "baseUrl": ".",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "jsx": "react",
        "lib": ["es2017", "dom"],
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "strict": true,
        "types": [
            "jest",
            "webpack-env"
        ],
        "paths": {
            "@types/*": [
            "packages/types/*"
            ],
            "@shared-types/*": [
                "packages/types/*"
            ]
       }
    },
    "include": ["packages/**/*"]
}
EOF`}
      />

      <Snippet
        step="13"
        language="bash"
        code={`cd ~/code

rm -rf /code/packages/buttercup-coffee/types`}
      />

      <Snippet
        step="14"
        language="bash"
        code={`mkdir -p ~/code/packages/types`}
      />

      <Snippet
        step="15"
        language="jsx"
        code={`cd ~/code/packages/types

cat <<EOF > package.json
{
  "name": "@splunk/types",
  "version": "1.0.0",
  "private": true,
  "description": "Shared TypeScript definitions Buttercup Coffee app",
  "types": "declarations.d.ts",
  "files": [
    "declarations.d.ts"
  ],
  "scripts": {
   "build": "tsc -p tsconfig.json"
  }
}
EOF`}
      />

      <Snippet
        step="17"
        language="jsx"
        code={`cd ~/code/packages/types

cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "emitDeclarationOnly": true,
    "outDir": "dist",
    "rootDir": ".",
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "*": [
        "types/*",
        "*"
      ]
    },
    "typeRoots": [
      "./packages/types",
      "./node_modules/@types"
    ]
  },
  "include": [
    "src",
    "./**/*.d.ts",
    "declarations.d.ts",
    "packages/types/**/*",
    "packages/app/src/**/*"
  ]
}
EOF`}
      />

      <Snippet
        step="19"
        language="jsx"
        code={`cd ~/code/packages/types

cat <<EOF > declarations.d.ts

declare module '@splunk/search-job' {
    export interface SearchJobOptions {
        search: string;
        earliest_time?: string;
        latest_time?: string;
        [key: string]: any;
    }

    export interface SearchJobRawResults {
        fields?: (string | { name: string })[];
        results?: Record<string, any>[];
    }

    export interface Subscription {
        unsubscribe(): void;
    }

    export interface ProgressStream {
        subscribe(observer: (data: any) => void): Subscription;
    }

    export interface SearchJobResults {
        subscribe(observer: {
            next: (results: SearchJobRawResults) => void;
            error: (error: Error) => void;
        }): Subscription;
    }

    export interface SearchJobInstance {
        getProgress(): ProgressStream;
        getResults(options?: { count?: number; offset?: number }): SearchJobResults;               
        cancel?(): void;
    }

    const SearchJob: {
        create(options: SearchJobOptions): SearchJobInstance;
    };

    export default SearchJob;
}

declare module '@splunk/visualization-context*' {
    import { ReactNode, Context, FC } from 'react';

    export interface VisualizationContextValue {
        mode: 'view' | 'edit' | 'preview';
        width: number;
        height: number;
        status: string;
        [key: string]: any;
    }

    export const VisualizationContext: Context<VisualizationContextValue>;

    export interface VisualizationContextProviderProps {
        value: Partial<VisualizationContextValue>;
        children: ReactNode;
    }

    export const VisualizationContextProvider: FC<VisualizationContextProviderProps>;
}
EOF`}
      />

      <Snippet
        step="22"
        language="jsx"
        code={`{
  "extends": "../../tsconfig.base.json",
  "include": [
    "src",
    "src/**/*",
    "../types/declarations.d.ts"
  ],
  "compilerOptions": {
    "esModuleInterop": true,
    "jsx": "react",
    "lib": [
      "es2017",
      "dom"
    ],
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "rootDir": ".",
    "emitDeclarationOnly": true,
    "declaration": true,
    "declarationDir": "./types"
  }
}`}
      />

      <Snippet
        step="26"
        language="bash"
        code={`cd ~/code
    yarn install
    yarn build`}
      />

      <Snippet
        step="27"
        language="bash"
        code={`cd ~/code
export SPLUNK_HOME=/opt/splunk
yarn workspace @splunk/buttercup-coffee link:app`}
      />

      <Snippet
        step="28"
        language="bash"
        code={`ls -l /opt/splunk/etc/apps/buttercup-coffee`}
      />

      <Snippet
        step="30"
        language="properties"
        code={`version = 1.0.0
label = Buttercup Coffee Company
description = Supply Chain Management
version = 1.0.0
is_configured = 0`}
      />

      <Snippet
        step="36"
        language="bash"
        code={`mkdir -p ~/code/packages/buttercup-coffee/src/main/resources/splunk/static`}
      />

      <Snippet
        step="37"
        language="bash"
        code={`cd ~/code/packages/buttercup-coffee/src/main/resources/splunk/static`}
      />

      <Snippet
        step="38"
        language="bash"
        code={`wget https://splunk.github.io/edu-core-dev/downloads/bccIconsLogos.zip; unzip bccIconsLogos.zip`}
      />

      <Snippet step="40" language="bash" code={`rm bccIcons.zip`} />

      <Snippet
        step="41"
        language="bash"
        code={`cd ~/code
yarn start`}
      />

      <Snippet
        step="42"
        language="bash"
        code={`/opt/splunk/bin/splunk restart`}
      />
    </div>
  );
}

export default Lab2;
