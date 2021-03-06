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

export interface EventRequest {
  gameId?: number;
  title: string;
  description?: string;
  url?: string;
  startTime: Date;
  duration?: number;
  repeatBy?: number;
  until?: Date;
}
