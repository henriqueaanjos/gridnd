var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    d.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import g, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/Bridge.mjs";
const n = B((r, e) => /* @__PURE__ */ g.createElement(R, i(a({ ref: e }, r), { weights: l })));
n.displayName = "Bridge";
export {
  n as Bridge
};
