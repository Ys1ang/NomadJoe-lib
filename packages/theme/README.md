# theme

## 使用方式

引用 CSS 文件

```javascript
@import '@triascloud/theme';
```

通过不同的 class 获取对应的变量，例：浅色模式下，主色为水绿青

```html
<div class="theme-cyan tint"></div>
```

## 九种主题色

| 颜色类型 | class 名                  | 浅色               | 深色               |
| :------: | ------------------------- | ------------------ | ------------------ |
|  极客蓝  | theme-blue     | rgb(71, 113, 255)  | rgb(100, 137, 255) |
|  水绿青  | theme-cyan     | rgb(0, 179, 179)   | rgb(8, 160, 160)   |
|  天际蓝  | theme-azure    | rgb(4, 169, 243)   | rgb(19, 153, 213)  |
|  魅力紫  | theme-purple   | rgb(151, 67, 254)  | rgb(176, 113, 255) |
|  活力橙  | theme-orange   | rgb(249, 150, 3)   | rgb(220, 136, 11)  |
|  极光绿  | theme-green    | rgb(65, 196, 0)    | (rgb(64, 175, 8)   |
|  薄暮红  | theme-red      | rgb(255, 51, 61)   | rgb(255, 81, 91)   |
|  火山橘  | theme-volcanic | rgb(250, 84, 28)   | rgb(243, 96, 46)   |
|  高端灰  | theme-grey     | rgb(136, 136, 136) | rgb(124, 124, 124) |

## 两种模式

- 浅色(tint)
- 暗色(dark)

## 变量说明

### 一、文字颜色

|         颜色类型         | 变量名                 | 浅色     | 深色     |
| :----------------------: | ---------------------- | -------- | -------- |
|           正文           | --font                 | #333333  | #cccccc  |
|         二级文字         | --font-sub             | #666666  | #999999  |
|         三级文字         | --font-info            | #999999  | #666666  |
|         辅助文字         | --font-color-secondary | #cccccc  | #aaaaaa  |
|        提示性文字        | --font-color-info      | #ff0000  | #ff2d2d  |
| 可操作、点击文字（选中） | --font-active          | 主色     | 主色     |
|       鼠标滑过文字       | --font-hover           | 主色-80% | 主色-80% |
|      删除按钮/文字       | --delete               | #fe5959  | #fe5959  |
|          警示色          | --warning              | #ff9900  | #ff9900  |
|         操作成功         | --success              | #00c361  | #00c361  |

### 二、标签（组件）

|       颜色类型       | 变量名 | 浅色    | 深色                 | class 名(用于组件 a-tag) |
| :------------------: | ------ | ------- | -------------------- | ------------------------ |
|         标签         | --tag  | #f3f6fc | rgba(255,255,255,.1) | 无                       |
| 标签 1（例：表格中） | 无     | #2ad181 | 背景#2ad181-10%      | tag-has-color-1          |
| 标签 2（例：表格中） | 无     | #fa9b47 | 背景#fa9b47-10%      | tag-has-color-2          |
| 标签 3（例：表格中） | 无     | #815be4 | 背景#815be4-10%      | tag-has-color-3          |
| 标签 4（例：表格中） | 无     | #18c4ec | 背景#18c4ec-10%      | tag-has-color-4          |
| 标签 5（例：表格中） | 无     | #2ad1c3 | 背景#2ad1c3-10%      | tag-has-color-5          |

### 三、底色

|       颜色类型       | 变量名               | 浅色     | 深色        |
| :------------------: | -------------------- | -------- | ----------- |
|       主页背景       | --home-bg            | 主色-10% | #363636     |
| 功能模块底色（内容） | --main-bg            | #ffffff  | #454545     |
|      最底部背景      | --body-bg            | #f3f3f3  | #212121     |
|   功能模块（底色）   | --block-bg           | #ffffff  | #2f2f2f     |
|      顶部导航栏      | --nav-bg             | #ffffff  | #353535     |
|      左侧导航栏      | --inline-menu-bg     | #ffffff  | #2f2f2f     |
|    左侧导航栏展开    | --inline-menu-sub-bg | #ffffff  | #272727     |
|    左侧导航栏选中    | --inline-menu-active | 主色-10% | #ffffff-20% |

### 四、弹窗（组件）

|   颜色类型   | 变量名            | 浅色                     | 深色                     |
| :----------: | ----------------- | ------------------------ | ------------------------ |
|   弹窗背景   | --modal-bg        | #ffffff                  | #2a2a2a                  |
| 弹窗标题背景 | --modal-header-bg | #f5f5f5                  | #404040                  |
|     阴影     | --modal-shadow    | 0px 0px 14px 0px #9f9f9f | 0px 0px 14px 0px #232323 |

### 五、下拉框（组件）

|  颜色类型  | 变量名            | 浅色                                      | 深色                     |
| :--------: | ----------------- | ----------------------------------------- | ------------------------ |
| 下拉框背景 | --dropdown-bg     | #ffffff                                   | #3a3a3a                  |
|    阴影    | --dropdown-shadow | 0px 0px 14px 0px rgba(226, 226, 226, 0.6) | 0px 0px 14px 0px #2b2a2a |

### 六、表单（组件）

| 颜色类型 | 变量名          | 浅色    | 深色       |
| :------: | --------------- | ------- | ---------- |
|   禁用   | --form-disabled | #f5f7fa | #ffffff-6% |

### 七、列表

| 颜色类型 | 变量名        | 浅色    | 深色        |
| :------: | ------------- | ------- | ----------- |
| 划过列表 | --list-hover  | #f5f5f5 | #ffffff-10% |
| 选中列表 | --list-active | #e9e9e9 | #ffffff-20% |

### 八、表格（组件）

|  颜色类型   | 变量名             | 浅色     | 深色        |
| :---------: | ------------------ | -------- | ----------- |
|  表格头部   | --table-header-bg  | 主色-8%  | #ffffff-8%  |
|   表格行    | --table-row        | #ffffff  | #2f2f2f     |
| 表格行-斑马 | --table-row-stripe | #fafafa  | #ffffff-8%  |
|  滑过表格   | --table-row-hover  | 主色-12% | #ffffff-12% |
|  选中表格   | --table-row-active | 主色-20% | #ffffff-20% |
|  文字颜色   | --table-color      | #666666  | #cccccc-90% |

### 九、按钮（组件）

|       颜色类型        | 变量名            | 浅色    | 深色    |
| :-------------------: | ----------------- | ------- | ------- |
|     默认类型-边框     | --btn-border      | #cccccc | #666666 |
|   默认类型-文字颜色   | --btn-color       | #999999 | #999999 |
|   默认类型-滑过背景   | --btn-hover-bg    | #cccccc | #666666 |
| 默认类型-滑过文字颜色 | --btn-hover-color | #666666 | #cccccc |

### 十、滚动条（组件）

| 颜色类型 | 变量名         | 浅色    | 深色    |
| :------: | -------------- | ------- | ------- |
|   背景   | --scroll-bg    | #f7f7f7 | #5B5B5B |
| 滚动滑块 | --scroll-track | #e3e3e3 | #909090 |

### 十一、步骤条（组件）

|  颜色类型  | 变量名       | 浅色        | 深色        |
| :--------: | ------------ | ----------- | ----------- |
| 步骤块背景 | --steps-bg   | #cccccc     | #666666     |
|     线     | --steps-line | #cccccc-30% | #cccccc-20% |

### 十二、分割线

|    颜色类型    | 变量名           | 浅色        | 深色                   |
| :------------: | ---------------- | ----------- | ---------------------- |
|   普通分割线   | --border         | #eeeeee     | #3f3f3f                |
| 普通分割线-20  | --border-fade-20 | #eeeeee-20% | rgb(153, 153, 153)-20% |
| 普通分割线-15  | --border-fade-15 | #eeeeee-15% | rgb(153, 153, 153)-15% |
| 表单组件分割线 | --form-border    | #eaeaea     | #4b4b4b                |
|  表格内分割线  | --table-border   | #dee2e6     | #5a5a5a                |

### 十三、收缩箭头背景

|   颜色类型   | 变量名      | 浅色    | 深色     |
| :----------: | ----------- | ------- | -------- |
| 收缩箭头背景 | --arrows-bg | #EFEFEF | ##4C4C4C |

### 十四、空态图

|    空态类型    | 变量名                   | 使用场景          |
| :------------: | ------------------------ | ----------------- |
|      403       | --forbidden              | 403               |
|      404       | --not-found              | 404               |
|      500       | --server-error           | 500               |
|   不启用流程   | --flow-image             | 不启用流程        |
|    固定流程    | --fixed-flow-image       | 固定流程          |
|  创建表单成功  | --form-success-image     | 创建表单成功      |
|    登录过期    | --login-expired-image    | 登录过期          |
|    分享过期    | --share-expired-image    | 分享过期          |
|     空态图     | --empty-image            | 默认空态          |
|   主页空态图   | --empty-home-image       | 主页/应用管理空态 |
|   列表空态图   | --empty-list-image       | 表格空态          |
|   搜索空态图   | --empty-search-image     | 搜索空态          |
| 拖拽配置空态图 | --empty-drag-image       | 拖拽配置          |
|    暂无权限    | --empty-permission-image | 暂无权限          |
|    暂无收藏    | --empty-favorite-image   | 暂无收藏          |
|    暂无下载    | --empty-download-image   | 暂无下载          |
|    暂无消息    | --empty-message-image    | 暂无消息          |

### 十五、阴影

| 颜色类型 | 变量名   | 浅色    | 深色    |
| :------: | -------- | ------- | ------- |
| 阴影颜色 | --shadow | #e1e1e1 | #232323 |
