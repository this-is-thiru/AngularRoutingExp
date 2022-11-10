import { Injectable } from "@angular/core";

@Injectable()
export class ServersService{
    servers:{id:number, name:string, status:string}[] = [
        {
            id: 1,
            name: 'Production Server',
            status: 'online'
        },
        {
            id: 2,
            name: 'Test Server',
            status: 'offline'
        },
        {
            id: 3,
            name: 'Development Server',
            status: 'offline'
        }
    ];
    getServers(){
        return this.servers;
    }

    getServer(id: number){
        const server:any = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        return server;
    }

    updateServer(id:number, serverInfo:{name:string, status:string}){
        const server:any = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        if(server){
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}