var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import y from "../defs/VinylRecord.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(n, i(a({ ref: e }, r), { weights: y })));
w.displayName = "VinylRecord";
export {
  w as VinylRecord
};
