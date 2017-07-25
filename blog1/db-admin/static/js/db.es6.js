var _vm = window.top.vm

var vm = new Vue({
  el: '#app',
  data() {
    return {
      router: JSON.parse(JSON.stringify(_vm.router)),
      lastIndex: 0,
      tableData: {
        isAdd: true,
        /*
          {
            "id": "1",
            "username": "摘星",
            "email": "摘星@qq.com",
            "password": "96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e",
            "level": "9",
            "createTime": "1495092511"
          }
        */
        data: {}
      },
      checkList: [],
      db: {
        list: [{
          Database: 'blog',
          tableList: []
        }]
      }
    }
  },
  watch: {
    router: {
      deep: true,
      handler(newVal, oldVal) {
        for (var key in newVal) {
          _vm.$set(_vm.router, key, newVal[key])
        }
      }
    }
  },
  computed: {
    _db() {
      var vm = this
      return vm.db.list[vm.router.dbIndex] || {}
    },
    _table() {
      var vm = this
      return (vm._db.tableList || [])[vm.router.tableIndex] || {}
    }
  },
  methods: {
    filterStr(field, str) {
      // return str
      switch (field) {
        case 'createTime':
          return vm.$options.filters.date(str)
        default:
          return vm.$options.filters.substr(str)
      }
    },
    confirm(msg, cb) {
      var modal = $('#modal-alert')
      modal.modal('show').find('.modal-body p').html(msg).end().find('.btn-sure').one('click', function(e) {
        cb && cb()
        modal.modal('hide')
      })
    },
    checkGroup(idx, e) { // 选择连续的
      var vm = this
      var table = vm._table.tableData
      if (e.shiftKey) {
        vm.checkList = []
        let start = Math.min(idx, vm.lastIndex)
        let end = Math.max(idx, vm.lastIndex)
        for (var i = start; i <= end; i++) {
          vm.checkList.push(table[i].id)
        }
      } else {
        vm.lastIndex = idx
      }
    },
    checkAllOrNot(e) { // 全选 / 全不选
      var vm = this
      var isChecked = e.target.checked
      vm.checkList = []
      if (isChecked) {
        vm._table.tableData.forEach(function(row, idx) {
          vm.checkList.push(row.id)
        })
      }
    },
    getDBList() { // 获取所有数据库信息
      var vm = this
      g.post('php/exec.php', {
        phpCode: 'res(queryData("SHOW DATABASES"));'
      }, (dbList) => {
        vm.db.list = dbList.map(function(item, idx) {
          return {
            name: item.Database,
            tableList: []
          }
        })
        vm.chooseDBAndGetTables(vm.router.dbIndex || 0)
      })
    },
    removeGroupTableData() { // 删掉一组
      var vm = this
      var _table = vm._table
      var tableData = _table.tableData
      // console.log(vm.checkList)
      vm.confirm('真的要删除这些吗？', function() {
        g.post('php/exec.php', {
          phpCode: 'query("DELETE FROM '+_table.name+' WHERE id IN ('+vm.checkList.join(',')+') "); err(0, \'删除成功\');'
        }, function(data) {
          for (var i = 0; i < vm.checkList.length; i++) {
            for (var j = 0; j < tableData.length; j++) {
              if (tableData[j].id === vm.checkList[i]) {
                tableData.splice(j, 1)
                break
              }
            }
          }
          vm.checkList = []
        })
      })
    },
    removeTableDataRow(idx) { // 删除一行
      var vm = this
      /*
        _table: {
          name: 'user',
          tableData: [],
          fieldList: []
        }
      */
      var _table = vm._table
      var row = _table.tableData[idx]
      vm.confirm('真的要删除吗？', function() {
        g.post('php/exec.php', {
          phpCode: 'query("DELETE FROM '+_table.name+' WHERE id='+row.id+' LIMIT 1");'
        }, function() {
          _table.tableData.splice(idx, 1)
        })
      })
    },
    clearTable(e) { // 清空数据表
      var vm = this
      vm.confirm('真的要清空吗？', function() {
        g.post('php/exec.php', {
          phpCode: 'query("TRUNCATE '+vm._table.name+'"); err(0, \'清空成功\');'
        }, function(data) {
          console.log(data)
          vm._table.tableData = []
        })
      })
    },
    gotoTableDataModal(isAdd, idx) { // 进入遮罩，修改row
      var vm = this
      var _table = vm._table
      vm.tableData.isAdd = isAdd === 'add'
      vm.tableData.data = {}
      if (vm.tableData.isAdd) {
        _table.fieldList.forEach(function(item, idx) {
          var key = item.Field
          vm.tableData.data[key] = key === 'createTime' ? parseInt(+new Date() / 1000) : ''
        })
      } else {
        vm.tableData.data = JSON.parse(JSON.stringify(_table.tableData[idx]))
      }
      $('#table-data-modal').modal('show')
    },
    operTableData(e) {
      var vm = this
      var _table = vm._table
      var data = JSON.parse(JSON.stringify(vm.tableData.data))
      var id = data.id
      delete data.id
      /*
        {
          "id": "1",
          "username": "摘星",
          "email": "摘星@qq.com",
          "password": "96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e",
          "level": "9",
          "createTime": "1495092511"
        }

        INSERT INTO table 
        ("username", "email", "password", "level", "createTime") VALUES 
        ("摘星", "摘星@qq.com", "96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e", "9", "1495092511")

      */

      var keys = []
      var vals = []
      for (var key in data) {
        keys.push(key)
        vals.push(data[key])
      }

      console.log('qqqqq')
      if (vm.tableData.isAdd) {
        g.post('php/exec.php', {
          keys: JSON.stringify(keys),
          vals: JSON.stringify(vals),
          phpCode: `
            $keys = json_decode($_POST['keys'], true);
            $vals = json_decode($_POST['vals'], true);

            foreach ($vals as $key => $value) {
              $vals[$key] = addslashes($value);
            }

            $sql = "INSERT INTO ${_table.name} (".join($keys, ',').") VALUES ('".join($vals, "','")."')";
            query($sql);
            res(queryRow("SELECT * FROM ${_table.name} WHERE id={$conn->insert_id} LIMIT 1"));
          `
        }, function(row) {
          _table.tableData.unshift(row)
          $('#table-data-modal').modal('hide')
        })
      } else {
        g.post('php/exec.php', {
          keys: JSON.stringify(keys),
          vals: JSON.stringify(vals),
          phpCode: `
            $keys = json_decode($_POST['keys'], true);
            $vals = json_decode($_POST['vals'], true);
            $arr = array();

            foreach ($vals as $key => $value) {
              $vals[$key] = addslashes($value);
            }

            foreach ($keys as $key => $value) {
              $arr[] = $value."='".$vals[$key]."'";
            }

            $sql = "UPDATE ${_table.name} SET ".join($arr, ',')." WHERE id=${id} LIMIT 1";
            query($sql);
            res(queryRow("SELECT * FROM ${_table.name} WHERE id=${id}"));
          `
        }, function(row) {
          _table.tableData.forEach(function(_row, idx) {
            if (_row.id === id) {
              _table.tableData.splice(idx, 1, row)
            }
          })
          $('#table-data-modal').modal('hide')
        })
      }
    },
    chooseDBAndGetTables(idx, e) { // 获取当前数据库下的所有表
      var vm = this
      var _db = vm.db.list[idx]
      vm.$set(vm.router, 'dbIndex', idx)

      if (e) {
        vm.router.tableIndex = 0
      }

      g.getExtend.action = 'chooseDB'
      g.getExtend.dbName = _db.name
      g.post('php/exec.php', {
        phpCode: 'res(queryDataArray("SHOW TABLES"));'
      }, function(tableList) {
        /*
          [
            ["article"],
            ["demo"],
            ["user"]
          ]
        */
        var data = tableList.map((item, idx) => {
          return {
            name: item[0],
            fieldList: [],
            tableData: []
          }
        })
        _db.tableList = data
        vm.getFileds(vm.router.tableIndex)
      })
    },
    getFileds(idx) { // 获取当前表下的所有字段
      var vm = this
      vm.$set(vm.router, 'tableIndex', idx)
      var _table = vm._table

      g.post('php/exec.php', {
        phpCode: 'res(queryData("DESCRIBE ' + _table.name + '"));'
      }, function(fieldList) {
        /*
        [{
          "Field": "id",
          "Type": "int(10) unsigned",
          "Null": "NO",
          "Key": "PRI",
          "Default": null,
          "Extra": "auto_increment"
        }]
        */
        _table.fieldList = fieldList
        vm.getTableData()
      })
    },
    getTableData() {
      var vm = this
      var _table = vm._table
      g.post('php/exec.php', {
        phpCode: 'res(queryData("SELECT * FROM '+_table.name+'"))'
      }, function(tableData) {
        _table.tableData = tableData
      })
    }
  },
  mounted() {
    var vm = this
    vm.getDBList()

    /*setTimeout(function() {
      console.log(vm)
    }, 100)*/
  }
})