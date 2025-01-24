var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import g, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TagChevron.mjs";
const l = h((r, e) => /* @__PURE__ */ g.createElement(R, f(m({ ref: e }, r), { weights: d })));
l.displayName = "TagChevron";
export {
  l as TagChevron
};
