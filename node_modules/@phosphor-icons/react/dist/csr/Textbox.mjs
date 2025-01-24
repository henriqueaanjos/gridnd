var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    x.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Textbox.mjs";
const w = b((o, e) => /* @__PURE__ */ n.createElement(d, f(a({ ref: e }, o), { weights: l })));
w.displayName = "Textbox";
export {
  w as Textbox
};
