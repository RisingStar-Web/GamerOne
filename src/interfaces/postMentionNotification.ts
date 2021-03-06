/**
 * Gamer One API Documentation
 * Welcome to the Official Gamer One API documentation.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: developer@g1.gg
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BaseNotification } from './baseNotification';
import { PostMentionNotificationData } from './postMentionNotificationData';

export interface PostMentionNotification extends BaseNotification {
  data: PostMentionNotificationData;
}
