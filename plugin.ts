import { merge } from "lume/core/utils/object.ts";

export interface Options {
  compPath: string
}

export const defaults = {
  compPath: "dv"
}

const components = [
  "list.vto"
]

export default function dataview(opt: Partial<Options>) {
  const options = merge(defaults, opt)

  return (site: Site) => {
    site.filter("isObj", (value:any) => typeof value === "object");
    site.filter("isArr",(value:any)=>Array.isArray(value))
    return site;
  };
} 
