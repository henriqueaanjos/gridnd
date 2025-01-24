var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      R.call(e, t) && m(o, t, e[t]);
  return o;
}, p = (o, e) => f(o, i(e));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Desktop.mjs";
const w = k((o, e) => /* @__PURE__ */ d.createElement(l, p(a({ ref: e }, o), { weights: n })));
w.displayName = "Desktop";
export {
  w as Desktop
};
