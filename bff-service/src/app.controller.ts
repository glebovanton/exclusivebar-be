import {
  Controller,
  All,
  Req,
  BadGatewayException,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Request } from 'express';
import { Cache } from 'cache-manager';
import { AppService } from './app.service';

ConfigModule.forRoot();

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  private readonly productsCacheKey = 'productsCache';

  @All('*')
  async root(@Req() { originalUrl, method, body }: Request) {
    const recipient = originalUrl.split('/')[1];
    const shouldUseCache = method === 'GET' && recipient === 'products';
    const cachedProducts = await this.cacheManager.get(this.productsCacheKey);

    if (shouldUseCache && cachedProducts) {
      return cachedProducts;
    }

    const ApiUrl = {
      products: process?.env?.productAPI ?? '',
      profile: process?.env?.cartAPI ?? '',
      cart: process?.env?.cartAPI ?? '',
    };
    const recipientUrl = ApiUrl[recipient];
    const url = `${recipientUrl}${originalUrl}`;

    if (recipientUrl) {
      const { data } = await this.appService.request(method, url, body);

      if (shouldUseCache && !cachedProducts) {
        const cacheTTL = 120;
        await this.cacheManager.set(this.productsCacheKey, data, {
          ttl: cacheTTL,
        });
      }

      return data;
    }

    throw new BadGatewayException('Cannot process request');
  }
}
