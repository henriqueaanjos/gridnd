var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      d.call(e, t) && a(o, t, e[t]);
  return o;
}, p = (o, e) => i(o, s(e));
import n, { forwardRef as N } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Notepad.mjs";
const I = N((o, e) => /* @__PURE__ */ n.createElement(l, p(m({ ref: e }, o), { weights: w })));
I.displayName = "Notepad";
export {
  I as Notepad
};
