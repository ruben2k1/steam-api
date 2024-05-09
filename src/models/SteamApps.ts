class SteamApps extends Steam implements ISteamApps {
    constructor(API_KEY: string) {
        super(API_KEY);
    }

    async getAppBetas(APP_ID: number): Promise<any> {
        const res: Response = await fetch(`https://partner.steam-api.com/ISteamApps/GetAppBetas/v1/?key=${this.API_KEY}&appid=${APP_ID}`);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }

    async getAppBuilds(APP_ID: number, COUNT: number = 10): Promise<any> {
        const res: Response = await fetch(`https://partner.steam-api.com/ISteamApps/GetAppBuilds/v1/?key=${this.API_KEY}&appid=${APP_ID}&count=${COUNT}`);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }

    async getAppDepotVersions(APP_ID: number): Promise<any> {
        const res: Response = await fetch(`https://partner.steam-api.com/ISteamApps/GetAppDepotVersions/v1/?key=${this.API_KEY}&appid=${APP_ID}`);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }

    async getAppList(): Promise<any> {
        const res: Response = await fetch(`https://api.steampowered.com/ISteamApps/GetAppList/v2/?key=${this.API_KEY}`);

        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }
    
    async getPartnerAppListForWebAPIKey(TYPE_FILTER?: string): Promise<any> {
        let url = `https://partner.steam-api.com/ISteamApps/GetPartnerAppListForWebAPIKey/v2/?key=${this.API_KEY}`;
        
        if (TYPE_FILTER) {
            url += `&type_filter=${TYPE_FILTER}`;
        }

        const res: Response = await fetch(url);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }
    
    async getPlayersBanned(APP_ID: number): Promise<any> {
        const res: Response = await fetch(`https://partner.steam-api.com/ISteamApps/GetPlayersBanned/v1/?key=${this.API_KEY}&appid=${APP_ID}`);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }
    
    async getServerList(FILTER: string, LIMIT: number = 50): Promise<any> {
        const res: Response = await fetch(`https://partner.steam-api.com/ISteamApps/GetServerList/v1/?key=${this.API_KEY}&filter=${FILTER}&limit=${LIMIT}`);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }
    
    async getServersAtAddress(ADDR: string): Promise<any> {
        const res: Response = await fetch(`https://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?addr=${ADDR}`);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json.response, res.status ];
        }

        return [ res.status ];
    }
    
    async setAppBuildLive(APP_ID: number, BUILD_ID: number, BETA_KEY: string = 'PUBLIC', STEAM_ID?: number, DESCRIPTION?: string): Promise<void> {
        const url = 'https://partner.steam-api.com/ISteamApps/SetAppBuildLive/v2/';

        const bodyData = {
            key: this.API_KEY,
            appid: APP_ID,
            buildid: BUILD_ID,
            betakey: BETA_KEY,
            steamid: STEAM_ID,
            description: DESCRIPTION
        }

        const res: Response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        })

        if (!res.ok) {
            throw new Error('The request could not be sent');
        }
    }
    
    async upToDateCheck(APP_ID: number, VERSION: number): Promise<any> {
        const res: Response = await fetch(`https://api.steampowered.com/ISteamApps/UpToDateCheck/v1/?appid=${APP_ID}&version=${VERSION}`);
        
        if (res.ok) {
            const json: any = await res.json();

            return [ json, res.status ];
        }

        return [ res.status ];
    }
}