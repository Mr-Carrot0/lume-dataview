# dataview-it
(DEVELOPMENT NOT STARTED) A [markdown-it](https://github.com/markdown-it/markdown-it) plugin that transforms [dataview](https://github.com/blacksmithgu/obsidian-dataview/tree/master/src) queries to enhanced [Lume search](https://lume.land/plugins/search/) calls for use in [Lume](https://lume.land/) SSG. 

Primarily made for use in tandem with [Vento](https://vento.js.org), but I intend to make it customizable enough to use any template engine. Don't get your hopes up though.

## Features

### Roadmap

- [ ] Tokenizing of queries
- [ ] Parsing of tokens
- [ ] Transforming parsed data into `search.pages` calls. May also use `search.values`, `search.data` and perhaps even `search.files`
- [ ] Vento support
- [ ] Custom Lume plugin for easy use
- [ ] Tables 
- [ ] Lists
- [ ] Nested lists
- [ ] List inside tables
- [ ] Objects inside tables
- [ ] Nested objects 
- [ ] Nunjucks support 

## Implementation 

Actually now I have come up with multiple ideas, so I migh have to rename the repo. Whoops. 

1. (original) Hijack markdown.rules.&lt;codeblock&gt; to completely change the behavior if lang="dataview". 
2. Use `site.process([".html"],()=>...)` and generate HTML from there
3. Use a component somehow (would eliminate the need for multiple syntaxes for different template engines and remove much of the complexity). Maybe there's a way to pre-process files? [Oh yes](https://lume.land/docs/core/processors/#preprocess). And apparently you can filter for input files?? [whaaa](https://lume.land/docs/core/processors/#:~:text=.md,vto) 
