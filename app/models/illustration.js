import Model, { attr } from '@ember-data/model';

export default class IllustrationModel extends Model {
  @attr url;
  @attr alt;
}
