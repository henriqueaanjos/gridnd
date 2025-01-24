var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, p = (o, e) => i(o, n(e));
import x, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/BookOpenText.mjs";
const l = B((o, e) => /* @__PURE__ */ x.createElement(d, p(a({ ref: e }, o), { weights: k })));
l.displayName = "BookOpenText";
export {
  l as BookOpenText
};
