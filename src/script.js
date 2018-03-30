var projectObj = [
  {
    id: 0,
    selected: false,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit quam. Sed euismod lorem dui. Vestibulum ultrices accumsan scelerisque. Morbi sit amet odio libero. Fusce scelerisque elit nulla, sed fermentum libero lacinia at. Nam ultricies enim vel ante iaculis laoreet eu dignissim neque. Aliquam id metus dapibus, pharetra nisi id, tincidunt est. Nam magna ex, sagittis eu lorem quis, fringilla convallis dolor. Integer id nibh eros. Etiam vehicula, arcu et lacinia fermentum, dui est pellentesque nisl, vitae hendrerit lacus mauris sit amet neque. Quisque ultrices sodales enim. Duis eu sapien mollis, dapibus arcu viverra, consequat nisl. Nam lectus lectus, tempus vitae neque ut, pharetra blandit dui.",
    images: ['http://placehold.it/600x400', 'http://placehold.it/600x400', 'http://placehold.it/600x400'],
  },
  {
    id: 1,
    selected: false,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit quam. Sed euismod lorem dui. Vestibulum ultrices accumsan scelerisque. Morbi sit amet odio libero. Fusce scelerisque elit nulla, sed fermentum libero lacinia at. Nam ultricies enim vel ante iaculis laoreet eu dignissim neque. Aliquam id metus dapibus, pharetra nisi id, tincidunt est. Nam magna ex, sagittis eu lorem quis, fringilla convallis dolor. Integer id nibh eros. Etiam vehicula, arcu et lacinia fermentum, dui est pellentesque nisl, vitae hendrerit lacus mauris sit amet neque. Quisque ultrices sodales enim. Duis eu sapien mollis, dapibus arcu viverra, consequat nisl. Nam lectus lectus, tempus vitae neque ut, pharetra blandit dui.",
    images: ['http://placehold.it/600x400', 'http://placehold.it/600x400', 'http://placehold.it/600x400'],
  },
  {
    id: 2,
    selected: false,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit quam. Sed euismod lorem dui. Vestibulum ultrices accumsan scelerisque. Morbi sit amet odio libero. Fusce scelerisque elit nulla, sed fermentum libero lacinia at. Nam ultricies enim vel ante iaculis laoreet eu dignissim neque. Aliquam id metus dapibus, pharetra nisi id, tincidunt est. Nam magna ex, sagittis eu lorem quis, fringilla convallis dolor. Integer id nibh eros. Etiam vehicula, arcu et lacinia fermentum, dui est pellentesque nisl, vitae hendrerit lacus mauris sit amet neque. Quisque ultrices sodales enim. Duis eu sapien mollis, dapibus arcu viverra, consequat nisl. Nam lectus lectus, tempus vitae neque ut, pharetra blandit dui.",
    images: ['http://placehold.it/600x400', 'http://placehold.it/600x400', 'http://placehold.it/600x400'],
  },
  {
    id: 3,
    selected: false,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit quam. Sed euismod lorem dui. Vestibulum ultrices accumsan scelerisque. Morbi sit amet odio libero. Fusce scelerisque elit nulla, sed fermentum libero lacinia at. Nam ultricies enim vel ante iaculis laoreet eu dignissim neque. Aliquam id metus dapibus, pharetra nisi id, tincidunt est. Nam magna ex, sagittis eu lorem quis, fringilla convallis dolor. Integer id nibh eros. Etiam vehicula, arcu et lacinia fermentum, dui est pellentesque nisl, vitae hendrerit lacus mauris sit amet neque. Quisque ultrices sodales enim. Duis eu sapien mollis, dapibus arcu viverra, consequat nisl. Nam lectus lectus, tempus vitae neque ut, pharetra blandit dui.",
    images: ['http://placehold.it/600x400', 'http://placehold.it/600x400', 'http://placehold.it/600x400'],
  },
  {
    id: 4,
    selected: false,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit quam. Sed euismod lorem dui. Vestibulum ultrices accumsan scelerisque. Morbi sit amet odio libero. Fusce scelerisque elit nulla, sed fermentum libero lacinia at. Nam ultricies enim vel ante iaculis laoreet eu dignissim neque. Aliquam id metus dapibus, pharetra nisi id, tincidunt est. Nam magna ex, sagittis eu lorem quis, fringilla convallis dolor. Integer id nibh eros. Etiam vehicula, arcu et lacinia fermentum, dui est pellentesque nisl, vitae hendrerit lacus mauris sit amet neque. Quisque ultrices sodales enim. Duis eu sapien mollis, dapibus arcu viverra, consequat nisl. Nam lectus lectus, tempus vitae neque ut, pharetra blandit dui.",
    images: ['http://placehold.it/600x400', 'http://placehold.it/600x400', 'http://placehold.it/600x400'],
  },
  {
    id: 5,
    selected: false,
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit quam. Sed euismod lorem dui. Vestibulum ultrices accumsan scelerisque. Morbi sit amet odio libero. Fusce scelerisque elit nulla, sed fermentum libero lacinia at. Nam ultricies enim vel ante iaculis laoreet eu dignissim neque. Aliquam id metus dapibus, pharetra nisi id, tincidunt est. Nam magna ex, sagittis eu lorem quis, fringilla convallis dolor. Integer id nibh eros. Etiam vehicula, arcu et lacinia fermentum, dui est pellentesque nisl, vitae hendrerit lacus mauris sit amet neque. Quisque ultrices sodales enim. Duis eu sapien mollis, dapibus arcu viverra, consequat nisl. Nam lectus lectus, tempus vitae neque ut, pharetra blandit dui.",
    images: ['http://placehold.it/600x400', 'http://placehold.it/600x400', 'http://placehold.it/600x400'],
  }
];

var vm = new Vue({
  el: '#app',
  data: {
    aboutBox: false,
    contactBox: false,
    isProjectShowing: true,
    activeProject: 0,
    projects: projectObj
  },
  computed: {
    isMobileDevice: function() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }
  },
  methods: {
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
      this.isProjectShowing = false;
    }
  },
  mounted: function() {
    document.getElementById('fadeIn')
    .velocity({opacity:0}, {duration: 1000})
    .velocity({display:'none'}, {duration: 0});
  }
});
