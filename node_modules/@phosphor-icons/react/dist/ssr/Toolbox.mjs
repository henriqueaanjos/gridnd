var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import x, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Toolbox.mjs";
const n = R((e, o) => /* @__PURE__ */ x.createElement(b, f(a({ ref: o }, e), { weights: d })));
n.displayName = "Toolbox";
export {
  n as Toolbox
};
