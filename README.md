Archmage
========

这是一个移动端基础库。

###为何起名Archmage？

如果把整个项目看做是一支功能和结构都十分复杂的HUM万金油部队的话，
希望Archmage能化身其中的大法师，成为部队最坚实的后盾和支持者。（题外话）

###该库借鉴了许多优秀的资源，例如：
<ol>
<li>腾讯的JM。JM很多的实现思路与我对移动端基础库的定位都吻合，例如功能模块化，性能有限，基于原生对象等，可惜JM没更新了</li>
<li>prototype。js库的祖师爷了，其在兼容性方面的处理确实有很多独到之处。</li>
<li>underscore。作为一个工具库，真的是无可挑剔。提供了大量好用的集合性处理函数。</li>
<li>seajs。其实只是看了源码之后，发现里面的类型判断很牛X，所以沿用了。（因为我是require党）</li>
<li>mootools。其实就研究了一下domReady事件的处理。</li>
<li>jquery/zepto。基于选择器，入口汇总，类数组对象的使用，链式操作等创新的改进改变了整个前端环境，是当值无愧的王者。
  不过除了集合性操作特性，其他的我都摒弃了，因为Archmage不是为了迎合小白，而是为了让移动端贫瘠的硬件环境下每一块内存都可以物尽其用。<br/>
 （其实想把这两个分开写，因为本就是两个不相干的库，不过两者大量API基本无缝，所以就一刀切了）</li>
</ol>

（ps：我就是写给自己看的，满足一下自己强迫症的习惯，嗯，就这样）
