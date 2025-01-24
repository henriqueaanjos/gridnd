var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (p)
    for (var r of p(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => f(e, n(o));
import d, { forwardRef as w } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/AppWindow.mjs";
const I = w((e, o) => /* @__PURE__ */ d.createElement(l, a(m({ ref: o }, e), { weights: A })));
I.displayName = "AppWindow";
export {
  I as AppWindow
};
