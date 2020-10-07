import DOMParser from "dom-parser"

export const stripHtml = html => {
  if (typeof html === "undefined") {
    return ""
  }
  var doc = new DOMParser().parseFromString(html, "text/html")
  
  return doc.body.textContent || ""
}