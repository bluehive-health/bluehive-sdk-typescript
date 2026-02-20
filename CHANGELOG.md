# Changelog

## 0.1.0-alpha.34 (2026-02-20)

Full Changelog: [v0.1.0-alpha.33...v0.1.0-alpha.34](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.33...v0.1.0-alpha.34)

### Bug Fixes

* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([9ea25ac](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/9ea25ac839ef76b6eeb432ed268313ceb6a686bf))

## 0.1.0-alpha.33 (2026-02-19)

Full Changelog: [v0.1.0-alpha.32...v0.1.0-alpha.33](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.32...v0.1.0-alpha.33)

### Features

* **api:** api update ([35e31d0](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/35e31d0f541f138686ad501c362636520ab8ede5))


### Chores

* **internal/client:** fix form-urlencoded requests ([88114de](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/88114de292161a292c443d8150c09e1f4cc707a1))
* **internal:** add health check to MCP server when running in HTTP mode ([28b1e9e](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/28b1e9e6410513ba5202818e0fa2554b86f8816d))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([2eb8ead](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2eb8eadefb7bae95c490d3e26baa847743ba00d8))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([71b8f3d](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/71b8f3de35f59dd0725f9faa1275aa658fa42695))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([3510c69](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/3510c69d3fcad386c686b04b3ea736c226e00976))
* **internal:** avoid type checking errors with ts-reset ([d9db232](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/d9db232e52b6ce5c983646280bb38272a9ff1752))
* **internal:** cache fetch instruction calls in MCP server ([5975972](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/59759725cb96eef82d80b6a3aab4e548b03223e5))
* **internal:** improve layout of generated MCP server files ([2416a50](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2416a50082cf00e1219179d0960a9753644034c9))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([3339515](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/3339515f965815e96c21a6773804afebe9f4c7df))

## 0.1.0-alpha.32 (2026-02-06)

Full Changelog: [v0.1.0-alpha.31...v0.1.0-alpha.32](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.31...v0.1.0-alpha.32)

### Bug Fixes

* **client:** avoid removing abort listener too early ([3d85b7f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/3d85b7ff718341577230316099d2e8124033a0df))

## 0.1.0-alpha.31 (2026-02-05)

Full Changelog: [v0.1.0-alpha.30...v0.1.0-alpha.31](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.30...v0.1.0-alpha.31)

### Features

* **api:** api update ([5a3fb71](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/5a3fb716a1aa06c59108edf0336fbfcbbca5782d))

## 0.1.0-alpha.30 (2026-02-05)

Full Changelog: [v0.1.0-alpha.29...v0.1.0-alpha.30](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.29...v0.1.0-alpha.30)

### Features

* **mcp:** add initial server instructions ([2929b05](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2929b05c76ece517a1b4ac7d79c04738b72859c5))


### Chores

* **client:** do not parse responses with empty content-length ([b4e4c86](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b4e4c86404a1e7d63b5961483165a665cf0ebeb9))
* **client:** restructure abort controller binding ([f396425](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/f396425701e863ecb50e617f36ef9345cd64e84c))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([6cf9e66](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/6cf9e664d7b25e5940d5718ab2d41d3382354646))
* **internal:** support oauth authorization code flow for MCP servers ([fccb3a0](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/fccb3a001d4b35a83b188a0fdc954f63d57cdb10))

## 0.1.0-alpha.29 (2026-02-03)

Full Changelog: [v0.1.0-alpha.28...v0.1.0-alpha.29](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.28...v0.1.0-alpha.29)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([cbcb477](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/cbcb4777e3ffe59c9294219170fa973aa2cd13c2))


### Chores

* **mcp:** up tsconfig lib version to es2022 ([c8de269](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/c8de2694296b179caa3c3224d7b8d734f60db317))

## 0.1.0-alpha.28 (2026-01-29)

Full Changelog: [v0.1.0-alpha.27...v0.1.0-alpha.28](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.27...v0.1.0-alpha.28)

### Bug Fixes

* **docs:** fix mcp installation instructions for remote servers ([873e966](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/873e9665388c7185e49049c7897b3fd2655e2e7c))

## 0.1.0-alpha.27 (2026-01-28)

Full Changelog: [v0.1.0-alpha.26...v0.1.0-alpha.27](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.26...v0.1.0-alpha.27)

