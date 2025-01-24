var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      d.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import l, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import k from "../defs/CodeBlock.mjs";
const w = n((e, o) => /* @__PURE__ */ l.createElement(B, c(a({ ref: o }, e), { weights: k })));
w.displayName = "CodeBlock";
export {
  w as CodeBlock
};
