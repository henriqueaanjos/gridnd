var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (e, o, m) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    s.call(o, m) && a(e, m, o[m]);
  if (r)
    for (var m of r(o))
      d.call(o, m) && a(e, m, o[m]);
  return e;
}, i = (e, o) => l(e, f(o));
import n, { forwardRef as w } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/DownloadSimple.mjs";
const R = w((e, o) => /* @__PURE__ */ n.createElement(S, i(t({ ref: o }, e), { weights: c })));
R.displayName = "DownloadSimple";
export {
  R as DownloadSimple
};
