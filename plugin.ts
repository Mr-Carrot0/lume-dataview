import { merge } from "lume/core/utils/object.ts";

export interface Options {
	compPath: string
} 

export const defaults = {
  compPath: "/_components/dv/"
} 
  
export default function dataview(opt: Partial<Options>) {
  const options = merge(defaults, opt ) 
  return (site: Site)=>{
	  site.filter("isObj", (value)=> typeof value === "object");
	  return site;
	};
} 
