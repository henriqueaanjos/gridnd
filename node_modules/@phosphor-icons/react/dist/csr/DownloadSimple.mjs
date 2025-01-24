var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    n.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      s.call(o, m) && a(e, m, o[m]);
  return e;
}, i = (e, o) => l(e, f(o));
import c, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import D from "../defs/DownloadSimple.mjs";
const I = d((e, o) => /* @__PURE__ */ c.createElement(w, i(t({ ref: o }, e), { weights: D })));
I.displayName = "DownloadSimple";
export {
  I as DownloadSimple
};
