var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, i = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, t = (o, e) => f(o, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/TerminalWindow.mjs";
const R = l((o, e) => /* @__PURE__ */ d.createElement(w, t(i({ ref: e }, o), { weights: I })));
R.displayName = "TerminalWindow";
export {
  R as TerminalWindow
};
