import Model, { attr, hasMany } from '@ember-data/model';

export default class PanelModel extends Model {
  @attr layoutRowClass;
  @attr layoutColumnClass;
  @attr otherClasses;

  @hasMany('illustration', { async: false }) illustrations;
}
