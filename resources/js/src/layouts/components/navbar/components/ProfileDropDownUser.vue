<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.displayName">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.displayName }}</p>
      <small>{{activeUserInfo.userRole}}</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2" @click="profilePage()">Профиль</span>
          </li>
          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2" @click="reportPage()">Отчёты</span>
          </li>
          <vs-divider class="m-1"/>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Выйти</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    profilePage () {
      this.$router.push('/profile-user').catch(() => {})
    },
    reportPage () {
      this.$router.push('/report-user').catch(() => {})
    },
    logout () {
      // This is just for demo Purpose. If user clicks on logout -> redirect
      var that=this
      that.$http.post('/api/logout',
        {
          //body
        }, {
          headers: {
            "Authorization": "Bearer "+localStorage.getItem("token")
          }
        }
      ).then(function (response) {
        localStorage.setItem('token', null)
        that.$router.push('/login').catch(() => {})
      }).catch(function (error) {
        if (error.response.status === 401) {
          localStorage.setItem('token', null)
          // eslint-disable-next-line no-invalid-this
          that.$router.push('/login').catch(() => {
          })
        }
      })
    }
  }
}
</script>
