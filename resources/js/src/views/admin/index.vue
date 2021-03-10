<template>
    <vx-card title="Список пластинок">
        <div class="export-table">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="3" vs-sm="6" class="pr-2">
                    <v-select v-model="sPage" :options="perPageOptions" @input="readData" class="w-full">
                        <template #list-header>
                            <li style="text-align: center">Выберите пагинация</li>
                        </template>
                        <template #no-options="{ search, searching, loading }">
                            Нет данных.
                        </template>
                    </v-select>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="right" vs-w="4" vs-sm="12" class="pr-2 float-left">
                    <vs-button @click="AddRecords()" color="success" type="filled" class="w-full" icon-pack="feather" icon="icon-plus" >Добавить пластинок</vs-button>
                </vs-col>
            </vs-row>
            <vs-table :sst="true" :data="records" v-model="selectedUsers"  @sort="handleSort" @search="handleSearch" search  :noDataText="`Нет данных.`" id="department-container">
                <template slot="header">
                </template>
    <template slot="thead" >
        <vs-th > №</vs-th>
        <vs-th sort-key="code">Код</vs-th>
        <vs-th sort-key="name">Название</vs-th>
        <vs-th sort-key="author">Автор</vs-th>
        <vs-th sort-key="condition">Состояние</vs-th>
        <vs-th sort-key="date"> Действие</vs-th>
    </template>

    <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :order="false">{{ (sPage*(currentx-1))+indextr+1 }}</vs-td>
            <vs-td :data="tr.code">{{ tr.code }}</vs-td>
            <vs-td :data="tr.name">{{ tr.name }}</vs-td>
            <vs-td :data="tr.author">{{ tr.author }}</vs-td>
            <vs-td :data="tr.condition">{{ tr.condition }}</vs-td>
            <vs-td :data="tr.id">
                <div class="btn-group includeIcon">
                    <vs-button @click="editRecords(tr.id,tr.code,tr.name,tr.author,tr.condition)" type="filled" size="small" color="rgb(62, 201, 214)" icon-pack="feather" icon="icon-edit"></vs-button>
                </div>
                <div class="btn-group includeIcon">
                    <vs-button @click="deleteRecords(tr.id)" type="filled" size="small" color="rgb(255, 0, 0)" icon-pack="feather" icon="icon-trash"></vs-button>
                </div>
            </vs-td>
        </vs-tr>
    </template>
            </vs-table>
        </div>
        <div class="mt-3" id="#listFirst">
            <vs-pagination :total="total" v-model="currentx" @change="handleChangePage"></vs-pagination>
        </div>
        <vs-prompt :title="titleModal" class="export-options" @accept="saveRecords" :accept-text="textAdd" cancel-text="Отмена" :active.sync="activePrompt">
            <div class="vx-col">
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" class="w-full" label="Код*" v-model="code" name="code"/>
                    </div>
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" class="w-full" label="Название*" v-model="name" name="name"/>
                    </div>
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" class="w-full" label="Автор*" v-model="author" name="author"/>
                    </div>
                    <div class="vx-col w-full">
                        <vs-input v-validate="'required'" class="w-full" label="Состояние*" v-model="condition" name="condition"/>
                    </div>
                </div>
            </div>
        </vs-prompt>

    </vx-card>
</template>

<script>
import vSelect from 'vue-select'
export default {
  components: {
    vSelect
  },
  data () {
    return {
      perPageOptions: [10, 15, 30, 100, 1000],
      sPage: 10,
      records: [],
      selectedUsers: [],
      selected: [],
      currentx: 1,
      total: 1,
      search: '',
      order: {
        column: '',
        type: ''
      },
      selectedHidden: [],
      titleModal: 'Добавить Пластинок',
      textAdd: 'Добавить',
      name: '',
      code: '',
      author: '',
      condition: '',
      sId: 0,
      activePrompt: false
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleChangePage (page) {
      this.readData()
    },
    readData () {
      const that = this
      this.$vs.loading({
        type: 'corners',
        scale: 1
      })
      that.$http.post('/api/records',
        {
          length: that.sPage,
          page: that.currentx,
          search: that.search,
          order: that.order
        }, {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
      ).then(function (response) {
        // console.log(response.data.data)
        that.records = response.data.data
        that.total = response.data.last_page
        that.currentx = response.data.current_page
        that.$vs.loading.close('.con-vs-loading')
        // eslint-disable-next-line no-unused-vars
      }).catch(function (error) {
        that.$vs.loading.close('.con-vs-loading')
      })
    },
    saveRecords () {
      const that = this
      this.$vs.loading({
        type: 'corners',
        scale: 1
      })
      that.$http.post('/api/records-save',
        {
          id: that.sId,
          name: that.name,
          code: that.code,
          author: that.author,
          condition: that.condition
        }, {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
      ).then(function (response) {
        that.$vs.loading.close('.con-vs-loading')
        that.readData()
        // eslint-disable-next-line no-unused-vars
      }).catch(function (error) {
        that.$vs.loading.close('.con-vs-loading')
      })
    },
    deleteRecords (id) {
      const that = this
      this.$vs.loading({
        type: 'corners',
        scale: 1
      })
      that.$http.post('/api/records-delete',
        {
          id
        }, {
          headers: {
            'Authorization': `Bearer ${  localStorage.getItem('token')}`
          }
        }
      ).then(function (response) {
        that.$vs.loading.close('.con-vs-loading')
        that.readData()
        // eslint-disable-next-line no-unused-vars
      }).catch(function (error) {
        that.$vs.loading.close('.con-vs-loading')
      })
    },
    handleSearch (searching) {
      this.currentx = 1
      this.search = searching
      this.readData()
    },
    AddRecords () {
      this.titleModal = 'Добавить Пластинок'
      this.textAdd = 'Добавить'
      this.name = ''
      this.code = ''
      this.author = ''
      this.condition = ''
      this.activePrompt = true
    },
    editRecords (id, code, name, author, condition) {
      this.sId = id
      this.titleModal = 'Изменить Пластинок'
      this.textAdd = 'Изменить'
      this.name = name
      this.code = code
      this.author = author
      this.condition = condition
      this.activePrompt = true
    },
    handleSort (key, active) {
      this.order.column = key
      this.order.type = active
      this.readData()
    }
  },
  created () {
    this.readData()
  },
  mounted () {
    this.$emit('setAppClasses', 'department-page')
  }
}
</script>
