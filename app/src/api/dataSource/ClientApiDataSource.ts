import {
  ApiResponse,
  JsonRpcClient,
  RequestConfig,
  WsSubscriptionsClient,
  RpcError,
  handleRpcError,
} from '@calimero-network/calimero-client';
import {
  ClientApi,
  ClientMethod,
  GetCountResponse,
  IncreaseCountRequest,
  IncreaseCountResponse,
  ResetCounterResponse,
  AddReceiptRequest,
  AddReceiptResponse,
  GetCreatedReceiptsRequest,
  GetReceivedReceiptsRequest,
  ReceiptsResponse,
  AcknowledgeReceiptRequest,
  AcknowledgeReceiptResponse,
  IsAcknowledgedRequest,
  IsAcknowledgedResponse,
  GetCreatedReceiptContentsRequest,
  ReceiptContentsResponse,
} from '../clientApi';
import { getContextId, getNodeUrl } from '../../utils/node';
import {
  getJWTObject,
  getStorageAppEndpointKey,
  JsonWebToken,
} from '../../utils/storage';
import { AxiosHeader, createJwtHeader } from '../../utils/jwtHeaders';
import { getRpcPath } from '../../utils/env';

export function getJsonRpcClient() {
  return new JsonRpcClient(getStorageAppEndpointKey() ?? '', getRpcPath());
}

export function getWsSubscriptionsClient() {
  return new WsSubscriptionsClient(getStorageAppEndpointKey() ?? '', '/ws');
}

function getConfigAndJwt() {
  const jwtObject: JsonWebToken | null = getJWTObject();
  const headers: AxiosHeader | null = createJwtHeader();
  if (!headers) {
    return {
      error: { message: 'Failed to create auth headers', code: 500 },
    };
  }
  if (!jwtObject) {
    return {
      error: { message: 'Failed to get JWT token', code: 500 },
    };
  }
  if (jwtObject.executor_public_key === null) {
    return {
      error: { message: 'Failed to get executor public key', code: 500 },
    };
  }

  const config: RequestConfig = {
    headers: headers,
    timeout: 10000,
  };

  return { jwtObject, config };
}

export class ClientApiDataSource implements ClientApi {
  private async handleError(
    error: RpcError,
    params: any,
    callbackFunction: any,
  ) {
    if (error && error.code) {
      const response = await handleRpcError(error, getNodeUrl);
      if (response.code === 403) {
        return await callbackFunction(params);
      }
      return {
        error: await handleRpcError(error, getNodeUrl),
      };
    }
  }
  async getCount(): ApiResponse<GetCountResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().query<any, GetCountResponse>(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.GET_COUNT,
        argsJson: {},
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );
    if (response?.error) {
      return await this.handleError(response.error, {}, this.getCount);
    }

    return {
      data: { count: Number(response?.result?.output) ?? 0 },
      error: null,
    };
  }

  async increaseCount(
    params: IncreaseCountRequest,
  ): ApiResponse<IncreaseCountResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().mutate<
      IncreaseCountRequest,
      IncreaseCountResponse
    >(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.INCREASE_COUNT,
        argsJson: params,
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );
    if (response?.error) {
      return await this.handleError(response.error, {}, this.increaseCount);
    }

    return {
      data: Number(response?.result?.output) ?? null,
      error: null,
    };
  }

  async reset(): ApiResponse<ResetCounterResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().mutate<any, ResetCounterResponse>(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.RESET,
        argsJson: {},
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );
    if (response?.error) {
      return await this.handleError(response.error, {}, this.reset);
    }

    return {
      data: Number(response?.result?.output) ?? null,
      error: null,
    };
  }

  async addReceipt(params: AddReceiptRequest): ApiResponse<AddReceiptResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().mutate<
      AddReceiptRequest,
      AddReceiptResponse
    >(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.ADD_RECEIPT,
        argsJson: {
          ...params,
          caller: jwtObject.executor_public_key,
        },
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );

    if (response?.error) {
      return await this.handleError(response.error, params, this.addReceipt);
    }

    return {
      data: { success: true },
      error: null,
    };
  }

  async getCreatedReceipts(
    params: GetCreatedReceiptsRequest,
  ): ApiResponse<ReceiptsResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().query<
      GetCreatedReceiptsRequest,
      Record<string, boolean>
    >(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.GET_CREATED_RECEIPTS,
        argsJson: {
          caller: jwtObject.executor_public_key,
        },
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );

    if (response?.error) {
      return await this.handleError(
        response.error,
        {},
        this.getCreatedReceipts,
      );
    }

    return {
      data: {
        acknowledgments: response?.result?.output ?? {},
      },
      error: null,
    };
  }

  async getReceivedReceipts(
    params: GetReceivedReceiptsRequest,
  ): ApiResponse<ReceiptsResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().query<
      GetReceivedReceiptsRequest,
      Record<string, boolean>
    >(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.GET_RECEIVED_RECEIPTS,
        argsJson: {
          caller: jwtObject.executor_public_key,
        },
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );

    if (response?.error) {
      return await this.handleError(
        response.error,
        {},
        this.getReceivedReceipts,
      );
    }

    return {
      data: {
        acknowledgments: response?.result?.output ?? {},
      },
      error: null,
    };
  }

  async acknowledgeReceipt(
    params: AcknowledgeReceiptRequest,
  ): ApiResponse<AcknowledgeReceiptResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().mutate<
      AcknowledgeReceiptRequest,
      string
    >(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.ACKNOWLEDGE_RECEIPT,
        argsJson: {
          ...params,
          caller: jwtObject.executor_public_key,
        },
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );

    if (response?.error) {
      return await this.handleError(
        response.error,
        params,
        this.acknowledgeReceipt,
      );
    }

    return {
      data: {
        success: true,
        content: response?.result?.output ?? '',
      },
      error: null,
    };
  }

  async isAcknowledged(
    params: IsAcknowledgedRequest,
  ): ApiResponse<IsAcknowledgedResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().query<
      IsAcknowledgedRequest,
      boolean
    >(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.IS_ACKNOWLEDGED,
        argsJson: {
          ...params,
          caller: jwtObject.executor_public_key,
        },
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );

    if (response?.error) {
      return await this.handleError(
        response.error,
        params,
        this.isAcknowledged,
      );
    }

    return {
      data: { is_acknowledged: response?.result?.output ?? false },
      error: null,
    };
  }

  async getCreatedReceiptContents(
    params: GetCreatedReceiptContentsRequest,
  ): ApiResponse<ReceiptContentsResponse> {
    const { jwtObject, config, error } = getConfigAndJwt();
    if (error) {
      return { error };
    }

    const response = await getJsonRpcClient().query<
      GetCreatedReceiptContentsRequest,
      Record<string, string>
    >(
      {
        contextId: jwtObject?.context_id ?? getContextId(),
        method: ClientMethod.GET_CREATED_RECEIPT_CONTENTS,
        argsJson: {
          caller: jwtObject.executor_public_key,
        },
        executorPublicKey: jwtObject.executor_public_key,
      },
      config,
    );

    if (response?.error) {
      return await this.handleError(
        response.error,
        params,
        this.getCreatedReceiptContents,
      );
    }

    return {
      data: {
        contents: response?.result?.output ?? {},
      },
      error: null,
    };
  }
}
