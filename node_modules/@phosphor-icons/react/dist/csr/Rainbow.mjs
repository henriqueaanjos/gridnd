var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => n(e, p(o));
import w, { forwardRef as R } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/Rainbow.mjs";
const l = R((e, o) => /* @__PURE__ */ w.createElement(b, i(m({ ref: o }, e), { weights: d })));
l.displayName = "Rainbow";
export {
  l as Rainbow
};
