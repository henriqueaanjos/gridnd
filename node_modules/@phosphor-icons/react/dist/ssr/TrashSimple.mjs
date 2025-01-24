var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      S.call(e, m) && o(r, m, e[m]);
  return r;
}, i = (r, e) => s(r, f(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TrashSimple.mjs";
const n = h((r, e) => /* @__PURE__ */ c.createElement(R, i(t({ ref: e }, r), { weights: d })));
n.displayName = "TrashSimple";
export {
  n as TrashSimple
};
