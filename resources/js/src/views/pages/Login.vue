<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">

                    <div class="vx-row no-gutter justify-center items-center">

                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8 login-tabs-container">

                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">Авторизоваться</h4>
                                    <p>Добро пожаловать!</p>
                                    <p>Пожалуйста, войдите в свой аккаунт.</p>
                                </div>
                                <vs-divider></vs-divider>
                                <form>
                                    <div class="mt-8">
                                        <vs-input
                                            v-validate="'required|min:3'"
                                            name="email"
                                            icon-no-border
                                            icon="icon icon-user"
                                            icon-pack="feather"
                                            label-placeholder="Email"
                                            v-model="email"
                                            class="w-full"/>
                                        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                                        <vs-input
                                            v-validate="'required|min:6'"
                                            type="password"
                                            name="password"
                                            icon-no-border
                                            icon="icon icon-lock"
                                            icon-pack="feather"
                                            label-placeholder="Пароль"
                                            v-model="password"
                                            class="w-full mt-6"/>
                                        <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                                        <vs-button class="float-right mb-8 mt-8" @click.prevent="login">Войти
                                        </vs-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>


export default {
  data () {
    return {
      email: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  methods: {
    login () {
      this.$validator.localize({
        'en': {
          'messages': {
            'required': 'Это поле обязательно к заполнению',
            'min': 'это поле должно содержать не менее {length} символов',
            'max': (_, {length}) => `это поле должно иметь не более ${length} символов`
          }
        }
      })
      this.$validator.validateAll().then(result => {
        if (!result) {
          this.$vs.notify({
            time: 6000,
            title: 'Ошибка',
            text: 'Введите обязательную поля!',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
          return false

        }
      })

      // Loading
      this.$vs.loading()
      localStorage.setItem('token', null)
      const that = this
      this.$http.post('/api/login',
        {
          username: this.email,
          password: this.password
          // headers: headers
        }
      ).then(function (response) {
        // handle success
        localStorage.setItem('token', response.data.access_token)
        that.$http.post('/api/check-auth',
          {}, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }
        ).then(function (response) {
          that.$store.commit('UPDATE_USER_INFO', {
            displayName: response.data.name,
            email: response.data.email,
            photoURL: response.data.avatar,
            userRole: response.data.role,
            roleName: response.data.role_name,
            uid: response.data.id,
            department: response.data.department,
            counter: response.data.counter
          })
          that.$router.push('/').catch(() => {})
          that.$vs.loading.close()
          that.$vs.notify({
            time: 6000,
            title: 'Добро пожаловать',
            text: that.$store.state.AppActiveUser.displayName,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success'
          })
        }).catch(function (error) {
          if (error.response.status == 401) {
            localStorage.setItem('token', null)
            that.$vs.loading.close()
          }
        })

      }
      ).catch(function (error) {
        localStorage.setItem('token', null)
        that.$vs.loading.close()
        if (error.response.status == 401) {
          that.$vs.notify({
            time: 6000,
            title: 'Ошибка',
            text: 'Неверный логин или пароль',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
          that.password = ''
        }
      })
    }
  },
  created () {

  }

}
</script>

<style lang="scss">

</style>
