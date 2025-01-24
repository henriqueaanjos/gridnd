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
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileJs.mjs";
const F = d((r, e) => /* @__PURE__ */ R.createElement(n, i(a({ ref: e }, r), { weights: w })));
F.displayName = "FileJs";
export {
  F as FileJs
};
