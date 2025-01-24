var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import g, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import l from "../defs/Bridge.mjs";
const w = n((r, e) => /* @__PURE__ */ g.createElement(B, i(a({ ref: e }, r), { weights: l })));
w.displayName = "Bridge";
export {
  w as Bridge
};
