var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && a(o, t, e[t]);
  return o;
}, p = (o, e) => i(o, s(e));
import N, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Notepad.mjs";
const w = R((o, e) => /* @__PURE__ */ N.createElement(l, p(m({ ref: e }, o), { weights: n })));
w.displayName = "Notepad";
export {
  w as Notepad
};
