var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && a(r, m, e[m]);
  return r;
}, i = (r, e) => s(r, f(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/TrashSimple.mjs";
const I = n((r, e) => /* @__PURE__ */ h.createElement(d, i(t({ ref: e }, r), { weights: w })));
I.displayName = "TrashSimple";
export {
  I as TrashSimple
};
