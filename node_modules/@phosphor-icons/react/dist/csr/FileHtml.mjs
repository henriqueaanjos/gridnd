var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (t, e, m) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, a = (t, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && r(t, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && r(t, m, e[m]);
  return t;
}, i = (t, e) => f(t, p(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/FileHtml.mjs";
const H = d((t, e) => /* @__PURE__ */ n.createElement(w, i(a({ ref: e }, t), { weights: F })));
H.displayName = "FileHtml";
export {
  H as FileHtml
};
