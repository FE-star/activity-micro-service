/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'activityservice';

export interface ActivityRequest {
  id: string;
}

export interface ActivityResponse {
  id: string;
  offer: Offer[];
}

export interface Offer {
  nid: string;
  title: string;
  pictUrl: string;
  icons: Icon[];
}

export interface Icon {
  type: string;
  bgColor: string;
  borderColor: string;
  fontColor: string;
  text: string;
  source: string;
}

export const ACTIVITYSERVICE_PACKAGE_NAME = 'activityservice';

export interface ActivityServiceClient {
  call(request: ActivityRequest): Observable<ActivityResponse>;
}

export interface ActivityServiceController {
  call(
    request: ActivityRequest,
  ):
    | Promise<ActivityResponse>
    | Observable<ActivityResponse>
    | ActivityResponse;
}

export function ActivityServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['call'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('ActivityService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('ActivityService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ACTIVITY_SERVICE_NAME = 'ActivityService';
