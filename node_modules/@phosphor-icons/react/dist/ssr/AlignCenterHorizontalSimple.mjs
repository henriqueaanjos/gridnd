var l = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && i(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && i(r, o, e[o]);
  return r;
}, a = (r, e) => n(r, p(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/AlignCenterHorizontalSimple.mjs";
const d = c((r, e) => /* @__PURE__ */ S.createElement(g, a(m({ ref: e }, r), { weights: R })));
d.displayName = "AlignCenterHorizontalSimple";
export {
  d as AlignCenterHorizontalSimple
};
