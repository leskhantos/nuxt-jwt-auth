<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form @submit.prevent="login" class="box">
              <div class="field">
                <label for="" class="label">Login</label>
                <div class="control has-icons-left">
                  <input type="text" v-model="form.login" class="input"  required>
                  <span class="icon is-small is-left">
<!--                    <div v-if="errors.login">-->
<!--                      {{errors.login[0]}}-->
<!--                    </div>-->
                  <i class="fa fa-envelope"></i>
                </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" v-model="form.password" name="password" placeholder="*******" class="input" required>
                  <span class="icon is-small is-left">
<!--                       <div v-if="errors.password">-->
<!--                      {{errors.password[0]}}-->
<!--                    </div>-->
                  <i class="fa fa-lock"></i>
                </span>
                </div>
              </div>
              <div class="field">
                <button class="button is-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      middleware:'guest',
        name: "login",
      data(){
          return {
            form:{
              login:'',
              password:''
            }
          }
      },
      methods:{
          async login(){
            await this.$auth.login({data: this.form});
            this.$router.push({name: 'dashboard'});
          }
      }
    }
</script>

<style scoped>

</style>
