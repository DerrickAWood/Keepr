<template>
  <div class="vault container-fluid">
    <h1>WELCOME TO THE VAULT</h1>

    <form @submit.prevent="createVault()">
      <div class="form-group">
        <label for="Name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter vault name...."
          v-model="newVault.Name"
        />
      </div>
      <div class="form-group">
        <label for="Description">Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          placeholder="Enter Description...."
          v-model="newVault.Description"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-lg">SUBMIT</button>
    </form>

    <div class="row justify-content-center">
      <div class="m-2" v-for="vault in Vaults" :key="vault.id">
        <div v-if="$auth.user.email == vault.creatorEmail">
          <div class="col-12 border rounded m-3">
          <h1>vault:</h1>
          <h1>{{vault.Name}}</h1>
          <h1>{{vault.Description}}</h1>
          <hr />
          <div v-for="keep in Keeps" :key="keep.id">
            <div v-for="vk in VaultKeeps" :key="vk.id">
              <div v-if="keep._id == vk.keepId && vk.vaultId == vault._id && vk.creatorEmail == vault.creatorEmail">
                <p>Name: {{keep.Name}}</p>
                <p>Description: {{keep.Description}}</p>
                <img :src="keep.Img" class="img-fluid" alt />
                <button
                  @click="deleteVaultKeep(vk._id)"
                  class="btn btn-warning btn-block"
                >Delete Keep From Vault</button>
                <hr />
              </div>
            </div>
          </div>
          <button @click="deleteVault(vault._id)" class="btn btn-danger">Delete Vault</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row justify-content-center">
      <div class="col-4 border rounded m-3">
        <h1>My Keeps:</h1>
        <div v-for="keep in Keeps" :key="keep.id">
          <div v-if="keep.userId == $auth.user.sub">
            <p>Name: {{keep.name}}</p>
            <p>Description: {{keep.description}}</p>
            <img :src="keep.img" class="img-fluid" alt />
            <p>Views:{{keep.views}}</p>
            <p>Shares:{{keep.shares}}</p>
            <p>Keeps:{{keep.keeps}}</p>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      newVault: {}
    };
  },
  mounted() {
    this.$store.dispatch("getKeeps");
    this.$store.dispatch("getVaults");
    this.$store.dispatch("getVaultKeeps");
    this.$store.dispatch("setBearer", this.$auth.bearer);
  },
  computed: {
    Keeps() {
      return this.$store.state.publicKeeps;
    },
    Vaults() {
      return this.$store.state.vaults;
      console.log(this.$store.state.Vaults)
    },
    VaultKeeps() {
      return this.$store.state.vaultKeeps;
    }
  },
  methods: {
    createVault() {
      this.$store.dispatch("createVault", this.newVault);
    },
    deleteVault(vaultId) {
      this.$store.dispatch("deleteVault", vaultId);
    },

    deleteVaultKeep(vaultKeepId) {
      this.$store.dispatch("deleteVaultKeep", vaultKeepId);
    }
  },
  component: {}
};
</script>

<style></style>
