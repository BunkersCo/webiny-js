import { createHandler } from "@webiny/handler";
import { HandlerApolloGatewayOptions } from "@webiny/handler-apollo-gateway/types";
import apolloGatewayHandler from "@webiny/handler-apollo-gateway";

declare const HANDLER_APOLLO_GATEWAY_OPTIONS: HandlerApolloGatewayOptions;

export const handler = createHandler(apolloGatewayHandler(HANDLER_APOLLO_GATEWAY_OPTIONS));
