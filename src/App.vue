<template>
  <div id="alpha-shop">
    <Navbar />
    <main role="main">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<style>
</style>

<script>
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/styles/Reset.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