### Bug Fixes

* **mcp:** allow falling back for required env variables ([40711fc](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/40711fc024e8516245e221c87cb99187e118698b))


### Chores

* **ci:** upgrade `actions/github-script` ([f18b268](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/f18b268a9815aeea1263c4f1c55d00a9a06246bd))
* fix typo in descriptions ([29b6be5](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/29b6be5a5821507bb8d47e224a3aefc81906182a))
* **internal:** codegen related update ([a37333c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/a37333c92f86146d285e0038be9a0e933b1d14c1))
* **internal:** codegen related update ([d1ea57d](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/d1ea57dc4045112e8a77d166f873d485b34de294))
* **internal:** codegen related update ([bae08d1](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/bae08d1e0af8a5a1729f0d0064397ea11571ad23))
* **internal:** codegen related update ([1704a75](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1704a75b189709d476cbb1efd47cf9dbc3573219))
* **internal:** codegen related update ([187bc9c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/187bc9cfe22529926fb1fb6c7d7d00b0509f1dba))
* **internal:** update `actions/checkout` version ([4543498](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/45434981fbaed3aab0545b4dcbcf0bcee6578b69))
* **internal:** update lock file ([0651a87](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/0651a870e945106d6ef73fa2c2c3bcfd49532d1b))
* **internal:** upgrade babel, qs, js-yaml ([344d16c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/344d16cd5341e84fff50a3bb5265b8cb68efcee2))
* **mcp:** add intent param to execute tool ([e5389d8](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e5389d8fe44a80b75c5df37ec4de3c730f567b58))
* **mcp:** pass intent param to execute handler ([15b9e2a](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/15b9e2a60d5c6c9aa18ecdf369f018f23792375d))
* **mcp:** upgrade dependencies ([6558c92](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/6558c92cd02c099aac6f69bfdfc5d8cebdb9b182))

## 0.1.0-alpha.26 (2026-01-09)

Full Changelog: [v0.1.0-alpha.25...v0.1.0-alpha.26](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.25...v0.1.0-alpha.26)

### Bug Fixes

* **mcp:** update code tool prompt ([4906b4a](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/4906b4aad5913ac4ebcb07055e093f0c143306da))

## 0.1.0-alpha.25 (2026-01-08)

Full Changelog: [v0.1.0-alpha.24...v0.1.0-alpha.25](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.24...v0.1.0-alpha.25)

### Bug Fixes

* **mcp:** fix env parsing ([1f5f72c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1f5f72cd1acd91640837721537d0521db49e3d3e))

## 0.1.0-alpha.24 (2026-01-07)

Full Changelog: [v0.1.0-alpha.23...v0.1.0-alpha.24](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.23...v0.1.0-alpha.24)

### Bug Fixes

* **mcp:** fix options parsing ([9f0163f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/9f0163f05c270ac0233d2a99672ca838043d190a))


### Chores

* break long lines in snippets into multiline ([8bb49fd](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/8bb49fd902cafa13bf09663fb063a9196792af36))

## 0.1.0-alpha.23 (2026-01-06)

Full Changelog: [v0.1.0-alpha.22...v0.1.0-alpha.23](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.22...v0.1.0-alpha.23)

### Bug Fixes

* **mcp:** correct code tool api output types ([57df6ab](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/57df6ab38b60eac743c126596c26ee2a466fd19c))


### Chores

* **internal:** codegen related update ([6fc5ed5](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/6fc5ed517c39761a8afa51c7f5bd2c9264fa1bbe))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([1dfb1db](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1dfb1db4995120afe99e79f90259193d2b328e1f))

## 0.1.0-alpha.22 (2025-12-19)

Full Changelog: [v0.1.0-alpha.21...v0.1.0-alpha.22](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.21...v0.1.0-alpha.22)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Bug Fixes

* **mcp:** pass base url to code tool ([e9a276b](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e9a276b5216d557015c38ec33e688c0925d98855))


### Chores

* **mcp:** remove deprecated tool schemes ([61639b4](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/61639b4c9cc65ee5f13f57fb3f6a3748870b01cc))

## 0.1.0-alpha.21 (2025-12-17)

Full Changelog: [v0.1.0-alpha.20...v0.1.0-alpha.21](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.20...v0.1.0-alpha.21)

