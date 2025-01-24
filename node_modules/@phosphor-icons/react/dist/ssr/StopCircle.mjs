var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/StopCircle.mjs";
const w = R((r, e) => /* @__PURE__ */ S.createElement(d, i(a({ ref: e }, r), { weights: n })));
w.displayName = "StopCircle";
export {
  w as StopCircle
};
