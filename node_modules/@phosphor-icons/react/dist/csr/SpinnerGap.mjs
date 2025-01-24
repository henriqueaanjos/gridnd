var i = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && p(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && p(r, o, e[o]);
  return r;
}, m = (r, e) => n(r, f(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import G from "../defs/SpinnerGap.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(w, m(t({ ref: e }, r), { weights: G })));
I.displayName = "SpinnerGap";
export {
  I as SpinnerGap
};