### Bug Fixes

* **mcp:** add client instantiation options to code tool ([7b212a8](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7b212a8b27327cfc4c637a1315112e6cbe7a3aa9))
* **mcp:** correct code tool API endpoint ([f5b6fb9](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/f5b6fb92050b1008834a0f985e2908a0d8425082))


### Chores

* **internal:** codegen related update ([459c50a](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/459c50a2558e83142819aa952a63f074a5a62166))
* **internal:** codegen related update ([fc8142e](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/fc8142ecbe9a7da8f40a33e65d327b28647e519e))
* **mcp:** update lockfile ([56bf6a7](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/56bf6a704508e0edc165eb156c20cef07ffe5ed7))

## 0.1.0-alpha.20 (2025-12-06)

Full Changelog: [v0.1.0-alpha.19...v0.1.0-alpha.20](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.19...v0.1.0-alpha.20)

### Features

* **mcp:** add typescript check to code execution tool ([b52a18c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b52a18c15d8b18dd5f0ab972902ce9872b4f736a))
* **mcp:** handle code mode calls in the Stainless API ([1721be3](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1721be3e9c7887b65dfb1f67ce7b829f4aa6ef16))
* **mcp:** return logs on code tool errors ([0a503ab](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/0a503ab6562b27e48e84717c8ce29accee22ccc4))


### Bug Fixes

* **mcp:** return correct lines on typescript errors ([7fef38c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7fef38c8fc822904f8e0116a4d8c21f58d077e56))


### Chores

* **internal:** upgrade eslint ([fbe7ad8](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/fbe7ad82994decacdccb5ed9360772202da78f33))
* use latest @modelcontextprotocol/sdk ([7a0d906](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7a0d906e850ed7aaee3de0057e9d8812da9756b4))

## 0.1.0-alpha.19 (2025-12-02)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Features

* **mcp:** add detail field to docs search tool ([6788431](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/678843190a3101c36ca3bceb82e6228eb340befb))


### Bug Fixes

* **mcp:** return tool execution error on api error ([f37a851](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/f37a851e0f1b6d2215e0c371b304fdf7d001f552))


### Chores

* **client:** fix logger property type ([2c55e73](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2c55e736b04a443e10fe14a1df3815087d64ebc2))

## 0.1.0-alpha.18 (2025-11-17)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### Features

* **api:** api update ([ece869d](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/ece869dba63349da2c6385f2422c2379d88fc6fb))


### Chores

* **mcp:** upgrade jq-web ([60add0f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/60add0fb179cd7472e1e7b324577a557371548c5))

## 0.1.0-alpha.17 (2025-11-13)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([deb0efc](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/deb0efc64db85306bd6cb7f11f7a41b4bd2c12c0))


### Bug Fixes

* **mcp:** return tool execution error on jq failure ([fd1479f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/fd1479f36e88926874ac5385b1442a79ef6ce37b))


### Chores

