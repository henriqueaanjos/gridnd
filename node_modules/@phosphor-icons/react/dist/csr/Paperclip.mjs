var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && p(r, o, e[o]);
  if (a)
    for (var o of a(e))
      l.call(e, o) && p(r, o, e[o]);
  return r;
}, m = (r, e) => c(r, f(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Paperclip.mjs";
const P = d((r, e) => /* @__PURE__ */ n.createElement(w, m(t({ ref: e }, r), { weights: I })));
P.displayName = "Paperclip";
export {
  P as Paperclip
};
