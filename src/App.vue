<template>
  <v-app id="App">

<!-- Is always placed at the top of an application with higher priority than v-app-bar. -->
  <v-system-bar app
          color="blue-grey darken-1" dark
          :height="height"
          :lights-out="lightsOut"
          :window="window">
    <v-icon>mdi-vuetify</v-icon>
          <span><strong>Vuew</strong></span>
          <v-spacer></v-spacer>
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-outline</v-icon>
          <v-icon>mdi-battery</v-icon>
          <span>{{ new Date().toLocaleTimeString() }}</span>
  </v-system-bar>


   <!-- v-navigation-drawer app>
     
   -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue-grey lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
      <v-toolbar-title
        style="width: 300px;color:#fff;"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Vuew</span>
      </v-toolbar-title>
      </router-link>

      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    
    <router-link to="/About">
      <v-btn
        icon
        large
      >

    <!-- Profile -->
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/210px-GitLab_Logo.svg.png"
            alt="Fox"
          ></v-img></v-avatar>

      </v-btn>
      </router-link>
    </v-app-bar>
    

<!-- Main Container -->
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <!-- <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                :href="source"
                icon
                large
                target="_blank"
                v-on="on"
              >
                <v-icon large>mdi-code-tags</v-icon>gfsfgfs
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip> -->

 <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>


        </v-row>
      </v-container>
    </v-main>


<!-- Plus button -->
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="grey darken-2">
          Create contact
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-avatar
                  size="40px"
                  class="mx-3"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-card-details-outline"
                placeholder="Company"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-mail"
                placeholder="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-text"
                placeholder="Notes"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >More</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
            text
            @click="dialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


<!-- v-footer - Is always placed at the bottom of an application with a lower priority than v-bottom-navigation.-->
  <v-footer 
  :display="hidden"
  shift app>
   </v-footer>

<!-- v-bottom-navigation - Is always placed at the bottom of an application with a higher priority than v-footer. -->
  <v-bottom-navigation  
   color="grey" 
          :height="height"
          :lights-out="lightsOut"
          :window="window"
          v-model="bottomNav" shift app>
 <v-btn>
      <v-icon>mdi-home</v-icon>
      <span>Main</span>
    </v-btn>

<router-link to="/MovieSearch">
    <v-btn>
      <span>Video</span>
      <v-icon>mdi-television-play</v-icon>
    </v-btn>
</router-link>

    <v-btn>
      <span>Audio</span>
      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn>
      <span>Book</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>


    <v-btn>
      <span>List</span>
      <v-icon>fa-list</v-icon>
    </v-btn>

   <v-btn>
      <span>search</span>
      <v-icon>fa-search</v-icon>
    </v-btn>

    <v-btn>
      <span>Settings</span>
      <v-icon>mdi-settings</v-icon>
    </v-btn>

    <v-btn>
      <span>Build</span>
      <v-icon>mdi-dialpad</v-icon>
    </v-btn>

    <v-btn>
      <span>Book</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    
    <v-btn>
      <span>Notes</span>
      <v-icon>fas fa-edit</v-icon>
    </v-btn>

<!-- 
  mdiVolumeOff
  mdiVolumeMute
  mdiVolumeLow
  mdiVolumeMedium
  mdiVolumeHigh
  mdiVolumeVariantOff
   -->
<v-card-text class="pt-0">
      <v-slider
        v-model="appPlaybackVolume"
        prepend-icon="mdi-volume-medium"
        :rules="appPlaybackVolumerules"
        label=""
        step="10"
        thumb-label
        ticks
      ></v-slider>
    </v-card-text> 

  </v-bottom-navigation>


  </v-app>
</template>

<!-- Data Operations -->
<script>

  export default {
  
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-contacts', text: 'Contacts' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        { icon: 'mdi-database', text: 'Data' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-puzzle', text: 'Plugins' },
        { icon: 'mdi-cog', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },
      ],
    }),
    // return {
    //     appPlaybackVolume: 30,
    //     appPlaybackVolumerules: [
    //       v => v <= 50 || 'Too LOUD!',
    //     ],
    //   }

     

  }
</script>
