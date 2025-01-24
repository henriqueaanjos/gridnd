var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      h.call(o, e) && m(r, e, o[e]);
  return r;
}, p = (r, o) => i(r, s(o));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Trophy.mjs";
const w = y((r, o) => /* @__PURE__ */ n.createElement(d, p(a({ ref: o }, r), { weights: l })));
w.displayName = "Trophy";
export {
  w as Trophy
};
