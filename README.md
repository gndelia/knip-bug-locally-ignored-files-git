# Knip reproduction issue

This repo is a simple repository to reproduce a bug in knip in which files added to `.git/info/exclude` should be ignored, but they are listed as unused files (which is incorrect)

## Setup

```sh
# Install the dependencies
npm i
# A postinstall script will automatically update the `.git/info/exclude` and generate an empty file that should be ignored by knip
# Now, run knip with
npm run knip
```

### Expected result

>  Excellent, Knip found no issues.

### Actual result

> Unused files (1)
> test.mjs  

### Extra information

Running 

```sh
npm run knip:debug
```

logs the following

```sh
[*] Unresolved configuration (from CLI arguments)
{
  cacheLocation: '/knip-bug-locally-ignored-files-git/node_modules/.cache/knip',
  cwd: '/knip-bug-locally-ignored-files-git',
  excludedIssueTypes: [],
  fixTypes: [],
  gitignore: true,
  includedIssueTypes: [],
  isCache: false,
  isDebug: true,
  isDependenciesShorthand: false,
  isExportsShorthand: false,
  isFilesShorthand: false,
  isFix: false,
  isFormat: false,
  isIncludeEntryExports: false,
  isIncludeLibs: false,
  isIsolateWorkspaces: false,
  isProduction: false,
  isRemoveFiles: false,
  isShowProgress: false,
  isStrict: false,
  isWatch: false,
  tags: [ [], [] ],
  tsConfigFile: undefined,
  workspace: undefined
}
[*] Included issue types
{
  files: true,
  dependencies: true,
  devDependencies: true,
  optionalPeerDependencies: true,
  unlisted: true,
  binaries: true,
  unresolved: true,
  exports: true,
  nsExports: false,
  types: true,
  nsTypes: false,
  enumMembers: true,
  classMembers: false,
  duplicates: true
}
[*] Included workspaces
[ 'knip-bug-locally-ignored-files-git' ]
[*] Included workspace configs
[
  {
    pkgName: 'knip-bug-locally-ignored-files-git',
    name: '.',
    config: {
      entry: [
        '{index,cli,main}.{js,mjs,cjs,jsx,ts,tsx,mts,cts}!',
        'src/{index,cli,main}.{js,mjs,cjs,jsx,ts,tsx,mts,cts}!'
      ],
      project: [ '**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}!' ],
      paths: {},
      ignore: [],
      isIncludeEntryExports: false
    },
    ancestors: []
  }
]
[*] Parsed gitignore files
{ gitignoreFiles: [ '.git/info/exclude', '.gitignore' ] }
[.] Finding paths
{
  patterns: [ '.travis.yml' ],
  cwd: '/knip-bug-locally-ignored-files-git',
  gitignore: true,
  absolute: true,
  dot: true,
  ignore: [],
  paths: []
}
[] Source mapping (package.json) (0)
[]
[.] Enabled plugins
[ 'Bun', 'Node.js' ]
[.] Finding config file
{
  patterns: [ 'package.json' ],
  cwd: '/knip-bug-locally-ignored-files-git',
  gitignore: false,
  absolute: true,
  dot: true,
  ignore: [ '**/node_modules/**', '.yarn' ],
  paths: [
    '/knip-bug-locally-ignored-files-git/package.json'
  ]
}
[.] Finding config file
{
  patterns: [ 'package.json' ],
  cwd: '/knip-bug-locally-ignored-files-git',
  gitignore: false,
  absolute: true,
  dot: true,
  ignore: [ '**/node_modules/**', '.yarn' ],
  paths: [
    '/knip-bug-locally-ignored-files-git/package.json'
  ]
}
[.] Plugin dependencies (4)
[
  'binary:knip (package.json)',
  'binary:node (package.json)',
  'deferResolveEntry:index.mjs (package.json)',
  'entry:server.js (package.json)'
]
[.] Finding entry paths from plugins (skip exports analysis)
{
  patterns: [
    'server.js',
    '/knip-bug-locally-ignored-files-git/index.mjs'
  ],
  cwd: '/knip-bug-locally-ignored-files-git',
  gitignore: true,
  absolute: true,
  dot: true,
  ignore: [ '.git', '**/node_modules/**', '.yarn', '**/node_modules' ],
  paths: [
    '/knip-bug-locally-ignored-files-git/index.mjs'
  ]
}
[.] Finding entry paths
{
  patterns: [
    'src/{index,cli,main}.{js,mjs,cjs,jsx,ts,tsx,mts,cts}',
    '{index,cli,main}.{js,mjs,cjs,jsx,ts,tsx,mts,cts}'
  ],
  cwd: '/knip-bug-locally-ignored-files-git',
  gitignore: false,
  absolute: true,
  dot: true,
  ignore: '// using cache from .',
  paths: [
    '/knip-bug-locally-ignored-files-git/index.mjs'
  ]
}
[.] Finding plugin configuration paths (skip exports analysis)
{
  patterns: [ 'package.json' ],
  cwd: '/knip-bug-locally-ignored-files-git',
  gitignore: true,
  absolute: true,
  dot: true,
  ignore: '// using cache from .',
  paths: [
    '/knip-bug-locally-ignored-files-git/package.json'
  ]
}
[.] Finding project paths
{
  patterns: [
    'server.js',
    '**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}',
    '!package.json'
  ],
  cwd: '/knip-bug-locally-ignored-files-git',
  gitignore: true,
  absolute: true,
  dot: true,
  ignore: '// using cache from .',
  paths: [
    '/knip-bug-locally-ignored-files-git/index.mjs',
    '/knip-bug-locally-ignored-files-git/test.mjs'
  ]
}
[*] Created 1 programs for 1 workspaces
[*] Analyzing used resolved files [P1/1] (1)
[
  '/knip-bug-locally-ignored-files-git/index.mjs'
]
[*] Deleting principal at . (knip-bug-locally-ignored-files-git)
Unused files (1)
test.mjs  
```


