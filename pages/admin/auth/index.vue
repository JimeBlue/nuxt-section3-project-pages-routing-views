<template>
    <!-- EXPLANATION: I create the content for this component.
    I created a form with the reusable inputs and buttons, in
    which we can switch between login and signup form when
    we click the Switch to button. In the form we can enter 
    email and password to be submitted. Right now nothing gets
    submitted, this doesn't do anything yet. Now, if I manually
    navigate to /admin/auth I will see the switching 
    login and signup forms -->
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    AppButton
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

