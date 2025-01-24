var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      n.call(o, t) && m(e, t, o[t]);
  return e;
}, f = (e, o) => p(e, s(o));
import N, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/Notebook.mjs";
const l = b((e, o) => /* @__PURE__ */ N.createElement(d, f(a({ ref: o }, e), { weights: k })));
l.displayName = "Notebook";
export {
  l as Notebook
};
