var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, i = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      d.call(e, o) && a(r, o, e[o]);
  return r;
}, t = (r, e) => f(r, p(e));
import l, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/TerminalWindow.mjs";
const S = w((r, e) => /* @__PURE__ */ l.createElement(c, t(i({ ref: e }, r), { weights: R })));
S.displayName = "TerminalWindow";
export {
  S as TerminalWindow
};
