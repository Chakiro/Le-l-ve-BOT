const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDM3OTM3MzIzMTgzNzAyMDI3.Db9U3A.II-aXsp0xdGnBiWu6B1rtk6vA2s";
var prefix = "~";
var mention = <@437937323183702027>"

client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join(',');Euro-bot
console.log('I m ready');
});Euro-bot
var messages = [];Euro-bot
client.on('message', message => {
if (message.content.startsWith(prefix + "test")} {
message.channel.send('5/5');});


client.on('message', message => {
if (message.content.startsWith(prefix + "ping")} {
var now = require('performance-now');
var startTime = now();
message.channel.send("pong = wait....");
.then(message => {
var endTime = now();
return message.edit("**pong :ping_pong: = " + Math.round(endTime - startTime) + " ms.**");
}).catch(console.error);
}});

client.login(process.env.TOKEN);
