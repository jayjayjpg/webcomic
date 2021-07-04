import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  url(i) {
    return `https://picsum.photos/id/${i + 10}/300/300`; // Movie 1, Movie 2, etc.
  },

  /* layoutColumnClass() {
    return `col-end-${Math.floor(Math.random() * 4) + 1}`;
  },

  layoutRowClass(i) {
    return `row-end-${Math.floor(Math.random() * 4) + 1}`;
  }, */

  layoutColumnClass() {
    return '';
  },

  layoutRowClass(i) {
    return '';
  },

  otherClasses(i) {
    return `abc-${i}`;
  },
});
