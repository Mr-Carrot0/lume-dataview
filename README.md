# dataview-it
(DEVELOPMENT NOT STARTED) A [markdown-it](https://github.com/markdown-it/markdown-it) plugin that transforms [dataview](https://github.com/blacksmithgu/obsidian-dataview/tree/master/src) queries to enhanced [Lume search](https://lume.land/plugins/search/) calls for use in [Lume](https://lume.land/) SSG. 

Primarily made for [Vento](https://vento.js.org), but I intend to make it customizable enough to use any template engine. Don't get your hopes up though.

## Features

### Roadmap

- Tokenizing of queries
- Parsing of tokens
- Transforming parsed data into `search.pages` calls. May also use `search.values`, `search.data` and perhaps even `search.files`
- Vento support
- Custom Lume plugin for easy use
- Tables 
- Lists
- Nested lists
- List inside tables
- Objects inside tables
- Nested objects 
- Nunjucks support 
