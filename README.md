# vuew
 A start on a vuetify d3 UI for fun 
 
## Environment setup -  https://vuejs.org/v2/guide/installation.html
It's good to know how to start from scratch
```
sudo yum update -y
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo yum install -y nodejs
node -v
npm -v
```

### Install Vue components
```
npm install vue vuetify vue-router d3 vue-network-d3 -y
```

### Create hello-world project to check installation
```
vue create hello-world
// manually select
// Babel, Router, Vuex, Linter/ Formatter
// Use version 2.x
// Don't use history mode for router
// ESLint + Prettier
// Lint on save
// In package.json
// N dont save as present for future projects
cd hello-world
npm run serve
/* App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.26.32:8080/ */
// remember to unblock your browser security settings if you have issues
```

### Install git and clone Vuew project
```
sudo yum install git -y
git clone https://github.com/riccra/vuew.git
cd vuew
npm run build
npm run serve
```



### Ensure Vue CLI is >= 3.0 - https://vuetifyjs.com/en/getting-started/quick-start/
```
vue --version
```

### To start the UI
```
vue ui
```