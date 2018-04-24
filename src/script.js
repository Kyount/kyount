var randomImg = function(width, height) {return "http://picsum.photos/" + width + "/" + height + "/?image=" + Math.floor(Math.random()*1000);};
var projectObj = [
  {
    id: 0,
    selected: false,
    title: "ABOUT",
  },
  {
    id: 1,
    selected: false,
    title: "CONTACT",
  },
  {
    id: 2,
    selected: false,
    title: "PHOTOGRAPHY",
  },
  {
    id: 3,
    selected: false,
    title: "PROJECTS",
    projectList: [
      {
        title: "PROJECT 1",
        image: randomImg(450, 200),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus sit amet sem et imperdiet. Vestibulum sem nunc, suscipit vitae eros vel, vulputate vulputate eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ante urna, vel varius dui euismod id. Curabitur eget velit ligula. Nunc lacinia diam neque, ac rutrum ante laoreet sed.",
        link: "#"
      },
      {
        title: "PROJECT 2",
        image: randomImg(450, 200),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus sit amet sem et imperdiet. Vestibulum sem nunc, suscipit vitae eros vel, vulputate vulputate eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ante urna, vel varius dui euismod id. Curabitur eget velit ligula. Nunc lacinia diam neque, ac rutrum ante laoreet sed.",
        link: "#"
      },
    ]
  }
];

var slider; //slider variable

var vm = new Vue({
  el: '#app',
  data: {
    aboutBox: false,
    contactBox: false,
    isProjectShowing: false,
    isInfoShowing: false,
    activeProject: -1,
    projects: projectObj,
    projectList: projectObj[3].projectList
  },
  computed: {
    isMobileDevice: function() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
  },
  methods: {
    randomPhoto: function(width, height) {
      return "http://picsum.photos/" + width + "/" + height + "/?image=" + Math.floor(Math.random()*1000);
    },
    showAbout: function() {
      this.hideContact();
      this.aboutBox = true;
    },
    hideAbout: function() {
      this.aboutBox = false;
    },
    showContact: function() {
      this.hideAbout();
      this.contactBox = true;
    },
    hideContact: function() {
      this.contactBox = false;
    },
    showProject: function(project) {
      this.activeProject = project.id;
      this.isProjectShowing = true;
    },
    hideProject: function() {
      this.activeProject = -1;
      this.isProjectShowing = false;
      window.scrollTo(0, 0);
    },
    computeBG: function(image) {
      return "background-image: url(" + image + ")";
    }
  },
  mounted: function() {
    document.getElementById('fadeIn')
    .velocity({opacity:0}, {duration: 1000})
    .velocity({display:'none'}, {duration: 0});

    import('/src/bugs.js');
  }
});
