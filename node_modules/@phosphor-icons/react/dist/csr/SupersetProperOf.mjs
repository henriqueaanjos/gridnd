var f = Object.defineProperty, s = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && p(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && p(r, o, e[o]);
  return r;
}, a = (r, e) => s(r, i(e));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/SupersetProperOf.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(u, a(m({ ref: e }, r), { weights: w })));
I.displayName = "SupersetProperOf";
export {
  I as SupersetProperOf
};
