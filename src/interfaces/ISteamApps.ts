interface ISteamApps {
    getAppBetas(APP_ID: number): Promise<any>;
    getAppBuilds(APP_ID: number, COUNT: number): Promise<any>;
    getAppDepotVersions(APP_ID: number): Promise<any>;
    getAppList(): Promise<any>;
    getPartnerAppListForWebAPIKey(TYPE_FILTER: string): Promise<any>;
    getPlayersBanned(APP_ID: number): Promise<any>;
    getServerList(FILTER: string, LIMIT: number): Promise<any>;
    getServersAtAddress(ADDR: string): Promise<any>;
    setAppBuildLive(APP_ID: number, BUILD_ID: number, BETA_KEY: string, STEAM_ID: number, DESCRIPTION: string): Promise<any>;
    upToDateCheck(APP_ID: number, VERSION: number): Promise<any>;
}