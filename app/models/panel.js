import Model, { attr } from '@ember-data/model';

export default class PanelModel extends Model {
  @attr url;
  @attr layoutRowClass;
  @attr layoutColumnClass;
  @attr otherClasses;
}
