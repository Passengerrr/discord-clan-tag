# Discord Rol Yönetim Botu

Bu bot, belirli bir Discord sunucusunda kullanıcıların klan etiketlerine göre otomatik rol verme ve alma işlemlerini gerçekleştirir.

## Özellikler

- Belirli bir klan etiketine sahip kullanıcılara otomatik rol verme
- Klan etiketini kaybeden kullanıcılardan rolü otomatik alma
- Her 20 saniyede bir otomatik kontrol
- Hata yönetimi ve loglama

## Kurulum

1. Projeyi indirin
2. Gerekli paketleri yükleyin:
```bash
npm install 
```

## Yapılandırma

`index.js` dosyasında aşağıdaki değişkenleri doldurun:

- `guildId`: Hedef Discord sunucusunun ID'si
- `roleId`: Verilecek/alınacak rolün ID'si
- `targetTag`: Aranacak klan etiketi
- `token`: Discord hesap tokeni

## Kullanım

Botu başlatmak için:

```bash
node index.js
```

Bot başarıyla çalıştığında konsola giriş yapıldığına dair bir mesaj yazdırılacaktır.

## Güvenlik Uyarısı

> [!WARNING] 
> **ÖNEMLİ**: Self-bot kullanımı Discord'un Hizmet Şartları'na aykırıdır. Bu botu kullanırken hesabınızın kapatılma riski olduğunu unutmayın.

## Hata Ayıklama

Bot çalışırken oluşabilecek hatalar konsola yazdırılır:
- Sunucu bulunamadığında
- Rol bulunamadığında
- Rol verme/alma işlemlerinde hata oluştuğunda
- Üye taraması sırasında oluşan hatalarda 

## Lisans

> [!IMPORTANT] 
> Bu proje GNU General Public License v2.0 ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakabilirsiniz. 
