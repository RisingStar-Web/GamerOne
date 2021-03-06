/**
 * Gamer One API Documentation
 * Welcome to the Official Gamer One API documentation.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: developer@gamerone.gg
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface PagedResponse {
  /**
   * Meta pagination information about the per page record
   */
  perPage: number;
  /**
   * Meta pagination information about the current page.
   */
  currentPage: number;
  from: number;
  to: number;
  total: number;
  lastPage: number;
  lastPageUrl: string;
  firstPageUrl: string;
  nextPageUrl: string;
  path: string;
  prevPageUrl: string;
}
