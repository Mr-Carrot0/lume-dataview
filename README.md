# lume-dataview
(DEVELOPMENT NOT STARTED) A [lume](https://lume.land/) [plugin](https://lume.land/docs/configuration/install-plugins/) that transforms [dataview](https://github.com/blacksmithgu/obsidian-dataview/tree/master/src) queries to enhanced [search](https://lume.land/plugins/search/) calls. 

## Features

## Implementation 

Actually now I have come up with multiple ideas, so I migh have to rename the repo. Whoops. 

1. (original) Hijack markdown.rules.&lt;codeblock&gt; to completely change the behavior if lang="dataview". 
2. Use `site.process([".html"],()=>...)` and generate HTML from there
3. Use a component somehow (would eliminate the need for multiple syntaxes for different template engines and remove much of the complexity). Maybe there's a way to pre-process files? [Oh yes](https://lume.land/docs/core/processors/#preprocess). And apparently you can filter for input files?? [whaaa](https://lume.land/docs/core/processors/#:~:text=.md,vto) 

### Roadmap - probably outdated :p

- [ ] Tokenizing of queries
- [ ] Parsing of tokens
- [ ] Transforming parsed data into `search.pages` calls. May also use `search.values`, `search.data` and perhaps even `search.files`
- [ ] Custom Lume components for easy use
- [ ] Table component 
- [ ] List component
- [ ] nesting
	- [ ] Nested lists
	- [ ] List inside tables
	- [ ] Objects inside tables
	- [ ] Nested objects 

## Examples
