<template>

    <v-app id="inspire">

  <v-system-bar app>
    <!-- Is always placed at the top of an application with higher priority than v-app-bar. -->
  </v-system-bar>


  <v-app-bar app>
    <!-- -->
  </v-app-bar>

  
     <v-navigation-drawer app>
    <!-- -->
  </v-navigation-drawer>



<!-- Pop up to alert bar-->
     <v-system-bar>

      </v-system-bar>

<!-- Sizes your content based upon application components -->
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-row>
        </v-container>
      </v-main>
      <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" width="800px">
        <v-card>
          <v-card-title class="grey darken-2">
            Create contact
          </v-card-title>
          <v-container>
            <v-row class="mx-2">
              <v-col class="align-center justify-space-between" cols="12">
                <v-row align="center" class="mr-0">
                  <v-avatar size="40px" class="mx-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    />
                  </v-avatar>
                  <v-text-field placeholder="Name"></v-text-field>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  prepend-icon="mdi-account-card-details-outline"
                  placeholder="Company"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field placeholder="Job title"></v-text-field>
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
            <v-btn text color="primary">More</v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


  <v-footer app>
    <!--  Is always placed at the bottom of an application with a lower priority than v-bottom-navigation.-->
  </v-footer>

  <v-bottom-navigation app>
    <!-- Is always placed at the bottom of an application with a higher priority than v-footer. -->
  </v-bottom-navigation>

    </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "mdi-contacts", text: "Contacts" },
      { icon: "mdi-history", text: "Frequently contacted" },
      { icon: "mdi-content-copy", text: "Duplicates" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-plus", text: "Create label" }]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "mdi-cog", text: "Settings" },
      { icon: "mdi-message", text: "Send feedback" },
      { icon: "mdi-help-circle", text: "Help" },
      { icon: "mdi-cellphone-link", text: "App downloads" },
      { icon: "mdi-keyboard", text: "Go to the old version" }
    ]
  })
};
</script>
