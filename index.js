const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const guildId = '';
const roleId = '';
const targetTag = '';
const token = '';

client.on('ready', async () => {
    console.log(`${client.user.tag} olarak giriş yapıldı!`);

    const guild = client.guilds.cache.get(guildId);
    if (!guild) return console.log('Sunucu bulunamadı.');

    const role = guild.roles.cache.get(roleId);
    if (!role) return console.log('Rol bulunamadı.');

    const checkMembers = async () => {
        try {
            await guild.members.fetch();

            guild.members.cache.forEach(async (member) => {
                const clanTag = member.user?.clan?.tag;

                if (clanTag && clanTag.includes(targetTag)) {
                    if (!member.roles.cache.has(role.id)) {
                        try {
                            await member.roles.add(role);
                            console.log(`${member.user.tag} kullanıcısına rol verildi!`);
                        } catch (err) {
                            console.error(`${member.user.tag} - Rol verme hatası:`, err);
                        }
                    }
                } else {
                    if (member.roles.cache.has(role.id)) {
                        try {
                            await member.roles.remove(role);
                            console.log(`${member.user.tag} kullanıcısından rol alındı!`);
                        } catch (err) {
                            console.error(`${member.user.tag} - Rol alma hatası:`, err);
                        }
                    }
                }
            });

        } catch (err) {
            console.error('Üye taraması sırasında hata:', err);
        }
    };

    await checkMembers();
    setInterval(checkMembers, 20 * 1000);
});

client.login(token);