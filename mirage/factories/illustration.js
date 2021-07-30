import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  url(i) {
    return `https://picsum.photos/id/${i + 10}/300/300`; // Movie 1, Movie 2, etc.
  },

  alt(i) {
    return `Alt description ${i + 10}`; // Movie 1, Movie 2, etc.
  },
});
