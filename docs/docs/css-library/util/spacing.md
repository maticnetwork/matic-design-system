# Spacing
Spacing classes include margin and padding.

The syntax is:
```md
.{property}{side}-{size}
```

where 
* **property** is one of:
    * `m` - for margin
    * `p` - for padding

* **side** is one of:
    * `t` - for <span class="var">margin-top</span> and <span class="var">padding-top</span>
    * `b` - for <span class="var">margin-bottom</span> and <span class="var">padding-bottom</span>
    * `l` - for <span class="var">margin-left</span> and <span class="var">padding-left</span>
    * `r` - for <span class="var">margin-right</span> and <span class="var">padding-right</span>
    * `x` - x-axis, for <span class="var">-left</span> and <span class="var">-right</span> margin and padding
    * `y` - y-axis, for <span class="var">-top</span> and <span class="var">-bottom</span> margin and padding

* **size** is one of:
    * `0` - 2px
    * `1` - 4px
    * `2` - 8px
    * `3` - 12px
    * `4` - 16px
    * `5` - 20px
    * `6` - 24px
    * `8` - 32px
    * `10` - 40px
    * `12` - 48px
    * `20` - 80px
    * `28` - 112px
    * `36` - 144px
    * `48` - 192px

:::info
Use `.p-{size}` for padding on all sides and `.m-{size}` for margin on all sides.
:::

**Some Examples**
```html
<div class="p-0 m-3">...</div>
<div class="px-5 py-3 m-3">...</div>
<div class="mx-2 my-4 p-4">...</div>
```