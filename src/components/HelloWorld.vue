<template>
  <div class="hello">
    <!--头部-->
    <el-container>
      <el-header>
        <h3 class="title">角色管理</h3>
      </el-header>
      <el-container>
         <!--左侧-->
        <el-aside class="aside_left">
          <ul>
            <li><input type="text" placeholder="输入角色名进行查询"></li>
            <li v-for="(item,i) in list" @click="handleSelect(i)"><a href="#">{{item}}</a></li>
          </ul>
        </el-aside>
         <!--右侧-->
        <el-main>
          <h5>{{info_status}}</h5>
          <el-button @click="dialogFormVisible = true">添加角色</el-button>
            <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="角色名称"><span class="bitian"></span>
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="显示顺序" ><span class="bitian"></span>
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="描述" >
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
          <el-button @click="dialogFormVisible = true">添加角色</el-button>
          <el-button @click="dialogFormVisible = true">添加角色</el-button>
          <el-button @click="dialogFormVisible = true">添加角色</el-button>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">菜单权限</el-menu-item>
            <el-menu-item index="2">数据权限</el-menu-item>
            <el-menu-item index="3">文档权限</el-menu-item>
            <el-menu-item index="4">用户列表</el-menu-item>
          </el-menu>
          <el-tree :data="data2" :props="defaultProps" show-checkbox default-expand-all :expand-on-click-node="false" :render-content="renderContent">
          </el-tree>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
export default {

    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        info_status:"大区财务",
        list:["大区财务","大区经理","物流员角色","默认管理员","默认管理员","默认管理员","大区财务","大区经理","物流员角色","默认管理员","默认管理员","默认管理员","大区财务","大区经理","物流员角色"],
        data2: [
          {
          label: '基础数据',
          children: [{label: '客户'}, {label: '产品'}]
          }, {
          label: '业务申请',
          children: [{ label: '项目报备单'}, {label: '合同申请单'},{label: '交货申请单'},{label: '合同执行'
          }]
          },{
          label: '业务管理',
          children: [{label: '报备单管理'}, {label: '合同申请单'},{label: '交货申请单'},{label: '合同执行'}]
          },{
          label: '电子签章',
          children: [{label: '电子合同'}, {label: '合单子签收'}]
          }
          ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }

    },
     methods: {
      handleSelect(i){
         this.info_status=this.list[i];
         console.log(this.info_status);
      },
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      remove(store, data) {
        store.remove(data);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span>
            <span>
              <span style="fontSize:13px;color:#555;">{node.label}</span>
            </span>
          </span>);
      }
    }
  };
</script>

<style scoped>
  .hello{
     width:1000px;
     color:#505458;  
  }
  .el-header{
    font-size:14px;
    background: #f5f5f5;
  }
  
  .el-aside {
    background-color: #fff;

  }
  
  .el-main {
    background-color:#fff;
    color: #333;

  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  ul{
    list-style: none;
  }
  ul li a{
    display: block;
    text-decoration: none;
    padding:5px 10px;
    color:#797979;
  }
  ul li a:hover{
    background:#d1d2d7;
  }
  .aside_left{
    border-right:1px solid #ccc;
  }
.bitian::before {
 content: ' *';
 color: red;
 font-size: 15px;
}
</style>
