import{_ as l,a as i,b as m,c as r,e as t,f as a,g as s,m as e,h as o}from"./index-ct5HAHRh.js";const u=""+new URL("qq-iQ8jIM6k.png",import.meta.url).href,c=""+new URL("qrcode_gh-wCDAugtE.jpg",import.meta.url).href,d={},y={class:"about"},n={id:"-center-pywxdump-center-"},x=e('<p><a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3-blue.svg" alt="Python"></a><a href="https://github.com/xaoyaoo/PyWxDump"><img src="https://img.shields.io/github/languages/code-size/xaoyaoo/pywxdump" alt="GitHub code size in bytes"></a><a href="https://github.com/xaoyaoo/PyWxDump"><img src="https://img.shields.io/github/downloads/xaoyaoo/pywxdump/total" alt="GitHub all releases"></a><a href="https://github.com/xaoyaoo/PyWxDump"><img src="https://img.shields.io/github/stars/xaoyaoo/PyWxDump.svg" alt="GitHub stars"></a><a href="https://github.com/xaoyaoo/PyWxDump/fork"><img src="https://img.shields.io/github/forks/xaoyaoo/PyWxDump.svg" alt="GitHub forks"></a><a href="https://github.com/xaoyaoo/PyWxDump/issues"><img src="https://img.shields.io/github/issues/xaoyaoo/PyWxDump" alt="GitHub issues"></a></p><p><a href="https://pypi.org/project/pywxdump/"><img src="https://img.shields.io/pypi/v/pywxdump" alt="PyPI"></a><a href="https://pypi.org/project/pywxdump/"><img src="https://img.shields.io/pypi/wheel/pywxdump" alt="Wheel"></a><a href="https://pypistats.org/packages/pywxdump"><img src="https://img.shields.io/pypi/dm/pywxdump" alt="PyPI-Downloads"></a><a href="https://github.com/xaoyaoo/PyWxDump/blob/master/LICENSE"><img src="https://img.shields.io/pypi/l/pywxdump" alt="GitHub license"></a><a href="https://github.com/xaoyaoo/PyWxDump/actions/workflows/publish.yml"><img src="https://github.com/xaoyaoo/PyWxDump/actions/workflows/publish.yml/badge.svg" alt="Publish"></a></p><ul><li>欢迎大家提供更多的想法，或者提供代码，一起完善这个项目。</li></ul><h3 id="-faq-https-github-com-xaoyaoo-pywxdump-tree-master-doc-faq-md-faq-">如有问题，请先查看：<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/doc/FAQ.md">FAQ</a> 是否有答案，或者关注公众号回复: <code>FAQ</code>。 </h3><h3 id="-pywxdump-">如果是小白，请关注公众号：<code>逍遥之芯</code> (右边二维码) ，回复：<code>PyWxDump</code> 获取图文教程。 </h3><p>qq交流群：577704006（左边二维码） or 点击链接加入群聊<a href="https://s.xaoyo.top/gOLUDl">pywxdump功能交流</a>。</p><p>（因为qq群将满，所以进群需要密码，密码请查看<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/doc/UserGuide.md">UserGuide.md</a>）</p><div><a href="https://s.xaoyo.top/gOLUDl"><img src="'+u+'" alt="QQ群" title="加入QQ群" style="width:300px;"></a><img src="'+c+'" alt="公众号" title="关注公众号" style="width:300px;"></div><h1 id="-">一、项目介绍</h1><h2 id="1-">1. 项目简介</h2><p><a href="https://github.com/xaoyaoo/PyWxDump">PyWxDump</a>是一款用于获取账号信息(昵称/账号/手机/邮箱/数据库密钥) 、解密数据库、查看聊天记录、备份导出聊天记录为html的工具。</p>',11),g=t("a",{href:"https://github.com/xaoyaoo/PyWxDump/"},[t("img",{src:"https://img.shields.io/github/stars/xaoyaoo/PyWxDump.svg?style=social&label=Star",alt:"Star"})],-1),b=e(`<h2 id="2-">2. 功能介绍</h2><ul><li>（1）获取微信昵称、微信账号、微信手机号、微信邮箱、微信KEY的基址偏移</li><li>（2）获取微信的微信昵称、微信账号、微信手机号、微信邮箱、微信KEY、微信原始ID（wxid_<strong>**</strong>）</li><li>（3）获取微信文件夹路径</li><li>（4）支持查看聊天记录查看</li><li>（5）根据key解密微信数据库</li><li>（6）提供数据库部分字段说明</li><li>（7）支持微信多开场景，获取多用户信息等</li><li>（8）微信需要登录状态才能获取数据库密钥</li><li>（9）支持导出聊天记录为html,备份微信聊天记录,方便查看</li><li>（10）合并多个数据库，方便查看</li><li>（11）增加极简版pywxdump</li></ul><p><strong>利用场景</strong></p><ol><li>钓鱼攻击(通过钓鱼控到的机器通常都是登录状态)</li><li>渗透到运维机器(有些运维机器会日常登录自己的微信)</li><li>某些工作需要取证(数据库需要拷贝到本地)</li><li>自行备份(日常备份自己留存)</li><li>等等...............</li></ol><h2 id="3-">3. 更新计划</h2><ul><li>1.每个人聊天记录分析，生成词云。</li><li>2.分析每个人每天的聊天数量，生成折线图（天-聊天数量）</li><li>3.分析不同的人的月聊天数量，年聊天数量，生成折线图</li><li>4.生成年度可视化报告</li><li>5.创建GUI图形界面，方便使用</li><li>8.增加企业微信的支持</li><li>9.增加获取实时聊天记录的功能</li><li>10.聊天记录关键字搜索 或者按时间点搜索列出所有的联系人记录就nice了</li><li>11.增加好友的信息获取</li><li>12.备份后的聊天记录，恢复到微信中</li><li>13.朋友圈的查看与备份</li><li>14.微信存储空间清理，减少微信占用空间</li></ul><h2 id="4-">4. 其他</h2><p><a href="https://github.com/xaoyaoo/PyWxDump">PyWxDump</a>是<a href="https://github.com/AdminTest0/SharpWxDump">SharpWxDump</a> 的经过重构python语言版本，同时添加了一些新的功能。</p><ul><li>项目地址：<a href="https://github.com/xaoyaoo/PyWxDump">https://github.com/xaoyaoo/PyWxDump</a></li><li>目前只在windows下测试过，mac、linux下可能会存在问题。</li><li>如发现<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/pywxdump/version_list.json">version_list.json</a>缺失或错误, 请提交<a href="https://github.com/xaoyaoo/PyWxDump/issues">issues</a>. </li><li>如发现bug或有改进意见, 请提交<a href="https://github.com/xaoyaoo/PyWxDump/issues">issues</a>.</li><li>如有其他想要的功能, 请提交<a href="https://github.com/xaoyaoo/PyWxDump/issues">issues</a>.</li><li>常见问题请参考<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/doc/FAQ.md">FAQ</a></li><li>更新日志请参考<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/doc/CHANGELOG.md">CHANGELOG</a></li><li><a href="https://github.com/xaoyaoo/xaoyaoo/blob/main/donate.md">:sparkling_heart: Support Me</a></li></ul><h2 id="5-star-history">5. Star History</h2><details><summary>click to expand</summary><a href="https://star-history.com/#xaoyaoo/pywxdump&amp;Date"><img src="https://api.star-history.com/svg?repos=xaoyaoo/pywxdump&amp;type=Date" alt="Star History Chart"></a></details><h1 id="-">二、使用说明</h1><ul><li><p>详细使用说明见<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/doc/UserGuide.md">UserGuide.md</a></p></li><li><p>极简版使用说明<a href="https://github.com/xaoyaoo/pywxdumpmini">pywxdumpmini</a></p></li></ul><p>【注】:</p><ul><li>关于基址使用cheat engine获取，参考<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/doc/CE获取基址.md">CE获取基址.md</a> （该方法可用<code>wxdump bias</code>命令代替，现仅用作学习原理） </li><li>关于数据库解析，参考<a href="https://github.com/xaoyaoo/PyWxDump/tree/master/doc/wx数据库简述.md">wx数据库简述.md</a></li></ul><h1 id="-">三、免责声明（非常重要！！！！！！！）</h1><p>本项目仅供学习交流使用，请勿用于非法用途，否则后果自负。</p><p>您应该在下载保存，编译使用本项目的24小时内，删除本项目的源代码和（编译出的）程序。</p><p>本项目仅允许在授权情况下对数据库进行备份，严禁用于非法目的，否则自行承担所有相关责任。</p><p>下载、保存、进一步浏览源代码或者下载安装、编译使用本程序，表示你同意本警告，并承诺遵守它;</p><p>请勿利用本项目的相关技术从事非法测试，如因此产生的一切不良后果与项目作者无关。</p><h1 id="-">四、许可证</h1><pre><code class="lang-text">MIT License

Copyright (c) 2023 xaoyaoo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

PyWxDump is hosted at: https://github.com/xaoyaoo/PyWxDump

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</code></pre>`,23);function f(D,w){const p=i("center"),h=i("big");return m(),r("div",y,[t("h1",n,[a(p,null,{default:s(()=>[o("PyWxDump")]),_:1})]),x,t("ul",null,[t("li",null,[t("strong",null,[a(h,null,{default:s(()=>[o(" 超级想要star，走过路过，帮忙点个"),g,o(" 呗，谢谢啦~")]),_:1})])])]),b])}const W=l(d,[["render",f]]);export{W as default};
