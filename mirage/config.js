export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  this.get('/panels', function (schema, request) {
    let pagination = request.queryParams;
    let allPanels = schema.panels.all();
    let panels = allPanels;

    if (pagination.page && pagination.per_page) {
      let currentPage = Number(pagination.page);
      let perPage = Number(pagination.per_page);
      let start = (currentPage - 1) * perPage;
      let end = start + perPage;

      panels = allPanels.slice(start, end);
    }

    let json = this.serialize(panels);

    json.meta = {
      total_pages: 3,
    };

    return json;
  });

  this.get('/panels/:id');
  this.get('/illustrations');
  this.get('/illustrations/:id');
}
