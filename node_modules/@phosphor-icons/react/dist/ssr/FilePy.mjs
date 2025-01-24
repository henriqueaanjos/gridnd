var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FilePy.mjs";
const w = R((r, e) => /* @__PURE__ */ y.createElement(d, i(a({ ref: e }, r), { weights: n })));
w.displayName = "FilePy";
export {
  w as FilePy
};
