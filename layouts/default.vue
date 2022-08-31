<template>
  <!-- EXPLANATION: I want to add a header with a navbar
  to my project. So, I will add the header here, in the
  default.vue file so that navbar can be seen in all the 
  pages of my project. -->
  <!-- 1) Go to the components folder a create inside
  a folder called Navigation. Inside create three files: 
  TheHeader, TheSidenav and TheSideNavToggle. An explanation
  of what there is inside these files in included in the
  files themselves.-->
  <div>
        <!-- 4) Use TheHeader and TheSidenav components.  -->
        <!-- 5) In TheHeader, listen to the custom event @sidenavToggle, 
        which is emited from TheHeader, to determine whether the TheSidenav
        should be shown or not. -->
        <TheHeader @sidenavToggle = "displaySidenav = !displaySidenav"/>
        <!-- 7) Pass the show property to the TheSidenav and bind it 
        to the dynamic displaySidenav value.-->
        <!-- 8)  In TheSidenav listen to the event close, which
        is emited from TheSidenav and set displaySidenav to false
        to close the TheSidenav. -->
        <!-- 9) Now if I go to my local host, I can see the header,
        and if I shrink the page I can see the toogler button for
        the mobile version.  -->
        <TheSidenav 
        :show="displaySidenav"
        @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>

<script>
  /* 2) Import TheHeader and TheSidenav components. 
  Note: there's no need to import TheSideNavToggler
  component because I´m using it on TheHeader component. */
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";

/* 3) Register TheHeader and TheSidenav components.  */
export default {
  components: {
    TheHeader,
    TheSidenav
    
  },
  /* 6) Whenever the custom event @sidenavToggle occurrs, I want 
  to switch some property, which then I pass down to the TheSidenav.
  To manage that property, I set the displaySidenav property to false
  initially */
  data() {
    return {
      displaySidenav: false
    }
  },


};
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
