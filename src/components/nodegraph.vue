
<template>
  <div id="app">
    <network :nodeList="nodes" :linkList="links"></network>
  </div>
</template>

<script>
import Network from "vue-network-d3";

export default {
  name: "app",
  components: {
    Network
  },
  data() {
    return {
      nodes: [
      	{"id": "Myriel", "group": 1},
      	{"id": "Napoleon", "group": 1},
        {"id": "Labarre", "group": 2},
        {"id": "Valjean", "group": 2},
        { "id": "Ma1", "group": 1 },
    { "id": "1", "group": 1  },
    { "id": "2", "group": 1  },
    { "id": "3", "group": 1  },
    { "id": "4", "group": 1  },
    { "id": "5", "group": 1  },
    { "id": "6", "group": 1  },
    { "id": "7", "group": 2  },
    { "id": "8", "group": 2  },
    { "id": "9", "group": 2  },
    { "id": "10", "group": 2  },
	{ "id": "11", "group": 3  },	
	{ "id": "12", "group": 4  },   
	{ "id": "13", "group": 4  },
	{ "id": "14", "group": 4  },
	{ "id": "15", "group": 4  },
	{ "id": "16", "group": 4  },
	{ "id": "17", "group": 5  },
	{ "id": "18", "group": 5  },
	{ "id": "19", "group": 5  }
      ],
      links: [
        {"source": "Napoleon", "target": "Myriel", "value": 1},
        {"source": "Valjean", "target": "Labarre", "value": 1},
        {"source": "Napoleon", "target": "Valjean", "value": 2},
        {"source": "Napoleon", "target": "1", "value": 1},
        {"source": "Valjean", "target": "2", "value": 2},
        {"source": "Napoleon", "target": "3", "value": 2},
        { "source": "6", "target": "3", "value" : 2 },
        { "source": "9", "target": "7", "value" : 2 },
        { "source": "9", "target": "Ma1", "value" : 2 },
        { "source": "3", "target": "10", "value" : 2 },
        { "source": "10", "target": "8", "value" : 1 },
        { "source": "11", "target": "13", "value" : 1 },
        { "source": "11", "target": "6", "value" : 2 },
        { "source": "11", "target": "14", "value" : 2 },
        { "source": "9", "target": "11", "value" : 3},
        { "source": "13", "target": "16", "value" : 3},
        { "source": "13", "target": "18", "value" : 3} 
      ]
    };
  },props: {
    nodeList: Array,
    linkList: Array,
    // node related:
    nodeSize: {
      type: Number,
      default: 14
    },
    nodeTextKey: {
      type: String,
      default: "id"
    },
    nodeTypeKey: {
      type: String,
      default: "group"
    },
    nodeTextFontSize: {
      type: Number,
      default: 14
    },
    bodyStrength: {
      type: Number,
      default: -150
    },
    // link related:
    linkWidth: {
      type: Number,
      default: 2
    },
    showLinkText: {
      type: Boolean,
      default: false
    },
    linkTextKey: {
      type: String,
      default: "value"
    },
    linkTypeKey: {
      type: String,
      default: "type"
    },
    linkTextFrontSize: {
      type: Number,
      default: 10
    },
    linkDistance: {
      type: Number,
      default: 50
    },
    // svg raleted:
    svgSize: {
      type: Object,
      default: () => {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    },
    svgTheme: {
      type: String,
      default: "light" // dark or light
    },
    // others:
    highlightNodes: {
      type: Array,
      default: () => {
        return [];
      }
    }
}
};
</script>

<style>
body {
  margin: 0;
}
</style>
