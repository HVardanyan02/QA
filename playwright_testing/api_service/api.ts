import { APIRequestContext } from "@playwright/test";

export class Api {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  public async deleteTweet({
    queryId,
    tweetId,
  }: {
    queryId: string;
    tweetId: string;
  }) {
    const url = `https://x.com/i/api/graphql/${queryId}/DeleteTweet`;
    const requestBody = {
      variables: { tweet_id: tweetId, dark_request: false },
      queryId: queryId,
    };

   const response = await this.request.post(url, {
        data: requestBody,
        headers:{
            "Content-Type": "application/json",
            "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"
        }
    });

    console.log(":::: resp ",  response.status())
    console.log(":::: resp ", await response.text())
  }
}