* **internal:** codegen related update ([a2aafe0](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/a2aafe0b5dfb6f3b539aa09914fcee4a4bb723f2))
* **internal:** codegen related update ([4d694ff](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/4d694ff85c3a3381613c1b69b5acdc21f5111314))
* **internal:** grammar fix (it's -&gt; its) ([7bdc83e](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7bdc83e830cdfb368a78f8b36979290c89db034f))
* mcp code tool explicit error message when missing a run function ([3811039](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/3811039eeefb58f27d098f34a67e4b003ff99482))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([849f8b5](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/849f8b53839f4f2c10c47f316f3659938dbad26f))
* **mcp:** add line numbers to code tool errors ([7de94a8](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7de94a8633782b1f4ec7f8bdaf73b217e3ce54e1))
* **mcp:** clarify http auth error ([ca1becd](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/ca1becd19943e009a8396cf80247648656f8c416))
* use structured error when code execution tool errors ([997c7a4](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/997c7a4417e44af6be10f56e2bfcda6eef632069))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([e47da4c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e47da4ce37d019b8e7700b9f68fa86a95eaee218))
* **mcp:** add a README link to add server to VS Code or Claude Code ([b603ae4](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b603ae4bf2e3886d09af2923926b169577d73305))

## 0.1.0-alpha.16 (2025-10-31)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([e2eb5aa](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e2eb5aa4ded08b66fd9abcc660bce71f494b283b))

## 0.1.0-alpha.15 (2025-10-13)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Features

* **api:** api update ([557ac05](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/557ac056a50af7eade322b01ea42ca947243b58a))


### Chores

* extract some types in mcp docs ([c7304ab](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/c7304abee172407052e746ba93e36978c6b5144d))
* **internal:** use npm pack for build uploads ([9b6a029](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/9b6a02941fbb000f4f979c9659b5c2df2b8a6e4d))

## 0.1.0-alpha.14 (2025-10-05)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Features

* **api:** api update ([20626f5](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/20626f5abdeb69fa8058a5fa9338b44765de4284))

## 0.1.0-alpha.13 (2025-10-05)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Features

* **api:** manual updates ([e3cb85d](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e3cb85dc79de83c30187fbf00286e5b466b5043c))
* **api:** manual updates ([a916d02](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/a916d020d16e3e035d1b5736276ef9b0712f951a))

## 0.1.0-alpha.12 (2025-10-05)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **api:** api update ([9e89f61](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/9e89f61c02193c417bc5087526c0ae42aa240eea))

## 0.1.0-alpha.11 (2025-10-05)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** api update ([68beba6](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/68beba6724f1bd680ea51b1290fe104267cfa073))
* **api:** api update ([d967478](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/d967478c2ce48626a091ae2301946b9b43dd8b01))
* **api:** api update ([004eb6b](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/004eb6b5f2e99b0aa34e67c4d781847c92beb775))
* **api:** api update ([46a9435](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/46a9435e6c32e8b7da7e69abc23ae3c4da504c59))
* **api:** api update ([7694f76](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7694f76df1a124ccb2656e2f7f46fbe652cfa643))
* **api:** api update ([3379a9c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/3379a9ce233571f26f763fe17fe38d700fd5da4a))
* **api:** api update ([5e87001](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/5e870017abaf391e03f87b48594aaab35bf79505))
* **api:** manual updates ([ab2af4f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/ab2af4f09a9947d6b3c925f3c38f438263d81d4b))
* **api:** manual updates ([9d42183](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/9d42183b137af176d615d9121f95abb6851e4b83))
* **api:** manual updates ([1f2e04b](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1f2e04b1d9711227deb606d8eb44b4267af7e689))
* **mcp:** add code execution tool ([0a98b77](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/0a98b77d060d4a95387a36e1ae76c87e643bf328))
* **mcp:** add docs search tool ([9990f30](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/9990f3056e3510b80ea6c52f002930f64bdd359b))
* **mcp:** add option for including docs tools ([b72bd09](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b72bd09794f8bd9a1412fd6eec5b9f79342e2b2d))
* **mcp:** add option to infer mcp client ([ba00fba](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/ba00fba96d360c4336a95b449723aaf49923bc03))
* **mcp:** allow setting logging level ([a2265df](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/a2265df3633ea961e4c7b630698d31086b66c1fb))
* **mcp:** enable experimental docs search tool ([8febff8](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/8febff89c145ddfc87bb976bb3bd52ddc974aab9))
* **mcp:** expose client options in `streamableHTTPApp` ([c81e37e](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/c81e37eb86bc5990bebea4c0129d0d1fc6400b95))
* **mcp:** parse query string as mcp client options in mcp server ([49dd9a2](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/49dd9a2f6c72b9ff8474fd07efaeb17fb812b89d))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([b048a79](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b048a79db46703f30c2029515d0be6e2a85f2ebd))
* coerce nullable values to undefined ([2724c3f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2724c3f239d2acccc6c15fcd84dc1608fb626bc8))
* **mcp:** fix cli argument parsing logic ([87cc467](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/87cc467e39a3ebbeba487275da28e4226f9fb06e))
* **mcp:** fix query options parsing ([e7ae2ae](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e7ae2ae351f2249fe13788d32f80006b01f84b49))
* **mcp:** fix uploading dxt release assets ([49d9272](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/49d92720e511679c835a2e944ba127eb6ade55e5))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([c2d88f7](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/c2d88f7d89660c6b56dc42a1baafb18138e1ec3c))
* **mcp:** resolve a linting issue in server code ([2d576d5](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2d576d5c7833e609d6907d86f105069a7346ae82))


### Performance Improvements

* faster formatting ([38bbca0](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/38bbca09bf51013bd24a90b95f991edbd0ba39c3))


### Chores

* add package to package.json ([9120b5a](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/9120b5a0ad5892418aac8cbde1e4786a4af6e023))
* ci build action ([8391c24](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/8391c246e6477aa596535104424137b7745f4bc9))
* **client:** qualify global Blob ([fb7f860](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/fb7f8603957fb2faab7c33877a7d87b0b161d508))
* **codegen:** internal codegen update ([ee7b1c1](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/ee7b1c16ccfffbb651cf0cda3409154e3d2c625f))
* **deps:** update dependency @types/node to v20.17.58 ([e5de0bf](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e5de0bfab1637b2199fbf7623533ad68c850e1a2))
* do not install brew dependencies in ./scripts/bootstrap by default ([e62b31f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e62b31f6fa56b7c35faeba9af5454d021480c32c))
* **internal:** codegen related update ([a69186f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/a69186fe9b3db7ad1ee510a9135067444c10ea6b))
* **internal:** codegen related update ([6aff9d6](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/6aff9d6f81222aebc86e43378cb4bce359710706))
* **internal:** codegen related update ([f388a3b](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/f388a3b09d17a89347ef5a68e09b396623dccbcd))
* **internal:** codegen related update ([eb6a62f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/eb6a62fbd1481da8293fe871be791f01d23d4e93))
* **internal:** codegen related update ([d9c4ded](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/d9c4ded0410f085adcc47f2c4c2a22a35b5ee95e))
* **internal:** fix incremental formatting in some cases ([ab6822e](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/ab6822e438c9f0c3f01dc0c3163c35c130000f69))
* **internal:** formatting change ([66a2f75](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/66a2f75cda5764d6eec850c7e8287e9e7903663c))
* **internal:** gitignore .mcpb files ([729f945](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/729f945aa68e3a1ff6fae06bbedadf23a8cf9dfb))
* **internal:** ignore .eslintcache ([412eb5c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/412eb5cd57161fc78268a44c083d1dfce85096aa))
* **internal:** make mcp-server publishing public by defaut ([25392d1](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/25392d1143f46d0ff66ad0c43ffc7e2f20139e8f))
* **internal:** refactor array check ([7fd8194](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7fd8194de68cccce3131d201227b6235fb0a36f5))
* **internal:** remove .eslintcache ([b5c401c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b5c401c1c349c7c72db736204f106cfc4c5f04fd))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([015f8d0](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/015f8d099ae31f0d3ab67b4a651a8ba86d11f254))
* **internal:** update global Error reference ([17928e9](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/17928e9bfc876eb31bb4648eabd5769ac135063a))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([90406fc](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/90406fc3662620e26aac1aae83a4e93f1be3e127))
* **mcp:** add cors to oauth metadata route ([a860e64](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/a860e646f5fc2900957ed201b2d696d171c395e2))
* **mcp:** allow pointing `docs_search` tool at other URLs ([d057752](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/d05775290ab2d68e76d94425420353a2d1977618))
* **mcp:** document remote server in README.md ([b5da081](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b5da081d4b80baa2374a076b0a0ba19ef485778e))
* **mcp:** minor cleanup of types and package.json ([8714d75](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/8714d75b52c920115659faceafaf297dd129fecc))
* **mcp:** rename dxt to mcpb ([6ce6f10](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/6ce6f106fbf9e0bfd0a7ebeb313bb61751c3ae43))
* **mcp:** update package.json ([a0958a6](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/a0958a65e54dc9e108da218fe95fb67f9a2f938b))
* **mcp:** update README ([4d2fca8](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/4d2fca899fb79ae9e494376963888053239d340e))
* **mcp:** update types ([7b9ffc1](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7b9ffc178cc527f8de65a84fc0f0c89777a1389e))
* **mcp:** upload dxt as release asset ([c4b5346](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/c4b53462401fbff6cd9feb9b63e8dae5b1d4040b))
* update CI script ([4ffb7df](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/4ffb7dfe47810ba88e0da44c2138a71ca75c4edd))
* update lockfile ([1ea641f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1ea641f7694630d6a7d8312193491d67d7afac4a))

## 0.1.0-alpha.10 (2025-08-13)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Chores

* **internal:** codegen related update ([feb8368](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/feb8368b853f3bdd8f1acd6e5e5638e73e43ea22))

## 0.1.0-alpha.9 (2025-08-09)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **mcp:** add unix socket option for remote MCP ([198ba33](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/198ba3345858f01ba6124ae88fd02482a89b001c))


### Chores

* **internal:** move publish config ([83f2b9b](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/83f2b9bf29ca6e8dfb04e327983e18bb3e021218))
* **internal:** update comment in script ([5f0f8cc](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/5f0f8ccab9d1e472b42fa9ba3b41fee6a91a187f))
* **mcp:** refactor streamable http transport ([8af2363](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/8af236318e712af4dad82498d0c74c8d94d85174))
* update @stainless-api/prism-cli to v5.15.0 ([7798fc6](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/7798fc60e6fcebc39b895a5916dc7a8db58629ec))

## 0.1.0-alpha.8 (2025-08-06)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **mcp:** add logging when environment variable is set ([f969623](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/f9696233a4a754930a9e187753d647121f70cb31))
* **mcp:** remote server with passthru auth ([e3311a6](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/e3311a6430f435308387ad4f3ba00df869ffa38c))


### Bug Fixes

* **mcp:** fix bug in header handling ([2d8dbdc](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2d8dbdccbc8219ea5d1ce096fad443b97beca4aa))

## 0.1.0-alpha.7 (2025-08-01)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([bc2970c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/bc2970cc08480b06d08354f0ce627e88483a02a5))
* **mcp:** reverse validJson capability option and limit scope ([2a7cb12](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/2a7cb12d5058d19bc546b9e3ba010af64f86052f))


### Chores

* **internal:** remove redundant imports config ([cc29a12](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/cc29a12ca1195445a95ec863c638ab51b9a5759b))

## 0.1.0-alpha.6 (2025-07-26)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Chores

* **internal:** codegen related update ([d996b9d](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/d996b9db6bbb8511ab537e3e7627cdbb54cd8e49))

## 0.1.0-alpha.5 (2025-07-18)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([417581e](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/417581e122ff14031274c07fa35b94654d7d9daf))


### Chores

* **mcp:** formatting ([ef13e96](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/ef13e96cecc4f3afec481509caf2e6b15346f40e))
* **ts:** reorder package.json imports ([b05ad5c](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/b05ad5cde7802ad033df6697d498f0d14c589ec1))

## 0.1.0-alpha.4 (2025-07-16)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Bug Fixes

* **mcp:** support jq filtering on cloudflare workers ([aea0d5f](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/aea0d5ff703620b4771a4bf59b74f052f9fd3de1))


### Chores

* **mcp:** rework imports in tools ([3ff92c6](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/3ff92c62e05ebf18879c5095ad91d9b07fe02adc))

## 0.1.0-alpha.3 (2025-07-11)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **mcp:** support filtering tool results by a jq expression ([74ff417](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/74ff417c46b8e53ec5f40f59b7663e17599c8fa4))


### Bug Fixes

* **mcp:** relax input type for asTextContextResult ([173687b](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/173687bfb69addb5ee3090b831efe08d3d3a2e45))


### Chores

* make some internal functions async ([1316105](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1316105e21109fa0c467b992e1b8ed2f320a6f4e))

## 0.1.0-alpha.2 (2025-07-06)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** api update ([c26c68b](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/c26c68be39348b4a28f25bf111300e3be2dfa0c4))


### Chores

* configure new SDK language ([0003a6d](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/0003a6d5554d73c3b9de5e75762137b3e481d556))
* update SDK settings ([4e4750d](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/4e4750da4af7924e80afd05b118bbf636af7718b))

## 0.1.0-alpha.1 (2025-07-06)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/bluehive-health/bluehive-sdk-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** manual updates ([1154c7e](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/1154c7e3646c2c49c91ae512bd026ddd9add80cb))
* **api:** update via SDK Studio ([5fd93f1](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/5fd93f10c4d6fa33737142148964f743ce066565))


### Chores

* update SDK settings ([4f9d0e2](https://github.com/bluehive-health/bluehive-sdk-typescript/commit/4f9d0e22f68d094b5de54228fc0bcef17d79113b))
