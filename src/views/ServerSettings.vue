<template lang="html">
  <v-card color="foreground" class="d-flex mx-auto page">
    <v-container fluid class="component">
      <Nav class="mb-3" />
      <v-card color="foreground" tile>
        <v-row>
          <v-col class="flex-grow-1 flex-shrink-0">
            <div>
              <v-tabs
                v-model="SettingsTab"
                background-color="tabs"
                mobile-breakpoint="sm"
              >
                <v-tab class="text-left" @click="$router.go(-1)">
                  <v-icon left class="mr-1">mdi-arrow-left-bold-outline</v-icon>
                  Back
                </v-tab>
                <v-tab class="text-left">
                  <v-icon left class="mr-1">mdi-information-outline</v-icon>Info
                </v-tab>
                <v-tab class="text-left">
                  <v-icon left class="mr-1">mdi-format-color-fill</v-icon>Theme
                </v-tab>
                <v-tab class="text-left">
                  <v-icon left class="mr-1">mdi-view-list-outline</v-icon
                  >Template Variables
                </v-tab>
                <v-tab class="text-left">
                  <v-icon left class="mr-1">mdi-trash-can-outline</v-icon>
                  Prune
                </v-tab>
                <v-tab class="text-left">
                  <v-icon left class="mr-1">mdi-update</v-icon>
                  Update
                </v-tab>
                <v-tab class="text-left">
                  <v-menu bottom offset-y v-if="!authDisabled">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" v-bind="attrs" v-on="on" class="pr-2">
                        {{ username }}
                        <v-icon> mdi-chevron-down </v-icon>
                      </v-btn>
                    </template>
                    <v-list color="foreground">
                      <v-list-item :to="{ path: `/user/info` }">
                        <v-list-item-icon>
                          <v-icon>mdi-account-settings-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          User
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item @click="logout()">
                        <v-list-item-icon>
                          <v-icon>mdi-logout-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          Logout
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-tab>
              </v-tabs>
              <transition
                name="slide"
                enter-active-class="animated fadeIn delay"
                leave-active-class="animated fadeOut"
                mode="out-in"
              >
                <v-tabs-items v-model="SettingsTab" touchless class="mt-3">
                  <v-tab-item> </v-tab-item>
                  <v-tab-item>
                    <Info />
                  </v-tab-item>
                  <v-tab-item>
                    <Theme />
                  </v-tab-item>
                  <v-tab-item>
                    <Variables />
                  </v-tab-item>
                  <v-tab-item>
                    <Prune />
                  </v-tab-item>
                  <v-tab-item>
                    <Update />
                  </v-tab-item>
                </v-tabs-items>
              </transition>
            </div>
          </v-col>
        </v-row>
        <v-card-text>Version: {{ version }}</v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Info from "../components/serverSettings/ServerInfo";
import Variables from "../components/serverSettings/ServerVariables";
import Theme from "../components/serverSettings/Theme";
import Prune from "../components/serverSettings/Prune";
import Update from "../components/serverSettings/ServerUpdate";
export default {
  components: {
    Info: Info,
    Variables: Variables,
    Theme: Theme,
    Prune: Prune,
    Update: Update
  },
  data() {
    return {
      SettingsTab: 1,
      version: process.env.VUE_APP_VERSION || "unreleased"
    };
  },
  methods: {
    ...mapActions({
      logout: "auth/AUTH_LOGOUT"
    }),
  },
  computed: {
    ...mapState("auth", ["username", "authDisabled"])
  }
};
</script>

<style>
.floating-menu {
  z-index: 1;
}
</style>
