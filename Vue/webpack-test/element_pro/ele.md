### element文档

##### 表格
- 基础表格
    - 使用el-table标签创建节点
    - style里面可以设置标签的样式
    - 设置斑马条纹: stripe
        - stripe属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。
        - 如果不输入stripe默认为false，输入后就是true 可以不需要赋值
    - 设置表格边框: border
        - 可以与stripe同时存在
        - 使用方法同上
    - 设置表格高亮: :row-class-name
        - 可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态
        - 指定一个函数执行调用函数返回值
        - 函数接收两个值, 第一个row是指接收到的是data数组中的每个数据，第二个值是标签中data数组中的该数据的索引值
        - 返回的值为一个css属性名称,接收到之后渲染页面表格颜色
        - 不能与stripe同时使用
- 固定表格
    - 固定表头:
        - 只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。
    - 固定列
        - 横向内容过多时，可选择固定列。
        - 固定列需要使用fixed属性，它接受 Boolean 值或者left right，表示左边固定还是右边固定。
        - fixed需写在el-table-column里面,如果没有设置left或者right，那么默认就为left
    - 固定表头以及列
        - 只需要将两个属性都设置好就行了
    - 流动高度
        - 直接设置max-height,会根据数据的长度而改变表格的高度
- 多级表头
    - 数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。
    - 在el-table-column中嵌套el-table-column就可以使用多级的多级表头
- 单选
    - 需要配置highlight-current-row属性为单选。
    - 之后使用curren-change事件来管理选中时触发的事件,他需要传入currentRow, oldCurrentRow两个参数
    - 无法实现第二次点击的时候就取消选中
    - 当第二次点击其他的选项时会取消之前的，然后选中点击的
    - 如果需要显示索引可以多添加一个el-table-column,设置type属性为index就可以了，索引值是从1开始的
- 多选
    - 选择多行数据时使用 Checkbox。
    - 手动添加一个el-table-column，设type属性为selection.





