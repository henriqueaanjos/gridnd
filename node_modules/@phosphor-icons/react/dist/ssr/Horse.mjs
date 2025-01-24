var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && m(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Horse.mjs";
const H = l((r, e) => /* @__PURE__ */ d.createElement(n, s(a({ ref: e }, r), { weights: w })));
H.displayName = "Horse";
export {
  H as Horse
};
