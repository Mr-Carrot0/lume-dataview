function mues(site: Site){
  site.filter("isObj",(value)=>typeof value === "object")
  returm site;
}