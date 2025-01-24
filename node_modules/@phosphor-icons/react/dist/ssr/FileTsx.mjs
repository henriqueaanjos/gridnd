var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import x, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FileTsx.mjs";
const w = R((r, e) => /* @__PURE__ */ x.createElement(d, i(a({ ref: e }, r), { weights: n })));
w.displayName = "FileTsx";
export {
  w as FileTsx
};
