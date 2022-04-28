const WebTorrent = require('webtorrent')
const cliProgress = require('cli-progress')

const client = new WebTorrent()

const magnets = [
  'magnet:?xt=urn:btih:A53E3226A59F4032EEFA26CEFE6A9BDEE17AA970&dn=KMSpico+10.1.8+FINAL+%2B+Portable+%28Office+and+Windows+10+Activator%29+%5BTechTools%5D&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.nwps.ws%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Finferno.demonoid.ooo%3A3392%2Fannounce&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
]

for (let i = 0; i < magnets.length; i++) {
  const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
  const currMagnet = magnets[i]

  progressBar.start(1, 0)

  client.add(currMagnet, { path: './downloads' }, function (torrent) {
    torrent.on('download', (bytes) => {
      progressBar.update(torrent.progress)
    })

    torrent.on('done', function () {
      progressBar.update(1)
      progressBar.stop()
      console.log('Download finished')
    })
  })

  console.log(client.progress)
}
