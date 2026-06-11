记住，以后更新完自动在GitHub和vercel上更新，地址如下：https://github.com/yschen2319/tay-tay，https://taylor-swift-story-site-20260606-01.vercel.app

**UI 文案规则：**

* 你输出的是最终用户看到的界面文字，不是设计文档或 UX 说明。
* 禁止在界面上向用户解释"为什么这样设计"或"这个模块的用途"。
* 同一条信息只出现一次，不要换措辞重复。
* 文案要短。按钮 ≤ 4 个字，卡片说明 ≤ 15 个字，不写长段落。
* 不要用"如果你……就……"这种教导语气，直接呈现内容和操作入口。

写前端的时候记住这套规则，并按照以上规则仔细排查项目中出现的文案做出整改。
## 陪伴模块（companion.js / companion.css）

2026-06 新增，目标是提升留存与情感连接。独立于 app.js，通过包装 `openSongModal`、克隆替换 `#todaySongBtn` / `#progressBtn` 的监听器来增强功能，不修改原有逻辑。

- 每日仪式：今日歌曲/情绪/一句/问题、本周主题、明日预告、连续打卡（北京时间 UTC+8 计算 dayNumber）。
- 私人便签与收藏：注入歌曲弹窗；收藏按钮固定在弹窗右上角（注意 `.song-modal__view-tabs` 桌面端为 display:none，勿放入其中）。
- 专辑护照：替换原进度弹窗，12 枚时代徽章，单时代读满 13 首点亮，全部点亮显示 12 Eras Journey。寄语在 `eraBlessings`。
- 我的轨迹：基于 localStorage 的足迹/主题/隐藏曲偏好/记忆盒子。专辑→主题映射在 `albumThemes`。
- 入口：右下角浮动坞 `.tt-dock`（注意 `.rail-tools` 已被 styles.css 用 `display:none!important` 永久隐藏，不要把入口放回侧栏）。
- 数据键：`tt_notes` / `tt_favs` / `tt_stats`，并复用已有 `taylorSwiftReadSongs`。
- 文案常量（moods/questions/weeklyThemes/eraBlessings）集中在 companion.js 顶部，可直接修改。
