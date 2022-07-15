import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';


export const grpcOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'activityservice',
        url: 'localhost:8001',
        protoPath: join(process.cwd(), './activity-service.proto'),
    }
}