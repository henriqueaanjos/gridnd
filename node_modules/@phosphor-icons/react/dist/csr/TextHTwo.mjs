var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      w.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import T, { forwardRef as n } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/TextHTwo.mjs";
const l = n((o, e) => /* @__PURE__ */ T.createElement(x, f(a({ ref: e }, o), { weights: d })));
l.displayName = "TextHTwo";
export {
  l as TextHTwo
};
